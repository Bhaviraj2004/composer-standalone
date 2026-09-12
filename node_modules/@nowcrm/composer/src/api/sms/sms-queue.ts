import { Queue } from "bullmq";

export const smsCampaignQueue = new Queue("sms-campaigns", {
  connection: {
    host: process.env.COMPOSER_REDIS_HOST || "localhost",
    port: parseInt(process.env.COMPOSER_REDIS_PORT || "6379", 10),
  },
});
