import { VoiceProvider } from "./voice-provider.interface";
import { TwilioVoiceProvider } from "./twilio-voice.provider";
import { VonageVoiceProvider } from "./vonage-voice.provider";

export class VoiceProviderFactory {
  static getProvider(providerName: string): VoiceProvider {
    switch (providerName.toLowerCase()) {
      case "twilio":
        return new TwilioVoiceProvider();
      case "vonage":
        return new VonageVoiceProvider();
      default:
        // Default to Twilio for now if unsupported
        return new TwilioVoiceProvider(); 
    }
  }
}
