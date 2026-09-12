import { Queue } from "bullmq";
import { env } from "@/common/utils/env-config";

export const standaloneCampaignQueue = new Queue("standaloneCampaignQueue", {
  connection: {
    host: env.COMPOSER_REDIS_HOST || "localhost",
    port: env.COMPOSER_REDIS_PORT ? parseInt(env.COMPOSER_REDIS_PORT.toString()) : 6379,
  },
});
