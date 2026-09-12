import { createBullBoard } from "@bull-board/api";
import { BullMQAdapter } from "@bull-board/api/bullMQAdapter";
import { ExpressAdapter } from "@bull-board/express";

import { emailCampaignQueue } from "@/api/email/email-queue";
import { lineCampaignQueue } from "@/api/line/line-queue";
import { voiceCampaignQueue } from "@/api/voice/voice-queue";
import { standaloneCampaignQueue } from "@/api/campaigns/campaign-queue";

export const serverAdapter: ExpressAdapter = new ExpressAdapter();
serverAdapter.setBasePath("/admin/queues");

export const bullBoard = createBullBoard({
	queues: [
		new BullMQAdapter(emailCampaignQueue),
		new BullMQAdapter(lineCampaignQueue),
		new BullMQAdapter(voiceCampaignQueue),
		new BullMQAdapter(standaloneCampaignQueue)
	],
	serverAdapter,
});
