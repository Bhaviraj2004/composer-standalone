import { Queue } from "bullmq";
import { env } from "@/common/utils/env-config";

const connection = {
  host: env.COMPOSER_REDIS_HOST,
  port: env.COMPOSER_REDIS_PORT,
};

export const emailCampaignQueue = new Queue("emailCampaignQueue", {
  connection,
});
