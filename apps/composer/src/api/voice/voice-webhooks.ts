import express, { type Request, type Response, type Router } from "express";
import prisma from "@/prisma";
import { VoiceProviderFactory } from "./providers/voice-provider-factory";

export const voiceWebhooksRouter: Router = express.Router();

// Provider specifies webhook action URLs like /webhook/voice/ivr/twilio
// We need an endpoint to serve the TwiML and track status

// 1. Call Status Webhook (ringing, answered, completed)
voiceWebhooksRouter.post("/status/:provider", express.urlencoded({ extended: true }), async (req: Request, res: Response) => {
  const { provider: providerName } = req.params;
  
  try {
    const provider = VoiceProviderFactory.getProvider(providerName as string);
    const update = provider.parseStatusWebhook(req);
    
    if (update && update.callId) {
      await prisma.messageLog.updateMany({
        where: { providerId: update.callId },
        data: { 
          status: update.status,
          duration: update.duration
        }
      });
      console.log(`[Voice Webhook] Call ${update.callId} status updated to ${update.status}`);
    }
    
    res.status(200).send("OK");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error");
  }
});

// 2. Initial IVR response generation (When call connects)
voiceWebhooksRouter.post("/ivr/:provider/:campaignId", express.urlencoded({ extended: true }), async (req: Request, res: Response) => {
  const { provider: providerName, campaignId } = req.params;
  
  try {
    const campaign = await prisma.campaign.findUnique({ where: { id: campaignId } });
    if (!campaign) {
      return res.status(404).send("Campaign not found");
    }

    const provider = VoiceProviderFactory.getProvider(providerName as string);
    const gatherUrl = `${req.protocol}://${req.get("host")}/webhook/voice/gather/${providerName}`;
    
    // Convert relative audio URL to absolute if needed
    const absoluteAudioUrl = campaign.audioUrl && campaign.audioUrl.startsWith("http") 
      ? campaign.audioUrl 
      : campaign.audioUrl ? `${req.protocol}://${req.get("host")}${campaign.audioUrl}` : null;

    const markup = provider.generateIvrResponse(absoluteAudioUrl, campaign.message, gatherUrl);
    
    res.set("Content-Type", "text/xml");
    res.status(200).send(markup);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error");
  }
});

