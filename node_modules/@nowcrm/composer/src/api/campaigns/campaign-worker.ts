import { Worker } from "bullmq";
import prisma from "@/prisma";
import { env } from "@/common/utils/env-config";
import { logger } from "@/server";
import fetch from "node-fetch";


export const standaloneCampaignWorker = new Worker(
  "standaloneCampaignQueue",
  async (job) => {
    const { campaignId } = job.data;
    
    logger.info(`Starting processing for standalone campaign: ${campaignId}`);

    const campaign = await prisma.campaign.findUnique({
      where: { id: campaignId },
      include: { logs: { where: { status: "pending" } } },
    });

    if (!campaign || !campaign.metaToken || !campaign.adminId) {
      logger.error(`Campaign ${campaignId} missing credentials or not found`);
      return;
    }

    const { metaToken, adminId, platform, message, logs, isTemplate, templateLanguage, messageTag } = campaign;
    
    let url = "";
    if (platform === "whatsapp") {
      url = `https://graph.facebook.com/v22.0/${adminId}/messages`;
    } else if (platform === "facebook" || platform === "instagram") {
      // For FB/IG DMs, you send to the me/messages endpoint with the page access token
      url = `https://graph.facebook.com/v22.0/me/messages`;
    } else {
      logger.error(`Unsupported platform: ${platform}`);
      return;
    }

    for (const log of logs) {
      try {
        let payload: any = {};
        
        if (platform === "whatsapp") {
          if (isTemplate) {
            payload = {
              messaging_product: "whatsapp",
              to: log.contact,
              type: "template",
              template: {
                name: message, // user enters template name in message field
                language: {
                  code: templateLanguage || "en_US"
                }
              }
            };
          } else {
            payload = {
              messaging_product: "whatsapp",
              recipient_type: "individual",
              to: log.contact,
              type: "text",
              text: {
                preview_url: false,
                body: message,
              },
            };
          }
        } else if (platform === "facebook" || platform === "instagram") {
          payload = {
            recipient: {
              id: log.contact // The PSID or IGSID
            },
            message: {
              text: message
            }
          };
          if (messageTag) {
            payload.messaging_type = "MESSAGE_TAG";
            payload.tag = messageTag;
          }
        }

        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${metaToken}`,
          },
          body: JSON.stringify(payload),
        });

        const data = (await response.json()) as any;

        if (response.ok && (data.messages?.[0]?.id || data.message_id)) {
          await prisma.messageLog.update({
            where: { id: log.id },
            data: { status: "success" },
          });
        } else {
          await prisma.messageLog.update({
            where: { id: log.id },
            data: { status: "failed", error: data.error?.message || JSON.stringify(data) },
          });
        }

      } catch (error: any) {
        logger.error(`Error sending message for log ${log.id}: ${error.message}`);
        await prisma.messageLog.update({
          where: { id: log.id },
          data: { status: "failed", error: error.message },
        });
      }
    }
    
    // Mark campaign as completed
    await prisma.campaign.update({
      where: { id: campaignId },
      data: { status: "completed" }
    });
    
    logger.info(`Campaign ${campaignId} completed`);
  },
  {
    connection: {
      host: env.COMPOSER_REDIS_HOST || "localhost",
      port: env.COMPOSER_REDIS_PORT ? parseInt(env.COMPOSER_REDIS_PORT.toString()) : 6379,
    },
    concurrency: 1,
  }
);
