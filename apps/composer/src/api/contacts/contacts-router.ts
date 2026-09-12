import express, { type Request, type Response, type Router } from "express";
import prisma from "@/prisma";
import fetch from "node-fetch";
import { ContactService } from "./contact-service";

export const contactsRouter: Router = express.Router();

// Get all segments with contact counts
contactsRouter.get("/segments", async (req: Request, res: Response) => {
  try {
    const segments = await prisma.segment.findMany({
      include: {
        _count: {
          select: { contacts: true }
        }
      },
      orderBy: { id: 'desc' }
    });
    res.json(segments);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch segments" });
  }
});

// Fetch external URL (bypass CORS for Google Sheets/CSV)
contactsRouter.post("/fetch-url", async (req: Request, res: Response) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: "Missing url" });

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch: ${response.statusText}`);
    const text = await response.text();
    res.send(text);
  } catch (error: any) {
    console.error("Fetch URL error:", error);
    res.status(500).json({ error: "Failed to download from URL: " + error.message });
  }
});

// Create a new segment and bulk insert contacts
contactsRouter.post("/segments", async (req: Request, res: Response) => {
  const { name, contacts } = req.body; // contacts is an array of phone numbers
  
  if (!name || !contacts || !Array.isArray(contacts)) {
    return res.status(400).json({ error: "Missing name or contacts array" });
  }
  
  try {
    // 1. Create the segment
    const segment = await prisma.segment.create({
      data: { name }
    });

    // 2. Ensure all contacts exist in DB using upsert logic
    const contactRecords = await ContactService.processBulkContacts(contacts);

    // 3. Connect contacts to segment
    await prisma.segment.update({
      where: { id: segment.id },
      data: {
        contacts: {
          connect: contactRecords.map(c => ({ id: c.id }))
        }
      }
    });

    res.status(201).json({ success: true, segment, added: contactRecords.length });
  } catch (error: any) {
    console.error("Segment creation error:", error);
    res.status(500).json({ error: "Failed to create segment: " + error.message });
  }
});

// Get contacts for a specific segment
contactsRouter.get("/segments/:id/contacts", async (req: Request, res: Response) => {
  try {
    const segment = await prisma.segment.findUnique({
      where: { id: req.params.id },
      include: { contacts: true }
    });
    if (!segment) return res.status(404).json({ error: "Segment not found" });
    res.json(segment.contacts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
});

// Delete segment
contactsRouter.delete("/segments/:id", async (req: Request, res: Response) => {
  try {
    await prisma.segment.delete({ where: { id: req.params.id } });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete segment" });
  }
});
