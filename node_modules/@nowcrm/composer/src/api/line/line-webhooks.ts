import express, { type Request, type Response, type Router } from "express";
import prisma from "@/prisma";
import { logger } from "@/server";

export const lineWebhooksRouter: Router = express.Router();

lineWebhooksRouter.post("/webhook", async (req: Request, res: Response) => {
  const events = req.body.events;
  if (!events || !Array.isArray(events)) {
    return res.status(200).send("OK");
  }

  for (const event of events) {
    const userId = event.source?.userId;
    if (!userId) continue;

    // Handle Messages (Opt-out)
    if (event.type === "message" && event.message?.type === "text") {
      const text = event.message.text.trim().toLowerCase();
      if (text === "stop" || text === "unsubscribe" || text === "opt-out") {
        await prisma.contact.updateMany({
          where: { lineId: userId },
          data: { isOptedOut: true }
        });
        logger.info(`LINE User ${userId} opted out.`);
      }
    }

    // Handle Delivery/Read receipts if you enabled delivery receipts in LINE console
    if (event.type === "delivery") {
      // LINE delivery event doesn't typically tie back to our local MessageLog ID easily
      // unless we matched by contact + time, but usually we just update ALL pending logs for that user
      // or we can use the `delivery.deliveryId` if we stored it (LINE doesn't return ID on push, so it's tricky).
      // A common pattern is to just update recent logs for that userId:
      await prisma.messageLog.updateMany({
        where: { contact: userId, status: "sent" },
        data: { status: "delivered" }
      });
    }
  }

  res.status(200).send("OK");
});
