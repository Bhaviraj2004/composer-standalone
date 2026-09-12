import { VoiceProvider, VoiceCallResult } from "./voice-provider.interface";

export class VonageVoiceProvider implements VoiceProvider {
  async makeCall(to: string, audioUrl: string | null, textMessage: string | null, webhookBaseUrl: string, config: any, options?: any): Promise<VoiceCallResult> {
    console.log(`[Vonage Voice] Calling ${to}`);
    
    // Parse config
    let appId = "";
    let privateKey = "";
    let fromNumber = "";
    
    if (config) {
      try {
        const parsed = typeof config === "string" ? JSON.parse(config) : config;
        appId = parsed.appId || "";
        privateKey = parsed.privateKey || "";
        fromNumber = parsed.fromNumber || "";
      } catch(e) {}
    }

    if (!appId || !privateKey) {
      console.warn("Vonage Voice: Missing App ID or Private Key in config. Using mock response.");
      return {
        callId: `vonage-voice-${Date.now()}`,
        status: "queued"
      };
    }

    // In a real implementation, you would generate a JWT using the privateKey
    const jwt = "MOCK_JWT_FOR_NOW";

    const ncco = audioUrl
      ? [{ action: "stream", streamUrl: [audioUrl] }]
      : [{ action: "talk", text: textMessage || "Hello, this is a voice campaign." }];

    // We can also add an input action for IVR

    try {
      const response = await fetch("https://api.nexmo.com/v1/calls", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${jwt}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          to: [{ type: "phone", number: to }],
          from: { type: "phone", number: fromNumber },
          ncco,
          event_url: [`${webhookBaseUrl}/voice/status/vonage`],
          event_method: "POST"
        })
      });

      const data = (await response.json()) as any;

      if (!response.ok) {
        throw new Error(data.title || JSON.stringify(data));
      }

      return {
        callId: data.uuid,
        status: "queued"
      };
    } catch (error: any) {
      console.error("[Vonage Voice] Error:", error.message);
      throw error;
    }
  }
  
  generateIvrResponse(audioUrl: string | null, textMessage: string | null, gatherActionUrl: string): string {
    // Vonage uses NCCO JSON, not TwiML XML.
    // The Webhook handler will need to return this as JSON.
    const ncco = [];
    if (audioUrl) {
      ncco.push({ action: "stream", streamUrl: [audioUrl] });
    } else {
      ncco.push({ action: "talk", text: textMessage || "Hello, this is a voice campaign." });
    }
    
    return JSON.stringify(ncco);
  }
  
  parseStatusWebhook(req: any, config?: any) {
    const statusMap: Record<string, string> = {
      "started": "pending",
      "ringing": "ringing",
      "answered": "answered",
      "completed": "completed",
      "busy": "busy",
      "cancelled": "failed",
      "failed": "failed",
      "rejected": "failed",
      "timeout": "no-answer"
    };
    
    return {
      callId: req.body?.uuid,
      status: statusMap[req.body?.status] || "pending",
      duration: req.body?.duration ? parseInt(req.body.duration, 10) : undefined
    };
  }

  parseIvrWebhook(req: any, config?: any) {
    return {
      callId: req.body?.uuid,
      digits: req.body?.dtmf?.digits
    };
  }
}
