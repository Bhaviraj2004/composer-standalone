import { SmsProvider, SmsSendOptions, SmsSendResult } from "./sms-provider.interface";

export class VonageProvider implements SmsProvider {
  private apiKey?: string;
  private apiSecret?: string;
  private fromNumber?: string;

  constructor(configStr?: string | null) {
    if (configStr) {
      try {
        const config = JSON.parse(configStr);
        this.apiKey = config.apiKey;
        this.apiSecret = config.apiSecret;
        this.fromNumber = config.fromNumber;
      } catch (e) {
        console.error("Failed to parse Vonage config", e);
      }
    }
  }

  async sendSms(to: string, message: string, options?: SmsSendOptions): Promise<SmsSendResult> {
    if (!this.apiKey || !this.apiSecret || !this.fromNumber) {
      throw new Error("Missing Vonage API Key or Secret");
    }

    console.log(`[Vonage] Sending SMS to ${to}: ${message}`);
    
    const response = await fetch('https://rest.nexmo.com/sms/json', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: this.apiKey,
        api_secret: this.apiSecret,
        to: to,
        from: this.fromNumber,
        text: message
      })
    });

    const data = await response.json();

    if (data.messages && data.messages[0] && data.messages[0].status !== "0") {
      throw new Error(`Vonage API Error: ${data.messages[0]['error-text']}`);
    }

    return {
      messageId: data.messages[0]['message-id'],
      status: "sent"
    };
  }
  
  async getDeliveryStatus(messageId: string): Promise<string> {
    return "delivered";
  }
  
  parseDeliveryReceipt(req: any) {
    return {
      messageId: req.body?.messageId,
      status: req.body?.status
    };
  }

  parseReply(req: any) {
    return {
      from: req.body?.msisdn,
      message: req.body?.text,
      timestamp: new Date()
    };
  }
}
