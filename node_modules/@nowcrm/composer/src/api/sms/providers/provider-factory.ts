import { SmsProvider } from "./sms-provider.interface";
import { TwilioProvider } from "./twilio.provider";
import { VonageProvider } from "./vonage.provider";
import { TelnyxProvider } from "./telnyx.provider";
import { SinchProvider } from "./sinch.provider";
import { RegionalProvider } from "./regional.provider";
import { Fast2SmsProvider } from "./fast2sms.provider";

export class SmsProviderFactory {
  static getProvider(providerName: string, configStr?: string | null): SmsProvider {
    switch (providerName.toLowerCase()) {
      case "twilio":
        return new TwilioProvider(configStr);
      case "vonage":
        return new VonageProvider();
      case "telnyx":
        return new TelnyxProvider();
      case "sinch":
        return new SinchProvider();
      case "regional":
        return new RegionalProvider();
      case "fast2sms":
        return new Fast2SmsProvider(configStr);
      default:
        throw new Error(`Unsupported SMS provider: ${providerName}`);
    }
  }
}
