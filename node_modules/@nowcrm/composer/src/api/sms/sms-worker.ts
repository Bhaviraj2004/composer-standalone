import { Worker } from "bullmq";
import prisma from "@/prisma";
import { SmsProviderFactory } from "./providers/provider-factory";


export const smsCampaignWorker = new Worker(
  "sms-campaigns",
  async (job) => {
    const { campaignId, scheduledAt } = job.data;
    
    const campaign = await prisma.campaign.findUnique({
      where: { id: campaignId },
      include: {
        segment: {
          include: { contacts: true }
        }
      }
    });

    if (!campaign) {
      throw new Error(`Campaign ${campaignId} not found`);
    }

    // Check if we need to schedule this
    if (scheduledAt && new Date(scheduledAt) > new Date()) {
      // It should be handled by BullMQ delay, but if not we can re-enqueue
      return;
    }

    const providerName = campaign.provider || "twilio";
    const provider = SmsProviderFactory.getProvider(providerName, campaign.providerConfig);

    // If campaign is segment-based
    if (campaign.segment) {
      for (const contact of campaign.segment.contacts) {
        try {
          const result = await provider.sendSms(contact.phone, campaign.message, { campaignId });
          
          await prisma.messageLog.create({
            data: {
              campaignId: campaign.id,
              contact: contact.phone,
              status: result.status,
            }
          });
        } catch (error: any) {
          await prisma.messageLog.create({
            data: {
              campaignId: campaign.id,
              contact: contact.phone,
              status: "failed",
              error: error.message
            }
          });
        }
      }
    } else {
      // Support legacy way where contacts were attached to message logs directly
      const pendingLogs = await prisma.messageLog.findMany({
        where: { campaignId, status: "pending" }
      });

      for (const log of pendingLogs) {
        try {
          const result = await provider.sendSms(log.contact, campaign.message, { campaignId });
          await prisma.messageLog.update({
            where: { id: log.id },
            data: { status: result.status }
          });
        } catch (error: any) {
          await prisma.messageLog.update({
            where: { id: log.id },
            data: { status: "failed", error: error.message }
          });
        }
      }
    }

    await prisma.campaign.update({
      where: { id: campaign.id },
      data: { status: "completed" }
    });
  },
  {
    connection: {
      host: process.env.COMPOSER_REDIS_HOST || "localhost",
      port: parseInt(process.env.COMPOSER_REDIS_PORT || "6379", 10),
    },
  }
);
