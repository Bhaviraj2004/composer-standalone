import express, { type Request, type Response, type Router } from "express";
import prisma from "@/prisma";
import { standaloneCampaignQueue } from "./campaign-queue";
import { voiceCampaignQueue } from "../voice/voice-queue";
import { emailCampaignQueue } from "../email/email-queue";
import { lineCampaignQueue } from "../line/line-queue";

export const campaignRouter: Router = express.Router();

// Get all campaigns
campaignRouter.get("/", async (req: Request, res: Response) => {
  try {
    const campaigns = await prisma.campaign.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        _count: {
          select: { logs: true }
        }
      }
    });
    res.json(campaigns);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch campaigns" });
  }
});


// Create and start a campaign
campaignRouter.post("/", async (req: Request, res: Response) => {
  const { name, platform, message, contacts, segmentId, audioUrl, metaToken, adminId, isTemplate, templateLanguage, messageTag, provider, providerConfig, scheduledAt } = req.body;
  
  if (!name || !platform) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  if (!contacts && !segmentId) {
    return res.status(400).json({ error: "Must provide either contacts or segmentId" });
  }

  if (["whatsapp", "facebook", "instagram"].includes(platform) && (!metaToken || !adminId)) {
    return res.status(400).json({ error: "Missing Meta credentials (metaToken, adminId)" });
  }
  
  try {
    // 1. Create the campaign
    const campaign = await prisma.campaign.create({
      data: {
        name,
        platform,
        message,
        metaToken: metaToken || null,
        adminId: adminId || null,
        provider: provider || null,
        providerConfig: providerConfig || null,
        isTemplate: isTemplate || false,
        templateLanguage: templateLanguage || null,
        messageTag: messageTag || null,
        audioUrl: audioUrl || null,
        segmentId: segmentId || null,
        subject: req.body.subject || null,
        scheduledAt: scheduledAt ? new Date(scheduledAt) : null,
        status: scheduledAt ? "scheduled" : "running"
      }
    });

    // 2. Resolve Contacts
    let contactList: string[] = [];
    
    if (segmentId) {
      const segment = await prisma.segment.findUnique({
        where: { id: segmentId },
        include: { contacts: true }
      });
      if (!segment) {
        return res.status(404).json({ error: "Segment not found" });
      }
      contactList = segment.contacts.map((c: any) => {
        if (platform === 'email') return c.email;
        if (platform === 'line') return c.lineId;
        return c.phone;
      }).filter(Boolean) as string[];
    } else if (contacts && contacts === 'all_audience') {
      // Special case for Broadcast mode in LINE or similar
      contactList = ['all_audience'];
    } else if (contacts) {
      contactList = contacts
        .split(/[\n,]+/)
        .map((c: string) => c.trim())
        .filter((c: string) => c.length > 0);
    }

    // 3. Create logs for each contact
    await prisma.messageLog.createMany({
      data: contactList.map((contact: string) => ({
        campaignId: campaign.id,
        contact,
        status: "pending"
      }))
    });

    // 4. Enqueue BullMQ job based on platform
    let delay = 0;
    if (scheduledAt) {
      delay = new Date(scheduledAt).getTime() - Date.now();
      if (delay < 0) delay = 0;
    }

    const jobOptions = delay > 0 ? { delay } : {};

    if (platform === "voice") {
      await voiceCampaignQueue.add("sendBulkCalls", { campaignId: campaign.id }, jobOptions);
    } else if (platform === "email") {
      await emailCampaignQueue.add("sendBulkEmails", { campaignId: campaign.id }, jobOptions);
    } else if (platform === "line") {
      await lineCampaignQueue.add("sendBulkLine", { campaignId: campaign.id }, jobOptions);
    } else {
      await standaloneCampaignQueue.add("sendBulkMessages", { campaignId: campaign.id }, jobOptions);
    }
    
    res.status(201).json({ success: true, campaign, totalContacts: contactList.length });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create campaign" });
  }
});

// Pause, Cancel, Resume, Retry Campaign
campaignRouter.put("/:id/status", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body; // "paused", "cancelled", "running", "retry"

  if (!["paused", "cancelled", "running", "retry"].includes(status)) {
    return res.status(400).json({ error: "Invalid status" });
  }

  try {
    const campaign = await prisma.campaign.findUnique({ where: { id } });
    if (!campaign) return res.status(404).json({ error: "Not found" });

    if (status === "retry") {
      // Find failed logs and retry them
      await prisma.messageLog.updateMany({
        where: { campaignId: id, status: "failed" },
        data: { status: "pending", error: null }
      });
      await prisma.campaign.update({
        where: { id },
        data: { status: "running" }
      });
      
      // Re-enqueue the job
      if (campaign.platform === "voice") await voiceCampaignQueue.add("sendBulkCalls", { campaignId: id });
      else if (campaign.platform === "email") await emailCampaignQueue.add("sendBulkEmails", { campaignId: id });
      else if (campaign.platform === "line") await lineCampaignQueue.add("sendBulkLine", { campaignId: id });
      else await standaloneCampaignQueue.add("sendBulkMessages", { campaignId: id });
      
      return res.json({ success: true, message: "Retrying failed messages" });
    }

    // For paused, cancelled, we just update the DB. Workers should check this status before continuing.
    // If the worker is already running, it won't magically stop midway unless the worker explicitly checks DB between loops.
    await prisma.campaign.update({
      where: { id },
      data: { status }
    });
    
    res.json({ success: true, status });
  } catch (error) {
    console.error("Status update error:", error);
    res.status(500).json({ error: "Failed to update campaign status" });
  }
});

// Get Campaign Analytics
campaignRouter.get("/:id/analytics", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const campaign = await prisma.campaign.findUnique({ where: { id } });
    if (!campaign) {
      return res.status(404).json({ error: "Campaign not found" });
    }

    // Fetch all logs to aggregate
    const logs = await prisma.messageLog.findMany({ where: { campaignId: id } });
    
    // Fetch replies if applicable
    const repliesCount = await prisma.smsReply.count({ where: { campaignId: id } });

    const totalLogs = logs.length;
    let analytics: any = {
      platform: campaign.platform,
      totalContacts: totalLogs,
      status: campaign.status,
    };

    if (campaign.platform === 'voice') {
      const answered = logs.filter(l => l.status === 'answered').length;
      const failed = logs.filter(l => ['failed', 'busy', 'no-answer'].includes(l.status)).length;
      const conversions = logs.filter(l => l.ivrResponse !== null).length;
      
      analytics = {
        ...analytics,
        metrics: [
          { label: "Calls Made", value: totalLogs },
          { label: "Calls Answered", value: answered },
          { label: "Calls Failed", value: failed },
          { label: "Replies", value: 0 },
          { label: "Responses", value: conversions },
          { label: "Conversions", value: conversions }
        ]
      };
    } else {
      const delivered = logs.filter(l => ['delivered', 'success', 'read'].includes(l.status)).length;
      const failed = logs.filter(l => l.status === 'failed').length;
      const sent = totalLogs > 0 ? totalLogs - failed : 0; 

      analytics = {
        ...analytics,
        metrics: [
          { label: "Messages Sent", value: sent },
          { label: "Messages Delivered", value: delivered },
          { label: "Messages Failed", value: failed },
          { label: "Replies", value: repliesCount },
          { label: "Responses", value: repliesCount },
          { label: "Conversions", value: repliesCount }
        ]
      };
    }

    res.json(analytics);
  } catch (error) {
    console.error("Analytics fetch error:", error);
    res.status(500).json({ error: "Failed to fetch analytics" });
  }
});

