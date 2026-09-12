import express, { type Express } from "express";
import helmet from "helmet";
import { pino } from "pino";
import path from "node:path";

// Middleware
import errorHandler from "@/common/middleware/error-handler";
import rateLimiter from "@/common/middleware/rate-limiter";
import requestLogger from "@/common/middleware/request-logger";

// Routers
import { healthCheckRouter } from "@/api/healthCheck/healt-check-router";
import { serverAdapter } from "./views/bull-board";
import { campaignRouter } from "./api/campaigns/campaign-router";
import { contactsRouter } from "./api/contacts/contacts-router";
import { smsRouter } from "./api/sms/sms-router";
import { smsWebhooksRouter } from "./api/sms/sms-webhooks";
import { voiceRouter } from "./api/voice/voice-router";
import { voiceWebhooksRouter } from "./api/voice/voice-webhooks";
import { lineWebhooksRouter } from "./api/line/line-webhooks";

// Workers (Initialize BullMQ Workers)
import "./api/campaigns/campaign-worker";
import "./api/sms/sms-worker";
import "./api/voice/voice-worker";
import "./api/email/email-worker";
import "./api/line/line-worker";

const logger = pino({ name: "server start" });
const __dirname = path.resolve();

const app: Express = express();
app.use(express.static(path.join(`${__dirname}/src`, "public")));

// Set the application to trust the reverse proxy
app.set("trust proxy", true);

// Body parser limits for large payloads (like base64 audio or large CSVs)
const BODY_LIMIT = "25mb";

// Global Middlewares
app.use(express.json({ type: ["application/json", "text/plain"], limit: BODY_LIMIT }));
app.use(express.urlencoded({ extended: true, limit: BODY_LIMIT }));
app.use(helmet());
app.use(rateLimiter);
app.use(requestLogger);

// Setup Routes
app.use("/health-check", healthCheckRouter);
app.use("/admin/queues", serverAdapter.getRouter()); // BullMQ Dashboard

app.use("/api/campaigns", campaignRouter);
app.use("/api/contacts", contactsRouter);

app.use("/api/sms", smsRouter);
app.use("/webhook/sms", smsWebhooksRouter);

app.use("/api/voice", voiceRouter);
app.use("/webhook/voice", voiceWebhooksRouter);

app.use("/api/line", lineWebhooksRouter);

// Global Error Handler
app.use(errorHandler());

export { app, logger };
