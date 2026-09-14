import React, { useState } from 'react';
import { Send, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ContactSelector from '../components/common/ContactSelector';

export default function VoiceCreateCampaignPage() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [scheduleType, setScheduleType] = useState('now');
  const [scheduledAt, setScheduledAt] = useState('');
  const [contacts, setContacts] = useState('');
  const [segmentId, setSegmentId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Voice Provider State
  const [provider, setProvider] = useState('twilio');
  const [providerConfig, setProviderConfig] = useState(''); // JSON string

  // Message State
  const [messageType, setMessageType] = useState<'tts' | 'audio'>('tts');
  const [message, setMessage] = useState('');
  const [audioUrl, setAudioUrl] = useState('');

  const navigate = useNavigate();

  const handleNext = () => setStep(s => Math.min(4, s + 1));
  const handlePrev = () => setStep(s => Math.max(1, s - 1));

  const handleLaunch = async () => {
    setIsSubmitting(true);
    try {
      const payload = {
        name,
        platform: 'voice',
        scheduleType,
        scheduledAt: scheduleType === 'later' ? scheduledAt : undefined,
        contacts,
        segmentId,
        provider,
        providerConfig,
        message: messageType === 'tts' ? message : undefined,
        audioUrl: messageType === 'audio' ? audioUrl : undefined,
      };

      const response = await fetch('http://localhost:3020/api/campaigns', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        alert('Voice Broadcast Launched Successfully!');
        navigate('/');
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
      <h1 style={{ textTransform: 'capitalize', marginBottom: '8px' }}>New Voice Broadcast</h1>
      <p className="subtitle" style={{ marginBottom: '32px' }}>Configure your automated voice broadcasting campaign.</p>

      {/* Stepper UI */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '32px', background: 'var(--glass-bg)', padding: '16px', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
        {[
          { num: 1, title: 'Campaign Details' },
          { num: 2, title: 'Voice Provider' },
          { num: 3, title: 'Broadcast Content' },
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
                  <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control" placeholder="e.g. Voice Alert" autoFocus />
                </div>
                <div className="form-group">
                  <label>Schedule</label>
                  <select value={scheduleType} onChange={e => setScheduleType(e.target.value)} className="form-control">
                    <option value="now">Call Immediately</option>
                    <option value="later">Schedule for Later</option>
                  </select>
                </div>
                {scheduleType === 'later' && (
                  <div className="form-group">
                    <label>Schedule Date & Time</label>
                    <input type="datetime-local" value={scheduledAt} onChange={e => setScheduledAt(e.target.value)} className="form-control" />
                  </div>
                )}
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in" style={{ flex: 1 }}>
                <h2 style={{ marginBottom: '24px' }}>Voice Provider Config</h2>
                <div className="form-group">
                  <label>Select Provider</label>
                  <select value={provider} onChange={e => setProvider(e.target.value)} className="form-control">
                    <option value="twilio">Twilio Voice</option>
                    <option value="vonage">Vonage Voice API</option>
                    <option value="fast2sms">Fast2SMS Voice</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Configuration (JSON format)</label>
                  <textarea 
                    value={providerConfig} 
                    onChange={e => setProviderConfig(e.target.value)} 
                    className="form-control" 
                    placeholder={
                      provider === 'twilio' 
                      ? '{\n  "sid": "ACxxx",\n  "token": "xxx",\n  "fromNumber": "+1234567890"\n}' 
                      : provider === 'fast2sms'
                      ? '{\n  "apiKey": "your-auth-key",\n  "route": "voice"\n}'
                      : '{\n  "appId": "xxx",\n  "privateKey": "xxx",\n  "fromNumber": "+1234567890"\n}'
                    }
                    style={{ height: '150px', fontFamily: 'monospace' }}
                  />
                  <small style={{ color: 'var(--text-tertiary)' }}>
                    Provide the required credentials for your selected Voice API provider.
                  </small>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-in" style={{ flex: 1 }}>
                <h2 style={{ marginBottom: '24px' }}>Broadcast Content</h2>
                <div className="form-group">
                  <label>Voice Type</label>
                  <select value={messageType} onChange={e => setMessageType(e.target.value as any)} className="form-control">
                    <option value="tts">Text-to-Speech (Robot Voice)</option>
                    <option value="audio">Pre-recorded Audio (MP3/WAV)</option>
                  </select>
                </div>

                {messageType === 'tts' ? (
                  <div className="form-group">
                    <label>Text to Speak</label>
                    <textarea 
                      value={message} 
                      onChange={e => setMessage(e.target.value)} 
                      className="form-control" 
                      placeholder="e.g. Hello, this is a reminder call about your upcoming appointment."
                      style={{ height: '120px' }}
                    />
                    <small style={{ color: 'var(--text-tertiary)' }}>This text will be spoken to the user using the provider's Text-to-Speech engine.</small>
                  </div>
                ) : (
                  <div className="form-group">
                    <label>Audio File URL</label>
                    <input 
                      type="url" 
                      value={audioUrl} 
                      onChange={e => setAudioUrl(e.target.value)} 
                      className="form-control" 
                      placeholder="https://example.com/audio.mp3" 
                    />
                    <small style={{ color: 'var(--text-tertiary)' }}>Provide a public link to the MP3 or WAV file you want to play.</small>
                  </div>
                )}
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
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px', paddingTop: '24px', borderTop: '1px solid var(--glass-border)' }}>
              <button 
                className="btn btn-secondary" 
                onClick={handlePrev} 
                disabled={step === 1 || isSubmitting}
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <ChevronLeft size={16} /> Back
              </button>
              
              {step < 4 ? (
                <button 
                  className="btn btn-primary" 
                  onClick={handleNext}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  Next <ChevronRight size={16} />
                </button>
              ) : (
                <button 
                  className="btn btn-primary" 
                  onClick={handleLaunch}
                  disabled={isSubmitting || !name || (!contacts && !segmentId) || (!message && !audioUrl)}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  {isSubmitting ? 'Launching...' : 'Launch Broadcast'} <Send size={16} />
                </button>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
