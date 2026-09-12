import { SmsProvider, SmsSendOptions, SmsSendResult } from "./sms-provider.interface";

export class TelnyxProvider implements SmsProvider {
  private apiKey?: string;
  private fromNumber?: string;

  constructor(configStr?: string | null) {
    if (configStr) {
      try {
        const config = JSON.parse(configStr);
        this.apiKey = config.apiKey;
        this.fromNumber = config.fromNumber;
      } catch (e) {
        console.error("Failed to parse Telnyx config", e);
      }
    }
  }

  async sendSms(to: string, message: string, options?: SmsSendOptions): Promise<SmsSendResult> {
    if (!this.apiKey || !this.fromNumber) {
      throw new Error("Missing Telnyx API Key or From Number");
    }

    console.log(`[Telnyx] Sending SMS to ${to}: ${message}`);
    
    const response = await fetch('https://api.telnyx.com/v2/messages', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: JSON.stringify({
        from: this.fromNumber,
        to: to,
        text: message
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Telnyx API Error: ${data.errors?.[0]?.detail || response.statusText}`);
    }

    return {
      messageId: data.data?.id,
      status: "sent"
    };
  }
  
  async getDeliveryStatus(messageId: string): Promise<string> {
    return "delivered";
  }
  
  parseDeliveryReceipt(req: any) {
    return {
      messageId: req.body?.data?.payload?.id,
      status: req.body?.data?.payload?.to[0]?.status
    };
  }

  parseReply(req: any) {
    return {
      from: req.body?.data?.payload?.from?.phone_number,
      message: req.body?.data?.payload?.text,
      timestamp: new Date()
    };
  }
}
