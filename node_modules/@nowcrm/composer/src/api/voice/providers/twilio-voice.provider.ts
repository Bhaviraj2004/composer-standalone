import { VoiceProvider, VoiceCallResult } from "./voice-provider.interface";

export class TwilioVoiceProvider implements VoiceProvider {
  constructor() {
    // In a real implementation: initialize Twilio client
  }

  async makeCall(to: string, audioUrl: string | null, textMessage: string | null, webhookBaseUrl: string, config: any, options?: any): Promise<VoiceCallResult> {
    console.log(`[Twilio Voice] Calling ${to}`);
    
    // Parse config
    let sid = "";
    let token = "";
    let fromNumber = "";
    
    if (config) {
      try {
        const parsed = typeof config === "string" ? JSON.parse(config) : config;
        sid = parsed.sid || "";
        token = parsed.token || "";
        fromNumber = parsed.fromNumber || "";
      } catch(e) {}
    }

    if (!sid || !token) {
      console.warn("Twilio Voice: Missing SID or Token in config. Using mock response.");
      return {
        callId: `twilio-voice-${Date.now()}`,
        status: "queued"
      };
    }

    const auth = Buffer.from(`${sid}:${token}`).toString("base64");
    
    // Construct TwiML URL
    // Actually for Twilio, we can pass Twiml directly instead of Url if it's a simple call, but passing a webhook is safer for IVR.
    // We will provide the webhook URL which returns TwiML.
    const url = `${webhookBaseUrl}/voice/ivr/twilio/${options?.campaignId}`;

    const params = new URLSearchParams();
    params.append("To", to);
    if (fromNumber) params.append("From", fromNumber);
    params.append("Url", url);
    params.append("StatusCallback", `${webhookBaseUrl}/voice/status/twilio`);
    params.append("StatusCallbackEvent", "initiated,ringing,answered,completed");

    try {
      const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${sid}/Calls.json`, {
        method: "POST",
        headers: {
          "Authorization": `Basic ${auth}`,
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: params
      });

      const data = (await response.json()) as any;
      
      if (!response.ok) {
        throw new Error(data.message || JSON.stringify(data));
      }

      return {
        callId: data.sid,
        status: "queued"
      };
    } catch (error: any) {
      console.error("[Twilio Voice] Error:", error.message);
      throw error;
    }
  }
  
  generateIvrResponse(audioUrl: string | null, textMessage: string | null, gatherActionUrl: string): string {
    const playOrSay = audioUrl 
      ? `<Play>${audioUrl}</Play>` 
      : `<Say>${textMessage || "Hello, this is a voice campaign."}</Say>`;
      
    return `<?xml version="1.0" encoding="UTF-8"?>
<Response>
    ${playOrSay}
    <Hangup/>
</Response>`;
  }
  
  parseStatusWebhook(req: any, config?: any) {
    const statusMap: Record<string, string> = {
      "queued": "pending",
      "initiated": "pending",
      "ringing": "ringing",
      "in-progress": "answered",
      "completed": "completed",
      "busy": "busy",
      "no-answer": "no-answer",
      "canceled": "failed",
      "failed": "failed"
    };
    
    return {
      callId: req.body?.CallSid,
      status: statusMap[req.body?.CallStatus] || "pending",
      duration: req.body?.CallDuration ? parseInt(req.body.CallDuration, 10) : undefined
    };
  }

  parseIvrWebhook(req: any, config?: any) {
    return {
      callId: req.body?.CallSid,
      digits: req.body?.Digits
    };
  }
}
