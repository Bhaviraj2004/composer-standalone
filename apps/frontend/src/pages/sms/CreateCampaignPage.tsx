import React, { useState } from 'react';
import { Send, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';
import CampaignPreview from '../../components/campaign/CampaignPreview';
import ContactSelector from '../../components/common/ContactSelector';

export default function SMSCreateCampaignPage() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [scheduleType, setScheduleType] = useState('now');
  const [scheduleTime, setScheduleTime] = useState('');
  
  const [provider, setProvider] = useState('twilio');
  const [twilioSid, setTwilioSid] = useState('');
  const [twilioToken, setTwilioToken] = useState('');
  const [twilioFrom, setTwilioFrom] = useState('');
  const [vonageKey, setVonageKey] = useState('');
  const [vonageSecret, setVonageSecret] = useState('');
  const [vonageFrom, setVonageFrom] = useState('');
  const [telnyxKey, setTelnyxKey] = useState('');
  const [telnyxFrom, setTelnyxFrom] = useState('');
  const [fast2smsKey, setFast2smsKey] = useState('');
  const [fast2smsRoute, setFast2smsRoute] = useState('q');
  const [fast2smsSenderId, setFast2smsSenderId] = useState('');

  const [message, setMessage] = useState('');
  const [contacts, setContacts] = useState('');
  const [segmentId, setSegmentId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      let providerConfigObj: any = {};
      
      if (provider === 'twilio') {
        providerConfigObj = { sid: twilioSid, token: twilioToken, fromNumber: twilioFrom };
      } else if (provider === 'vonage') {
        providerConfigObj = { apiKey: vonageKey, apiSecret: vonageSecret, fromNumber: vonageFrom };
      } else if (provider === 'telnyx') {
        providerConfigObj = { apiKey: telnyxKey, fromNumber: telnyxFrom };
      } else if (provider === 'fast2sms') {
        providerConfigObj = { apiKey: fast2smsKey, route: fast2smsRoute, senderId: fast2smsSenderId };
      }

      const response = await fetch('http://localhost:3020/api/sms/campaign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          provider,
          providerConfig: JSON.stringify(providerConfigObj),
          platform: 'sms',
          message,
          contacts,
          segmentId,
          scheduledAt: scheduleType === 'later' ? scheduleTime : null
        })
      });

      if (response.ok) {
        alert('SMS Campaign Launched Successfully!');
        // Reset form
        setStep(1);
        setName('');
        setMessage('');
        setContacts('');
      } else {
        const errorData = await response.json();
        alert('Failed to launch campaign: ' + (errorData.error || 'Unknown error'));
      }
    } catch (error: any) {
      alert('Error launching campaign: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate-fade-in" style={{ maxWidth: '1200px' }}>
      <h1 style={{ marginBottom: '8px' }}>New SMS Campaign</h1>
      <p className="subtitle" style={{ marginBottom: '32px' }}>Follow the steps to configure and launch your bulk SMS messages.</p>

      {/* Stepper UI */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '32px', background: 'var(--glass-bg)', padding: '16px', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
        {[
          { num: 1, title: 'Campaign Details' },
          { num: 2, title: 'SMS Provider' },
          { num: 3, title: 'Message Content' },
          { num: 4, title: 'Contacts & Launch' }
        ].map((s, index) => (
          <React.Fragment key={s.num}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: step >= s.num ? 1 : 0.5 }}>
              <div style={{ 
                width: '32px', height: '32px', borderRadius: '50%', 
                background: step >= s.num ? 'var(--primary)' : 'var(--bg-tertiary)',
                color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold'
              }}>
                {step > s.num ? <CheckCircle2 size={16} /> : s.num}
              </div>
              <span style={{ fontWeight: step >= s.num ? 'bold' : 'normal' }}>{s.title}</span>
            </div>
            {index < 3 && <div style={{ flex: 1, height: '2px', background: 'var(--glass-border)', margin: '0 16px' }} />}
          </React.Fragment>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
        
        {/* Left Column: Form */}
        <div style={{ flex: '2', minWidth: '400px' }}>
          <div className="glass-panel" style={{ minHeight: '400px', display: 'flex', flexDirection: 'column' }}>
            
            {step === 1 && (
              <div className="animate-fade-in" style={{ flex: 1 }}>
                <h2 style={{ marginBottom: '24px' }}>Campaign Details</h2>
                <div className="form-group">
                  <label>Campaign Name</label>
                  <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control" placeholder="e.g. Flash Sale Alert" autoFocus />
                </div>
                <div className="form-group">
                  <label>Schedule</label>
                  <select value={scheduleType} onChange={e => setScheduleType(e.target.value)} className="form-control">
                    <option value="now">Send Immediately</option>
                    <option value="later">Schedule for Later</option>
                  </select>
                </div>
                {scheduleType === 'later' && (
                  <div className="form-group animate-fade-in">
                    <label>Schedule Time</label>
                    <input type="datetime-local" value={scheduleTime} onChange={e => setScheduleTime(e.target.value)} className="form-control" />
                  </div>
                )}
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in" style={{ flex: 1 }}>
                <h2 style={{ marginBottom: '24px' }}>Provider Configuration</h2>
                <div className="form-group">
                  <label>Select Provider</label>
                  <select value={provider} onChange={e => setProvider(e.target.value)} className="form-control">
                    <option value="twilio">Twilio</option>
                    <option value="vonage">Vonage (Nexmo)</option>
                    <option value="telnyx">Telnyx</option>
                    <option value="fast2sms">Fast2SMS</option>
                  </select>
                </div>

                {provider === 'twilio' && (
                  <div className="animate-fade-in" style={{ background: 'var(--bg-tertiary)', padding: '16px', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
                    <h3 style={{ marginBottom: '16px', fontSize: '1rem' }}>Twilio Credentials</h3>
                    <div className="form-group">
                      <label>Account SID</label>
                      <input type="text" value={twilioSid} onChange={e => setTwilioSid(e.target.value)} className="form-control" placeholder="AC..." />
                    </div>
                    <div className="form-group">
                      <label>Auth Token</label>
                      <input type="password" value={twilioToken} onChange={e => setTwilioToken(e.target.value)} className="form-control" placeholder="••••••••" />
                    </div>
                    <div className="form-group">
                      <label>Sender Phone Number</label>
                      <input type="text" value={twilioFrom} onChange={e => setTwilioFrom(e.target.value)} className="form-control" placeholder="+1234567890" />
                    </div>
                  </div>
                )}

                {provider === 'vonage' && (
                  <div className="animate-fade-in" style={{ background: 'var(--bg-tertiary)', padding: '16px', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
                    <h3 style={{ marginBottom: '16px', fontSize: '1rem' }}>Vonage Credentials</h3>
                    <div className="form-group">
                      <label>API Key</label>
                      <input type="text" value={vonageKey} onChange={e => setVonageKey(e.target.value)} className="form-control" placeholder="e.g. 1a2b3c" />
                    </div>
                    <div className="form-group">
                      <label>API Secret</label>
                      <input type="password" value={vonageSecret} onChange={e => setVonageSecret(e.target.value)} className="form-control" placeholder="••••••••" />
                    </div>
                    <div className="form-group">
                      <label>Sender Phone Number (or Brand Name)</label>
                      <input type="text" value={vonageFrom} onChange={e => setVonageFrom(e.target.value)} className="form-control" placeholder="e.g. Composer" />
                    </div>
                  </div>
                )}

                {provider === 'telnyx' && (
                  <div className="animate-fade-in" style={{ background: 'var(--bg-tertiary)', padding: '16px', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
                    <h3 style={{ marginBottom: '16px', fontSize: '1rem' }}>Telnyx Credentials</h3>
                    <div className="form-group">
                      <label>API Key</label>
                      <input type="password" value={telnyxKey} onChange={e => setTelnyxKey(e.target.value)} className="form-control" placeholder="KEY..." />
                    </div>
                    <div className="form-group">
                      <label>Sender Phone Number</label>
                      <input type="text" value={telnyxFrom} onChange={e => setTelnyxFrom(e.target.value)} className="form-control" placeholder="+1234567890" />
                    </div>
                  </div>
                )}

                {provider === 'fast2sms' && (
                  <div className="animate-fade-in" style={{ background: 'var(--bg-tertiary)', padding: '16px', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
                    <h3 style={{ marginBottom: '16px', fontSize: '1rem' }}>Fast2SMS Credentials</h3>
                    <div className="form-group">
                      <label>API Key</label>
                      <input type="password" value={fast2smsKey} onChange={e => setFast2smsKey(e.target.value)} className="form-control" placeholder="Enter Authorization Key" />
                    </div>
                    <div className="form-group">
                      <label>Route</label>
                      <select value={fast2smsRoute} onChange={e => setFast2smsRoute(e.target.value)} className="form-control">
                        <option value="q">Quick SMS (Default)</option>
                        <option value="v3">V3 API</option>
                        <option value="dlt">DLT (Production)</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Sender ID (Optional)</label>
                      <input type="text" value={fast2smsSenderId} onChange={e => setFast2smsSenderId(e.target.value)} className="form-control" placeholder="e.g. FSTSMS (Required for DLT)" />
                    </div>
                  </div>
                )}
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-in" style={{ flex: 1 }}>
                <h2 style={{ marginBottom: '24px' }}>Message Content</h2>
                <div className="form-group">
                  <label>Message Text</label>
                  <textarea 
                    value={message} 
                    onChange={e => setMessage(e.target.value)} 
                    className="form-control" 
                    rows={6}
                    placeholder="Type your SMS message here..." 
                    autoFocus
                  />
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '8px' }}>
                    {message.length} characters • {Math.ceil(message.length / 160) || 1} SMS part(s)
                  </p>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="animate-fade-in" style={{ flex: 1 }}>
                <h2 style={{ marginBottom: '24px' }}>Contacts & Launch</h2>
                <ContactSelector 
                  onContactsChange={(c, sId) => {
                    setContacts(c);
                    setSegmentId(sId);
                  }} 
                />
              </div>
            )}

            {/* Navigation Buttons */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--glass-border)' }}>
              <button 
                type="button" 
                onClick={() => setStep(step - 1)} 
                disabled={step === 1 || isSubmitting}
                className="btn" 
                style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'transparent', border: '1px solid var(--glass-border)', color: step === 1 ? 'var(--text-secondary)' : 'var(--text-primary)' }}
              >
                <ChevronLeft size={18} /> Back
              </button>
              
              {step < 4 ? (
                <button 
                  type="button" 
                  onClick={() => setStep(step + 1)} 
                  className="btn" 
                  style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  Next <ChevronRight size={18} />
                </button>
              ) : (
                <button 
                  type="button" 
                  onClick={handleSubmit}
                  disabled={isSubmitting || !name || (!contacts && !segmentId)} 
                  className="btn" 
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: isSubmitting ? 0.7 : 1 }}
                >
                  <Send size={18} /> {isSubmitting ? 'Launching...' : 'Launch Campaign'}
                </button>
              )}
            </div>

          </div>
        </div>

        {/* Right Column: Live Preview */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <CampaignPreview 
            platform="sms"
            name={name}
            message={message}
            messageType="text"
            mediaUrl=""
          />
        </div>

      </div>
    </div>
  );
}
