export interface SmsSendOptions {
  campaignId?: string;
  senderId?: string; // Some providers allow custom sender IDs
  mediaUrl?: string; // MMS support if needed
}

export interface SmsSendResult {
  messageId: string;
  status: string; // "pending", "sent", "delivered", "failed"
  providerResponse?: any;
}

export interface SmsProvider {
  /**
   * Send a single SMS message
   */
  sendSms(to: string, message: string, options?: SmsSendOptions): Promise<SmsSendResult>;
  
  /**
   * Get the delivery status of a previously sent message
   */
  getDeliveryStatus(messageId: string): Promise<string>;
  
  /**
   * Parse an incoming webhook for a delivery receipt
   * Should return a standardized object
   */
  parseDeliveryReceipt?(req: any): { messageId: string, status: string, error?: string } | null;

  /**
   * Parse an incoming webhook for an SMS reply
   */
  parseReply?(req: any): { from: string, message: string, timestamp: Date } | null;
}
