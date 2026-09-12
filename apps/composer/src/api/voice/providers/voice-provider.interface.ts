export interface VoiceCallResult {
  callId: string;
  status: string; // "queued", "ringing", "in-progress"
  providerResponse?: any;
}

export interface VoiceProvider {
  /**
   * Initiate an outbound call
   */
  makeCall(to: string, audioUrl: string | null, textMessage: string | null, webhookBaseUrl: string, config: any, options?: any): Promise<VoiceCallResult>;
  
  /**
   * Generate the IVR markup (e.g. TwiML) when the call is answered
   * This tells the provider to play the audio and wait for keypad input.
   */
  generateIvrResponse(audioUrl: string | null, textMessage: string | null, gatherActionUrl: string): string;
  
  /**
   * Parse the webhook when a call status changes (ringing, answered, completed, failed)
   */
  parseStatusWebhook(req: any, config?: any): { callId: string, status: string, duration?: number } | null;

  /**
   * Parse the webhook when the user presses a key (IVR gather)
   */
  parseIvrWebhook(req: any, config?: any): { callId: string, digits: string } | null;
}
