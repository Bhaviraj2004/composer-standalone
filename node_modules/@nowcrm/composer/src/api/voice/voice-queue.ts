import { Queue } from "bullmq";

export const voiceCampaignQueue = new Queue("voice-campaigns", {
  connection: {
    host: process.env.COMPOSER_REDIS_HOST || "localhost",
    port: parseInt(process.env.COMPOSER_REDIS_PORT || "6379", 10),
  },
});
