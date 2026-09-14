import { SmsProvider, SmsSendOptions, SmsSendResult } from "./sms-provider.interface";

export class Fast2SmsProvider implements SmsProvider {
  private apiKey?: string;
  private route: string = "q";
  private senderId?: string;

  constructor(configStr?: string | null) {
    if (configStr) {
      try {
        const config = JSON.parse(configStr);
        this.apiKey = config.apiKey;
        this.route = config.route || "q"; // 'q' for quick sms, 'dlt' for production, 'v3' for newer
        this.senderId = config.senderId;
      } catch (e) {
        console.error("Failed to parse Fast2SMS config", e);
      }
    }
  }

  async sendSms(to: string, message: string, options?: SmsSendOptions): Promise<SmsSendResult> {
    if (!this.apiKey) {
      throw new Error("Missing Fast2SMS API Key in workspace settings");
    }

    console.log(`[Fast2SMS] Sending SMS to ${to}: ${message}`);
    
    // Fast2SMS supports multiple numbers as comma separated, ensure it's clean
    const numbers = to.split(',').map(n => n.trim().replace(/^\+/, '')).join(',');

    const payload: any = {
      route: this.route,
      message: message,
      language: "english",
      flash: 0,
      numbers: numbers
    };

    // If using DLT route, sender_id is required. Optional otherwise.
    if (this.senderId || options?.senderId) {
      payload.sender_id = options?.senderId || this.senderId;
    }

    const response = await fetch("https://www.fast2sms.com/dev/bulkV2", {
      method: "POST",
      headers: {
        "Authorization": this.apiKey,
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (!response.ok || !data.return) {
      throw new Error(`Fast2SMS API Error: ${data.message || response.statusText}`);
    }

    return {
      messageId: data.request_id || Date.now().toString(),
      status: "sent",
      providerResponse: data
    };
  }
  
  async getDeliveryStatus(messageId: string): Promise<string> {
    return "delivered";
  }
  
  parseDeliveryReceipt(req: any) {
    // Fast2SMS specific DLR parsing if webhooks are set up
    return {
      messageId: req.body?.request_id,
      status: req.body?.status === "Delivered" ? "delivered" : "failed"
    };
  }
}
