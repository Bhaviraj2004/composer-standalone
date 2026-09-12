import React, { useState } from 'react';
import { Send, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';
import WhatsAppMessageEditor from '../../components/whatsapp/WhatsAppMessageEditor';
import ContactSelector from '../../components/common/ContactSelector';
import WhatsAppPreview from '../../components/whatsapp/WhatsAppPreview';
import type { ButtonDef } from '../../components/whatsapp/WhatsAppMessageEditor';

export default function WhatsAppCreateCampaignPage() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [scheduleType, setScheduleType] = useState('now');
  const [scheduleTime, setScheduleTime] = useState('');
  
  // Provider fields
  const [metaToken, setMetaToken] = useState('');
  const [adminId, setAdminId] = useState('');

  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('text');
  const [templateLanguage, setTemplateLanguage] = useState('en_US');
  const [mediaUrl, setMediaUrl] = useState('');
  const [buttons, setButtons] = useState<ButtonDef[]>([]);

  const [contacts, setContacts] = useState('');
  const [segmentId, setSegmentId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://localhost:3020/api/campaigns', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          platform: 'whatsapp',
          message,
          messageType,
          mediaUrl,
          contacts,
          segmentId,
          metaToken,
          adminId,
          isTemplate: messageType === 'template',
          templateLanguage: templateLanguage || 'en_US',
        }),
      });

      if (response.ok) {
        alert('WhatsApp Campaign Launched Successfully!');
        // Reset
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
      <h1 style={{ marginBottom: '8px' }}>New WhatsApp Campaign</h1>
      <p className="subtitle" style={{ marginBottom: '32px' }}>Follow the steps to configure and launch your WhatsApp messages.</p>

      {/* Stepper UI */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '32px', background: 'var(--glass-bg)', padding: '16px', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
        {[
          { num: 1, title: 'Campaign Details' },
          { num: 2, title: 'Meta Config' },
          { num: 3, title: 'Message Content' },
          { num: 4, title: 'Contacts & Launch' }
        ].map((s, index) => (
          <React.Fragment key={s.num}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: step >= s.num ? 1 : 0.5 }}>
              <div style={{ 
                width: '32px', height: '32px', borderRadius: '50%', 
                background: step >= s.num ? 'var(--success)' : 'var(--bg-tertiary)',
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
                  <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control" placeholder="e.g. Diwali WhatsApp Offer" autoFocus />
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
                <h2 style={{ marginBottom: '24px' }}>WhatsApp Meta Configuration</h2>
                
                <div className="animate-fade-in" style={{ background: 'var(--bg-tertiary)', padding: '16px', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
                  <h3 style={{ marginBottom: '16px', fontSize: '1rem' }}>Meta API Credentials</h3>
                  <div className="form-group">
                    <label>Meta Access Token</label>
                    <input type="password" value={metaToken} onChange={e => setMetaToken(e.target.value)} className="form-control" placeholder="EAAG..." />
                  </div>
                  <div className="form-group">
                    <label>WhatsApp Phone Number ID</label>
                    <input type="text" value={adminId} onChange={e => setAdminId(e.target.value)} className="form-control" placeholder="1234567890" />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-in" style={{ flex: 1 }}>
                <h2 style={{ marginBottom: '24px' }}>Message Content</h2>
                <WhatsAppMessageEditor 
                  messageType={messageType} setMessageType={setMessageType}
                  templateLanguage={templateLanguage} setTemplateLanguage={setTemplateLanguage}
                  message={message} setMessage={setMessage}
                  mediaUrl={mediaUrl} setMediaUrl={setMediaUrl}
                  buttons={buttons} setButtons={setButtons}
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
                  disabled={isSubmitting || !name || (!contacts && !segmentId)} 
                  className="btn" 
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--success)', opacity: isSubmitting ? 0.7 : 1 }}
                >
                  <Send size={18} /> {isSubmitting ? 'Launching...' : 'Launch Campaign'}
                </button>
              )}
            </div>

          </div>
        </div>

        {/* Right Column: Live Preview */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <WhatsAppPreview 
            name={name}
            message={message}
            mediaUrl={mediaUrl}
            messageType={messageType}
            buttons={buttons}
          />
        </div>

      </div>
    </div>
  );
}
