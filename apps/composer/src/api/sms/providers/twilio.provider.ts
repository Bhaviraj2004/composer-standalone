import { SmsProvider, SmsSendOptions, SmsSendResult } from "./sms-provider.interface";

export class TwilioProvider implements SmsProvider {
  private sid?: string;
  private token?: string;
  private fromNumber?: string;

  constructor(configStr?: string | null) {
    if (configStr) {
      try {
        const config = JSON.parse(configStr);
        this.sid = config.sid;
        this.token = config.token;
        this.fromNumber = config.fromNumber;
      } catch (e) {
        console.error("Failed to parse Twilio config", e);
      }
    }
  }

  async sendSms(to: string, message: string, options?: SmsSendOptions): Promise<SmsSendResult> {
    if (!this.sid || !this.token || !this.fromNumber) {
      throw new Error("Missing Twilio credentials in workspace settings");
    }

    console.log(`[Twilio] Sending SMS to ${to}: ${message}`);
    
    const auth = Buffer.from(`${this.sid}:${this.token}`).toString('base64');
    const params = new URLSearchParams();
    params.append('To', to);
    params.append('From', this.fromNumber);
    params.append('Body', message);

    const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${this.sid}/Messages.json`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: params
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Twilio API Error: ${data.message || response.statusText}`);
    }

    return {
      messageId: data.sid,
      status: "sent"
    };
  }
  
  async getDeliveryStatus(messageId: string): Promise<string> {
    return "delivered";
  }
  
  parseDeliveryReceipt(req: any) {
    // Parse Twilio specific webhook body
    return {
      messageId: req.body?.MessageSid,
      status: req.body?.MessageStatus
    };
  }

  parseReply(req: any) {
    // Parse Twilio incoming SMS webhook
    return {
      from: req.body?.From,
      message: req.body?.Body,
      timestamp: new Date()
    };
  }
}
