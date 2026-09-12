import express, { type Request, type Response, type Router } from "express";
import prisma from "@/prisma";
import { SmsProviderFactory } from "./providers/provider-factory";

export const smsWebhooksRouter: Router = express.Router();

// 1. Delivery Receipts (DLR) webhook
smsWebhooksRouter.post("/dlr/:provider", async (req: Request, res: Response) => {
  const { provider: providerName } = req.params;
  
  try {
    const provider = SmsProviderFactory.getProvider(providerName as string);
    
    if (provider.parseDeliveryReceipt) {
      const receipt = provider.parseDeliveryReceipt(req);
      if (receipt && receipt.messageId) {
        // Ideally we would map provider messageId to our messageLog, 
        // but for now we just update based on our known structure if we stored provider messageId.
        // In this basic version, we just log it.
        console.log(`[DLR] ${providerName} - Message: ${receipt.messageId}, Status: ${receipt.status}`);
      }
    }
    
    res.status(200).send("OK");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error");
  }
});

// 2. Incoming Replies webhook
smsWebhooksRouter.post("/reply/:provider", async (req: Request, res: Response) => {
  const { provider: providerName } = req.params;
  
  try {
    const provider = SmsProviderFactory.getProvider(providerName as string);
    
    if (provider.parseReply) {
      const reply = provider.parseReply(req);
      if (reply && reply.from && reply.message) {
        // Save reply to database
        await prisma.smsReply.create({
          data: {
            fromNumber: reply.from,
            message: reply.message,
            provider: providerName,
            receivedAt: reply.timestamp || new Date()
          }
        });
        console.log(`[Reply] ${providerName} - From: ${reply.from}, Message: ${reply.message}`);
      }
    }
    
    res.status(200).send("OK");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error");
  }
});
