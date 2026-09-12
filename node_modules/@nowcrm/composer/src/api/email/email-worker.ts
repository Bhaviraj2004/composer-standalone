import { Worker } from "bullmq";
import prisma from "@/prisma";
import { env } from "@/common/utils/env-config";
import { logger } from "@/server";
import nodemailer from "nodemailer";


export const emailCampaignWorker = new Worker(
  "emailCampaignQueue",
  async (job) => {
    const { campaignId } = job.data;
    
    logger.info(`Starting processing for email campaign: ${campaignId}`);

    const campaign = await prisma.campaign.findUnique({
      where: { id: campaignId },
      include: { logs: { where: { status: "pending" } } },
    });

    if (!campaign) {
      logger.error(`Campaign ${campaignId} not found`);
      return;
    }

    const { providerConfig, message: htmlTemplate, subject: subjectTemplate, logs } = campaign;
    
    // Parse SMTP config
    let smtpConfig: any = {};
    try {
      smtpConfig = JSON.parse(providerConfig || "{}");
    } catch (e) {
      logger.error(`Invalid provider config for campaign ${campaignId}`);
      return;
    }

    const transporter = nodemailer.createTransport({
      host: smtpConfig.host,
      port: Number(smtpConfig.port) || 587,
      secure: smtpConfig.port === '465',
      auth: {
        user: smtpConfig.user,
        pass: smtpConfig.pass,
      },
    });

    for (const log of logs) {
      try {
        // Fetch contact details to replace variables
        const contact = await prisma.contact.findFirst({
          where: { email: log.contact }
        });

        // Simple template engine for {{firstName}} etc.
        const replaceVars = (text: string) => {
          if (!text) return "";
          return text
            .replace(/{{firstName}}/gi, contact?.firstName || "")
            .replace(/{{lastName}}/gi, contact?.lastName || "")
            .replace(/{{email}}/gi, contact?.email || log.contact);
        };

        const personalizedHtml = replaceVars(htmlTemplate);
        const personalizedSubject = replaceVars(subjectTemplate || "No Subject");

        await transporter.sendMail({
          from: smtpConfig.from || smtpConfig.user,
          to: log.contact,
          subject: personalizedSubject,
          html: personalizedHtml,
        });

        // Update log on success
        await prisma.messageLog.update({
          where: { id: log.id },
          data: { status: "sent" }
        });

      } catch (error: any) {
        logger.error(`Failed to send email to ${log.contact}: ${error.message}`);
        await prisma.messageLog.update({
          where: { id: log.id },
          data: { status: "failed", error: error.message }
        });
      }
    }

    // Mark campaign as completed
    await prisma.campaign.update({
      where: { id: campaignId },
      data: { status: "completed" }
    });

    logger.info(`Campaign ${campaignId} completed successfully.`);
  },
  {
    connection: {
      host: env.COMPOSER_REDIS_HOST,
      port: env.COMPOSER_REDIS_PORT,
    },
  }
);
