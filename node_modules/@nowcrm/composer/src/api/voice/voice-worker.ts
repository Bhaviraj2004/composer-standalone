import { Worker } from "bullmq";
import prisma from "@/prisma";
import { VoiceProviderFactory } from "./providers/voice-provider-factory";


export const voiceCampaignWorker = new Worker(
  "voice-campaigns",
  async (job) => {
    const { campaignId, scheduledAt, webhookBaseUrl } = job.data;
    
    const campaign = await prisma.campaign.findUnique({
      where: { id: campaignId },
      include: {
        logs: { where: { status: "pending" } }
      }
    });

    if (!campaign) {
      throw new Error(`Campaign ${campaignId} not found`);
    }

    if (scheduledAt && new Date(scheduledAt) > new Date()) {
      return; // Handled by delay
    }

    const providerName = campaign.provider || "twilio";
    const provider = VoiceProviderFactory.getProvider(providerName);
    
    // In production, the API URL would be something like env(BASE_URL)
    const baseUrl = webhookBaseUrl || `http://localhost:${process.env.COMPOSER_PORT || 3020}`;

    if (campaign.logs && campaign.logs.length > 0) {
      for (const log of campaign.logs) {
        try {
          const result = await provider.makeCall(
            log.contact, 
            campaign.audioUrl || null,
            campaign.message || null,
            baseUrl,
            campaign.providerConfig,
            { campaignId }
          );
          
          await prisma.messageLog.update({
            where: { id: log.id },
            data: {
              status: result.status, // e.g. "pending" or "queued"
              providerId: result.callId
            }
          });
        } catch (error: any) {
          await prisma.messageLog.update({
            where: { id: log.id },
            data: {
              status: "failed",
              error: error.message
            }
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
    concurrency: 5, // Limit concurrency for calls
  }
);
