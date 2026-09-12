import { Worker } from "bullmq";
import prisma from "@/prisma";
import { env } from "@/common/utils/env-config";
import { logger } from "@/server";
import fetch from "node-fetch";


export const lineCampaignWorker = new Worker(
  "lineCampaignQueue",
  async (job) => {
    const { campaignId } = job.data;
    
    logger.info(`Starting processing for LINE campaign: ${campaignId}`);

    const campaign = await prisma.campaign.findUnique({
      where: { id: campaignId },
      include: { logs: { where: { status: "pending" } } },
    });

    if (!campaign || !campaign.metaToken) {
      logger.error(`Campaign ${campaignId} missing LINE Channel Access Token`);
      return;
    }

    const { metaToken: channelAccessToken, providerConfig, message, logs } = campaign;
    
    let config: any = {};
    try {
      config = JSON.parse(providerConfig || "{}");
    } catch (e) {
      logger.warn("No valid JSON providerConfig found, defaulting to broadcast");
    }

    const mode = config.broadcastMode || "broadcast";
    const hasPersonalization = message.includes("{{");

    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${channelAccessToken}`
    };

    let baseMessage: any = { type: "text", text: message };

    if (config.imageUrl || config.buttonText) {
      baseMessage = {
        type: "template",
        altText: message.substring(0, 400), // altText is required for template messages
        template: {
          type: "buttons",
          thumbnailImageUrl: config.imageUrl || undefined,
          title: config.buttonText ? "Notification" : undefined,
          text: message.substring(0, 160), // Button template text is limited to 160 chars
          actions: [
            {
              type: "uri",
              label: (config.buttonText || "Click Here").substring(0, 20),
              uri: config.buttonUrl || "https://line.me"
            }
          ]
        }
      };
    }

    try {
      if (mode === "broadcast") {
        // Send to all friends
        const res = await fetch("https://api.line.me/v2/bot/message/broadcast", {
          method: "POST",
          headers,
          body: JSON.stringify({ messages: [baseMessage] })
        });
        
        if (!res.ok) {
          const errText = await res.text();
          throw new Error(`LINE Broadcast API Error: ${errText}`);
        }
        
        // Update all logs as success
        await prisma.messageLog.updateMany({
          where: { campaignId },
          data: { status: "sent" }
        });

      } else if (mode === "multicast") {
        
        // Opt-out and Personalization preprocessing
        // 1. Fetch Contact details to check opt-out and replace names
        const contactRecords = await prisma.contact.findMany({
          where: { lineId: { in: logs.map((l: any) => l.contact) } }
        });

        const activeLogs = [];
        const optOutLogs = [];
        
        for (const log of logs) {
          const cRecord = contactRecords.find((c: any) => c.lineId === log.contact);
          if (cRecord?.isOptedOut) {
            optOutLogs.push(log.id);
          } else {
            activeLogs.push({ log, cRecord });
          }
        }

        // Mark opted-out logs as failed
        if (optOutLogs.length > 0) {
          await prisma.messageLog.updateMany({
            where: { id: { in: optOutLogs } },
            data: { status: "failed", error: "User opted out" }
          });
        }

        if (hasPersonalization || baseMessage.type === "template") {
          // Push API (1-by-1) required for personalization
          for (const item of activeLogs) {
            let finalMsg = JSON.parse(JSON.stringify(baseMessage)); // deep copy
            if (finalMsg.type === "text") {
              finalMsg.text = finalMsg.text.replace(/{{firstName}}/g, item.cRecord?.firstName || "Friend");
              finalMsg.text = finalMsg.text.replace(/{{lastName}}/g, item.cRecord?.lastName || "");
            } else if (finalMsg.type === "template") {
              finalMsg.template.text = finalMsg.template.text.replace(/{{firstName}}/g, item.cRecord?.firstName || "Friend");
              finalMsg.altText = finalMsg.altText.replace(/{{firstName}}/g, item.cRecord?.firstName || "Friend");
            }

            const res = await fetch("https://api.line.me/v2/bot/message/push", {
              method: "POST",
              headers,
              body: JSON.stringify({ to: item.log.contact, messages: [finalMsg] })
            });

            if (!res.ok) {
              const errText = await res.text();
              await prisma.messageLog.update({
                where: { id: item.log.id },
                data: { status: "failed", error: errText }
              });
            } else {
              await prisma.messageLog.update({
                where: { id: item.log.id },
                data: { status: "sent" }
              });
            }
          }
        } else {
          // Multicast API (Batch 500)
          const CHUNK_SIZE = 500;
          const activeIds = activeLogs.map(a => a.log.contact);
          
          for (let i = 0; i < activeIds.length; i += CHUNK_SIZE) {
            const chunk = activeIds.slice(i, i + CHUNK_SIZE);
            
            const res = await fetch("https://api.line.me/v2/bot/message/multicast", {
              method: "POST",
              headers,
              body: JSON.stringify({ to: chunk, messages: [baseMessage] })
            });

            if (!res.ok) {
              const errText = await res.text();
              logger.error(`Multicast chunk failed: ${errText}`);
              const failedLogIds = activeLogs.slice(i, i + CHUNK_SIZE).map(a => a.log.id);
              await prisma.messageLog.updateMany({
                where: { id: { in: failedLogIds } },
                data: { status: "failed", error: errText }
              });
            } else {
              const successLogIds = activeLogs.slice(i, i + CHUNK_SIZE).map(a => a.log.id);
              await prisma.messageLog.updateMany({
                where: { id: { in: successLogIds } },
                data: { status: "sent" }
              });
            }
          }
        }
      } else if (mode === "narrowcast") {
        // Basic Narrowcast (you could expand this to include demographic filters from config)
        const res = await fetch("https://api.line.me/v2/bot/message/narrowcast", {
          method: "POST",
          headers,
          body: JSON.stringify({ messages: [baseMessage] })
        });
        
        if (!res.ok) {
          const errText = await res.text();
          throw new Error(`LINE Narrowcast API Error: ${errText}`);
        }
        
        await prisma.messageLog.updateMany({
          where: { campaignId },
          data: { status: "sent" }
        });
      }

      // Mark campaign as completed
      await prisma.campaign.update({
        where: { id: campaignId },
        data: { status: "completed" }
      });
      logger.info(`LINE Campaign ${campaignId} completed successfully.`);

    } catch (error: any) {
      logger.error(`LINE Campaign ${campaignId} failed: ${error.message}`);
      await prisma.campaign.update({
        where: { id: campaignId },
        data: { status: "failed" }
      });
      await prisma.messageLog.updateMany({
        where: { campaignId, status: "pending" },
        data: { status: "failed", error: error.message }
      });
    }
  },
  {
    connection: {
      host: env.COMPOSER_REDIS_HOST,
      port: env.COMPOSER_REDIS_PORT,
    },
  }
);
