import React, { useState } from 'react';
import { Send, ChevronRight, ChevronLeft, Mail, CheckCircle2 } from 'lucide-react';
import ContactSelector from '../../components/common/ContactSelector';

export default function EmailCreateCampaignPage() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  
  // Schedule
  const [scheduleType, setScheduleType] = useState('now');
  const [scheduleTime, setScheduleTime] = useState('');

  // Provider
  const [provider, setProvider] = useState('smtp');
  const [host, setHost] = useState('');
  const [port, setPort] = useState('587');
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [fromEmail, setFromEmail] = useState('');

  // Message Content
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState(''); // HTML template
  const [contacts, setContacts] = useState('');
  const [segmentId, setSegmentId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    const providerConfigObj = {
      host,
      port,
      user,
      pass,
      from: fromEmail
    };

    try {
      const response = await fetch('http://localhost:3020/api/campaigns', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          platform: 'email',
          provider,
          providerConfig: JSON.stringify(providerConfigObj),
          subject,
          message,
          contacts,
          segmentId,
          scheduledAt: scheduleType === 'later' ? scheduleTime : null
        })
      });

      if (response.ok) {
        alert('Email campaign launched successfully!');
        window.location.href = '/campaigns/history';
      } else {
        const error = await response.json();
        alert('Failed to launch campaign: ' + error.error);
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while launching the campaign.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate-fade-in" style={{ maxWidth: '1200px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
        <Mail size={32} color="var(--primary)" />
        <h1 style={{ margin: 0 }}>Create Email Campaign</h1>
      </div>
      <p className="subtitle" style={{ marginBottom: '32px' }}>
        Send bulk personalized emails using variables like {'{{firstName}}'} and {'{{email}}'}.
      </p>

      {/* Stepper UI */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '32px', background: 'var(--glass-bg)', padding: '16px', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
        {[
          { num: 1, title: 'Campaign Details' },
          { num: 2, title: 'Email Provider' },
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
                  <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control" placeholder="e.g. November Newsletter" autoFocus />
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
                <h2 style={{ marginBottom: '24px' }}>Email Provider (SMTP)</h2>
                <div className="form-group">
                  <label>Provider Type</label>
                  <select value={provider} onChange={e => setProvider(e.target.value)} className="form-control">
                    <option value="smtp">Custom SMTP Server</option>
                    <option value="sendgrid">SendGrid (SMTP)</option>
                  </select>
                </div>

                <div className="animate-fade-in" style={{ background: 'var(--bg-tertiary)', padding: '16px', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
                  <h3 style={{ marginBottom: '16px', fontSize: '1rem' }}>SMTP Credentials</h3>
                  <div style={{ display: 'flex', gap: '16px' }}>
                    <div className="form-group" style={{ flex: 2 }}>
                      <label>SMTP Host</label>
                      <input type="text" value={host} onChange={e => setHost(e.target.value)} className="form-control" placeholder="smtp.mailtrap.io" />
                    </div>
                    <div className="form-group" style={{ flex: 1 }}>
                      <label>Port</label>
                      <input type="number" value={port} onChange={e => setPort(e.target.value)} className="form-control" placeholder="587" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Username</label>
                    <input type="text" value={user} onChange={e => setUser(e.target.value)} className="form-control" placeholder="SMTP Username" />
                  </div>
                  <div className="form-group">
                    <label>Password / API Key</label>
                    <input type="password" value={pass} onChange={e => setPass(e.target.value)} className="form-control" placeholder="••••••••" />
                  </div>
                  <div className="form-group">
                    <label>Sender Email (From)</label>
                    <input type="email" value={fromEmail} onChange={e => setFromEmail(e.target.value)} className="form-control" placeholder="noreply@yourcompany.com" />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-in" style={{ flex: 1 }}>
                <h2 style={{ marginBottom: '24px' }}>Email Content</h2>
                <div className="form-group">
                  <label>Subject Line</label>
                  <input type="text" value={subject} onChange={e => setSubject(e.target.value)} className="form-control" placeholder="Hello {{firstName}}! Exciting news inside." />
                </div>
                <div className="form-group">
                  <label style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Email Body (HTML Supported)</span>
                    <span style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>Variables: {'{{firstName}}'}, {'{{lastName}}'}, {'{{email}}'}</span>
                  </label>
                  <textarea 
                    value={message} 
                    onChange={e => setMessage(e.target.value)} 
                    className="form-control" 
                    rows={12}
                    placeholder="<p>Hi {{firstName}},</p><br/><p>Welcome to our platform!</p>" 
                    style={{ fontFamily: 'monospace' }}
                  />
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
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--success)', opacity: isSubmitting ? 0.7 : 1 }}
                >
                  <Send size={18} /> {isSubmitting ? 'Launching...' : 'Launch Campaign'}
                </button>
              )}
            </div>

          </div>
        </div>

        {/* Right Column: Live Preview */}
        <div style={{ flex: '1', minWidth: '350px' }}>
          <div style={{ position: 'sticky', top: '40px' }}>
            <h3 style={{ marginBottom: '16px', color: 'var(--text-secondary)' }}>Live Preview</h3>
            <div style={{ 
              background: 'white', 
              color: 'black', 
              borderRadius: '12px', 
              overflow: 'hidden',
              border: '1px solid #e0e0e0',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}>
              {/* Header block */}
              <div style={{ padding: '16px', borderBottom: '1px solid #e0e0e0', background: '#f9f9f9' }}>
                <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>
                  <strong>From:</strong> {fromEmail || 'sender@example.com'}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 600 }}>
                  <strong>Subject:</strong> {subject || 'Your Subject Line Here'}
                </div>
              </div>
              
              {/* Body block */}
              <div style={{ padding: '24px', minHeight: '300px', fontSize: '14px', lineHeight: '1.6' }}>
                {message ? (
                  <div dangerouslySetInnerHTML={{ __html: message.replace(/{{firstName}}/g, 'John').replace(/{{lastName}}/g, 'Doe').replace(/{{email}}/g, 'john@doe.com') }} />
                ) : (
                  <div style={{ color: '#aaa', fontStyle: 'italic', textAlign: 'center', marginTop: '100px' }}>
                    Email content preview...
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
