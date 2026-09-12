import express, { type Request, type Response, type Router } from "express";
import prisma from "@/prisma";
import multer from "multer";
import path from "node:path";
import fs from "fs";
import { voiceCampaignQueue } from "./voice-queue";

export const voiceRouter: Router = express.Router();

// Ensure uploads dir exists
const uploadsDir = path.join(process.cwd(), "src", "public", "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsDir),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `voice-${Date.now()}${ext}`);
  }
});
const upload = multer({ storage });

// 1. Upload Audio
voiceRouter.post("/upload-audio", upload.single("audio"), (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).json({ error: "No audio file provided" });
  }
  
  // Create a public URL for the audio (assuming express.static is serving src/public)
  const audioUrl = `/uploads/${req.file.filename}`;
  res.status(201).json({ success: true, audioUrl });
});

// 2. Create Voice Campaign
voiceRouter.post("/campaign", async (req: Request, res: Response) => {
  const { name, provider, message, segmentId, scheduledAt, adminId, audioUrl } = req.body;
  
  if (!name || !provider || !segmentId || !audioUrl) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  
  try {
    const campaign = await prisma.campaign.create({
      data: {
        name,
        platform: "voice",
        provider,
        message: message || "Voice broadcast",
        adminId: adminId || "system",
        audioUrl,
        status: scheduledAt ? "scheduled" : "running",
        scheduledAt: scheduledAt ? new Date(scheduledAt) : null,
        segmentId
      }
    });

    let delay = 0;
    if (scheduledAt) {
      const scheduleDate = new Date(scheduledAt);
      delay = Math.max(0, scheduleDate.getTime() - Date.now());
    }

    const webhookBaseUrl = `${req.protocol}://${req.get("host")}`;

    await voiceCampaignQueue.add(
      "sendVoiceBulk", 
      { campaignId: campaign.id, scheduledAt, webhookBaseUrl },
      { delay }
    );
    
    res.status(201).json({ success: true, campaign });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create Voice campaign" });
  }
});

// 3. Voice Campaign Stats (Dashboard)
voiceRouter.get("/stats/:campaignId", async (req: Request, res: Response) => {
  const { campaignId } = req.params;
  
  try {
    const logs = await prisma.messageLog.findMany({
      where: { campaignId },
      select: { status: true, ivrResponse: true }
    });
    
    const stats = {
      total: logs.length,
      answered: 0,
      noAnswer: 0,
      busy: 0,
      failed: 0,
      press1: 0,
      press2: 0,
      otherPress: 0
    };
    
    logs.forEach((log: any) => {
      if (log.status === "answered") stats.answered++;
      else if (log.status === "no-answer") stats.noAnswer++;
      else if (log.status === "busy") stats.busy++;
      else if (log.status === "failed") stats.failed++;
      
      if (log.ivrResponse === "1") stats.press1++;
      else if (log.ivrResponse === "2") stats.press2++;
      else if (log.ivrResponse) stats.otherPress++;
    });
    
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch stats" });
  }
});
