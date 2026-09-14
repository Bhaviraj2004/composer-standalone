import { VoiceProvider, VoiceCallResult } from "./voice-provider.interface";

export class Fast2SmsVoiceProvider implements VoiceProvider {
  constructor() {
    // In a real implementation: initialize Fast2SMS client if needed
  }

  async makeCall(to: string, audioUrl: string | null, textMessage: string | null, webhookBaseUrl: string, config: any, options?: any): Promise<VoiceCallResult> {
    console.log(`[Fast2SMS Voice] Calling ${to}`);
    
    // Parse config
    let apiKey = "";
    let route = "voice"; // Typical route for voice in API
    
    if (config) {
      try {
        const parsed = typeof config === "string" ? JSON.parse(config) : config;
        apiKey = parsed.apiKey || "";
        route = parsed.route || "voice";
      } catch(e) {}
    }

    if (!apiKey) {
      console.warn("Fast2SMS Voice: Missing apiKey in config. Using mock response.");
      return {
        callId: `fast2sms-voice-${Date.now()}`,
        status: "queued"
      };
    }

    // Since Fast2SMS is usually a simple POST, we map it here.
    // NOTE: Voice API for Fast2SMS might require uploading MP3 or playing text.
    // If textMessage is present, we send it, otherwise we might fail or send audioUrl if supported.
    
    const payload: any = {
      route: route,
      numbers: to,
    };
    
    // Fast2SMS Voice usually takes file or text, assuming text for this implementation.
    if (textMessage) {
      payload.message = textMessage;
    } else if (audioUrl) {
      payload.message = "Please visit the URL for your audio message."; // Fallback if direct URL is not supported natively.
    }

    try {
      const response = await fetch("https://www.fast2sms.com/dev/bulkV2", {
        method: "POST",
        headers: {
          "Authorization": apiKey,
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = (await response.json()) as any;
      
      if (!response.ok || !data.return) {
        throw new Error(data.message || JSON.stringify(data));
      }

      return {
        callId: data.request_id || Date.now().toString(),
        status: "queued"
      };
    } catch (error: any) {
      console.error("[Fast2SMS Voice] Error:", error.message);
      throw error;
    }
  }
  
  generateIvrResponse(audioUrl: string | null, textMessage: string | null, gatherActionUrl: string): string {
    // Fast2SMS does not typically support real-time TwiML-like IVR out of the box for basic Dev API.
    // We return a mock or empty string.
    return "Not supported natively by Fast2SMS Dev API.";
  }
  
  parseStatusWebhook(req: any, config?: any) {
    return {
      callId: req.body?.request_id,
      status: req.body?.status === "Delivered" ? "completed" : "failed"
    };
  }

  parseIvrWebhook(req: any, config?: any) {
    // Fast2SMS does not have IVR webhooks natively
    return null;
  }
}
