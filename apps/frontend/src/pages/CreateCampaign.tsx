import React, { useState } from 'react';
import { Send, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';
import CampaignPreview from '../components/campaign/CampaignPreview';
import ContactSelector from '../components/common/ContactSelector';
import MessageEditor from '../components/campaign/MessageEditor';

export default function CreateCampaign({ platformType = 'facebook' }: { platformType?: string }) {
  const platform = platformType;

  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [scheduleType, setScheduleType] = useState('now');
  const [scheduleTime, setScheduleTime] = useState('');

  // Provider fields
  const [metaToken, setMetaToken] = useState('');
  const [adminId, setAdminId] = useState('');
  const [twilioSid, setTwilioSid] = useState('');
  const [twilioToken, setTwilioToken] = useState('');

  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('text');
  const [mediaUrl, setMediaUrl] = useState('');
  const [contacts, setContacts] = useState('');
  const [segmentId, setSegmentId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      let payload: any = {
        name,
        platform,
        message,
        contacts,
        segmentId,
        scheduledAt: scheduleType === 'later' ? scheduleTime : null
      };

      if (platform === 'voice') {
        payload.provider = 'twilio';
        payload.providerConfig = JSON.stringify({ sid: twilioSid, token: twilioToken });
      } else {
        // IG and FB use Meta APIs
        payload.metaToken = metaToken;
        payload.adminId = adminId;
      }

      const response = await fetch(`http://localhost:3020/api/campaigns`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        alert(`${platform} Campaign Launched Successfully!`);
        // Reset form
        setStep(1);
        setName('');
        setMessage('');
        setContacts('');
        setSegmentId('');
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
      <h1 style={{ textTransform: 'capitalize', marginBottom: '8px' }}>New {platform} Campaign</h1>
      <p className="subtitle" style={{ marginBottom: '32px' }}>Follow the steps to configure and launch your {platform} messages.</p>

      {/* Stepper UI */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '32px', background: 'var(--glass-bg)', padding: '16px', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
        {[
          { num: 1, title: 'Campaign Details' },
          { num: 2, title: 'Provider Config' },
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
                  <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control" placeholder={`e.g. ${platform} Promo Alert`} autoFocus />
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

                {(platform === 'facebook' || platform === 'instagram') ? (
                  <div className="animate-fade-in" style={{ background: 'var(--bg-tertiary)', padding: '16px', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
                    <h3 style={{ marginBottom: '16px', fontSize: '1rem' }}>Meta API Credentials</h3>
                    <div className="form-group">
                      <label>Meta Access Token</label>
                      <input type="password" value={metaToken} onChange={e => setMetaToken(e.target.value)} className="form-control" placeholder="EAAG..." />
                    </div>
                    <div className="form-group">
                      <label>{platform === 'instagram' ? 'Instagram Account ID' : 'Facebook Page ID'}</label>
                      <input type="text" value={adminId} onChange={e => setAdminId(e.target.value)} className="form-control" placeholder="1234567890" />
                    </div>
                  </div>
                ) : platform === 'voice' ? (
                  <div className="animate-fade-in" style={{ background: 'var(--bg-tertiary)', padding: '16px', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
                    <h3 style={{ marginBottom: '16px', fontSize: '1rem' }}>Twilio Voice Credentials</h3>
                    <div className="form-group">
                      <label>Account SID</label>
                      <input type="text" value={twilioSid} onChange={e => setTwilioSid(e.target.value)} className="form-control" placeholder="AC..." />
                    </div>
                    <div className="form-group">
                      <label>Auth Token</label>
                      <input type="password" value={twilioToken} onChange={e => setTwilioToken(e.target.value)} className="form-control" placeholder="••••••••" />
                    </div>
                  </div>
                ) : null}
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-in" style={{ flex: 1 }}>
                <h2 style={{ marginBottom: '24px' }}>Message Content</h2>
                <MessageEditor
                  messageType={messageType} setMessageType={setMessageType}
                  message={message} setMessage={setMessage}
                  mediaUrl={mediaUrl} setMediaUrl={setMediaUrl}
                />
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
                  disabled={isSubmitting}
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
            platform={platform}
            name={name}
            message={message}
            messageType={messageType}
            mediaUrl={mediaUrl}
          />
        </div>

      </div>
    </div>
  );
}
