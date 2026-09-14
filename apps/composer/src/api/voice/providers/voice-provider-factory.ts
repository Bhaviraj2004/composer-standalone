import { VoiceProvider } from "./voice-provider.interface";
import { TwilioVoiceProvider } from "./twilio-voice.provider";
import { VonageVoiceProvider } from "./vonage-voice.provider";
import { Fast2SmsVoiceProvider } from "./fast2sms-voice.provider";

export class VoiceProviderFactory {
  static getProvider(providerName: string): VoiceProvider {
    switch (providerName.toLowerCase()) {
      case "twilio":
        return new TwilioVoiceProvider();
      case "vonage":
        return new VonageVoiceProvider();
      case "fast2sms":
        return new Fast2SmsVoiceProvider();
      default:
        throw new Error(`Unsupported Voice provider: ${providerName}`);
    }
  }
}
