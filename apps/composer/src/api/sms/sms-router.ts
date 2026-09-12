import express, { type Request, type Response, type Router } from "express";
import prisma from "@/prisma";
import multer from "multer";
import { parse } from "csv-parse";
import fs from "fs";
import { smsCampaignQueue } from "./sms-queue";

export const smsRouter: Router = express.Router();
const upload = multer({ dest: "uploads/" });

// 1. Upload CSV to create Segment and Contacts
smsRouter.post("/segment/upload", upload.single("file"), async (req: Request, res: Response) => {
  try {
    const { segmentName } = req.body;
    const file = req.file;

    if (!file || !segmentName) {
      return res.status(400).json({ error: "Missing file or segmentName" });
    }

    const segment = await prisma.segment.create({
      data: { name: segmentName }
    });

    const contacts: any[] = [];
    
    fs.createReadStream(file.path)
      .pipe(parse({ columns: true, skip_empty_lines: true }))
      .on("data", (row) => {
        // Assuming CSV has a 'phone' column
        if (row.phone) {
          contacts.push({
            phone: row.phone,
            firstName: row.firstName || null,
            lastName: row.lastName || null,
          });
        }
      })
      .on("end", async () => {
        // Create contacts and connect to segment
        for (const contact of contacts) {
          await prisma.contact.upsert({
            where: { phone: contact.phone },
            update: {
              segments: { connect: { id: segment.id } }
            },
            create: {
              phone: contact.phone,
              firstName: contact.firstName,
              lastName: contact.lastName,
              segments: { connect: { id: segment.id } }
            }
          });
        }
        
        fs.unlinkSync(file.path); // Clean up file
        res.status(201).json({ success: true, segmentId: segment.id, totalContacts: contacts.length });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to upload contacts" });
  }
});

// 2. Create and Schedule SMS Campaign
smsRouter.post("/campaign", async (req: Request, res: Response) => {
  const { name, provider, providerConfig, message, segmentId, scheduledAt, adminId } = req.body;
  
  if (!name || !provider || !message || !segmentId) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  
  try {
    const campaign = await prisma.campaign.create({
      data: {
        name,
        platform: "sms",
        provider,
        providerConfig,
        message,
        adminId: adminId || "system",
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

    // Enqueue job with potential delay
    await smsCampaignQueue.add(
      "sendSmsBulk", 
      { campaignId: campaign.id, scheduledAt },
      { delay }
    );
    
    res.status(201).json({ success: true, campaign });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create SMS campaign" });
  }
});
