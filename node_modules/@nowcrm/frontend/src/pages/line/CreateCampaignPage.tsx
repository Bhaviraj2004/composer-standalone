import React, { useState } from 'react';
import { Send, ChevronRight, ChevronLeft, MessageSquare, CheckCircle2 } from 'lucide-react';
import ContactSelector from '../../components/common/ContactSelector';

export default function LINECreateCampaignPage() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  
  // Config
  const [channelAccessToken, setChannelAccessToken] = useState('');
  const [broadcastMode, setBroadcastMode] = useState('broadcast');

  // Message Content
  const [message, setMessage] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [buttonText, setButtonText] = useState('');
  const [buttonUrl, setButtonUrl] = useState('');
  
  // Audience & Launch
  const [contacts, setContacts] = useState('');
  const [segmentId, setSegmentId] = useState('');
  const [scheduledAt, setScheduledAt] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    const providerConfigObj = {
      broadcastMode,
      imageUrl: imageUrl || undefined,
      buttonText: buttonText || undefined,
      buttonUrl: buttonUrl || undefined
    };

    // For broadcast/narrowcast, contacts/segment aren't required, but campaign router might complain if both are empty.
    // We can pass a dummy contact "all_friends" if broadcast is selected.
    let finalContacts = contacts;
    if (broadcastMode !== 'multicast' && !contacts && !segmentId) {
      finalContacts = 'all_audience';
    }

    try {
      const response = await fetch('http://localhost:3020/api/campaigns', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          platform: 'line',
          metaToken: channelAccessToken,
          providerConfig: JSON.stringify(providerConfigObj),
          message,
          contacts: finalContacts,
          segmentId,
          scheduledAt: scheduledAt || undefined
        })
      });

      if (response.ok) {
        alert('LINE campaign launched successfully!');
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

  const isNextDisabled = () => {
    if (step === 1 && !name) return true;
    if (step === 2 && !channelAccessToken) return true;
    if (step === 3 && !message) return true;
    return false;
  };

  return (
    <div className="animate-fade-in" style={{ maxWidth: '1200px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
        <MessageSquare size={32} color="#06C755" />
        <h1 style={{ margin: 0 }}>Create LINE Campaign 🇯🇵</h1>
      </div>
      <p className="subtitle" style={{ marginBottom: '32px' }}>
        Reach your audience via LINE Official Account with Broadcast, Multicast, or Narrowcast APIs.
      </p>

      {/* Stepper UI */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '32px', background: 'var(--glass-bg)', padding: '16px', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
        {[
          { num: 1, title: 'Campaign Details' },
          { num: 2, title: 'LINE Config' },
          { num: 3, title: 'Message Content' },
          { num: 4, title: 'Audience & Launch' }
        ].map((s, index) => (
          <React.Fragment key={s.num}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: step >= s.num ? 1 : 0.5 }}>
              <div style={{ 
                width: '32px', height: '32px', borderRadius: '50%', 
                background: step > s.num ? '#06C755' : step === s.num ? 'var(--primary)' : 'var(--bg-tertiary)',
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
                  <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control" placeholder="e.g. Tokyo Store Launch" autoFocus />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in" style={{ flex: 1 }}>
                <h2 style={{ marginBottom: '24px' }}>LINE Bot Configuration</h2>
                <div className="form-group">
                  <label>Channel Access Token</label>
                  <textarea 
                    value={channelAccessToken} 
                    onChange={e => setChannelAccessToken(e.target.value)} 
                    className="form-control" 
                    placeholder="eyJhbGciOiJIUzI1NiJ9..." 
                    rows={4}
                  />
                  <small style={{ color: 'var(--text-tertiary)', marginTop: '8px', display: 'block' }}>
                    Get this from the LINE Developers Console {'->'} Messaging API settings.
                  </small>
                </div>
                
                <div className="form-group" style={{ marginTop: '24px' }}>
                  <label>Audience Targeting Mode</label>
                  <select value={broadcastMode} onChange={e => setBroadcastMode(e.target.value)} className="form-control">
                    <option value="broadcast">Broadcast (All Friends)</option>
                    <option value="multicast">Multicast (Specific LINE User IDs)</option>
                    <option value="narrowcast">Narrowcast (Demographic Filters)</option>
                  </select>
                  {broadcastMode === 'broadcast' && (
                    <div style={{ padding: '12px', background: '#06c75520', color: '#06C755', borderRadius: '8px', marginTop: '12px' }}>
                      <strong>Broadcast Mode:</strong> This will send a message to all users who have added your LINE Official Account as a friend. You won't need to select contacts in Step 4.
                    </div>
                  )}
                  {broadcastMode === 'narrowcast' && (
                    <div style={{ padding: '12px', background: 'rgba(255,165,0,0.2)', color: 'orange', borderRadius: '8px', marginTop: '12px' }}>
                      <strong>Narrowcast Mode:</strong> This triggers the Narrowcast API. Currently uses your default audience groups.
                    </div>
                  )}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-in" style={{ flex: 1 }}>
                <h2 style={{ marginBottom: '24px' }}>Message Content</h2>
                <div className="form-group">
                  <label>Text Message (supports {'{{firstName}}'} personalization)</label>
                  <textarea 
                    value={message} 
                    onChange={e => setMessage(e.target.value)} 
                    className="form-control" 
                    rows={4}
                    placeholder="こんにちは {{firstName}}！ (Hello {{firstName}}!)" 
                  />
                  <small style={{ color: 'var(--text-tertiary)', display: 'block', marginTop: '8px' }}>
                    Note: Using {'{{firstName}}'} forces the campaign into Push (1-by-1) mode automatically.
                  </small>
                </div>
                
                <h3 style={{ marginTop: '24px', marginBottom: '16px', fontSize: '1rem', color: 'var(--primary)' }}>Optional: Buttons Template (Rich Message)</h3>
                
                <div className="form-group">
                  <label>Image URL (HTTPS only, JPEG/PNG)</label>
                  <input type="text" value={imageUrl} onChange={e => setImageUrl(e.target.value)} className="form-control" placeholder="https://example.com/image.jpg" />
                </div>
                
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div className="form-group" style={{ flex: 1 }}>
                    <label>Button Label</label>
                    <input type="text" value={buttonText} onChange={e => setButtonText(e.target.value)} className="form-control" placeholder="Buy Now" />
                  </div>
                  <div className="form-group" style={{ flex: 1 }}>
                    <label>Button Action URL</label>
                    <input type="text" value={buttonUrl} onChange={e => setButtonUrl(e.target.value)} className="form-control" placeholder="https://store.example.com" />
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="animate-fade-in" style={{ flex: 1 }}>
                <h2 style={{ marginBottom: '24px' }}>Audience & Launch</h2>
                
                {broadcastMode === 'multicast' ? (
                  <>
                    <p style={{ marginBottom: '16px' }}>Select the specific LINE User IDs you want to send this Multicast to.</p>
                    <ContactSelector 
                      onContactsChange={(c, sId) => {
                        setContacts(c);
                        setSegmentId(sId);
                      }} 
                    />
                  </>
                ) : (
                  <div style={{ padding: '24px', textAlign: 'center', background: 'var(--bg-tertiary)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                    <MessageSquare size={48} color="#06C755" style={{ opacity: 0.5, marginBottom: '16px' }} />
                    <h3 style={{ marginBottom: '8px' }}>Audience Pre-Configured</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      Since you selected <strong>{broadcastMode.toUpperCase()}</strong> mode, the audience is handled directly by the LINE Official Account manager.
                      <br /><br />
                      No manual contact selection is required!
                    </p>
                  </div>
                )}
                
                <div className="form-group" style={{ marginTop: '32px' }}>
                  <label>Schedule (Optional)</label>
                  <input 
                    type="datetime-local" 
                    value={scheduledAt} 
                    onChange={e => setScheduledAt(e.target.value)} 
                    className="form-control" 
                  />
                  <small style={{ color: 'var(--text-tertiary)', marginTop: '8px', display: 'block' }}>
                    Leave blank to send immediately.
                  </small>
                </div>
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
                  disabled={isNextDisabled()}
                  className="btn" 
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: isNextDisabled() ? 0.5 : 1 }}
                >
                  Next <ChevronRight size={18} />
                </button>
              ) : (
                <button 
                  type="button" 
                  onClick={handleSubmit}
                  disabled={isSubmitting || (broadcastMode === 'multicast' && !contacts && !segmentId)} 
                  className="btn" 
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#06C755', color: 'white', opacity: isSubmitting ? 0.7 : 1 }}
                >
                  <Send size={18} /> {isSubmitting ? 'Launching...' : 'Launch LINE Campaign'}
                </button>
              )}
            </div>

          </div>
        </div>

        {/* Right Column: Live Preview */}
        <div style={{ flex: '1', minWidth: '350px' }}>
          <div style={{ position: 'sticky', top: '40px' }}>
            <h3 style={{ marginBottom: '16px', color: 'var(--text-secondary)' }}>LINE Chat Preview</h3>
            
            <div style={{ 
              background: '#7494C0', // LINE chat background color
              borderRadius: '24px', 
              overflow: 'hidden',
              border: '8px solid #333',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
              height: '500px',
              display: 'flex',
              flexDirection: 'column'
            }}>
              {/* Header */}
              <div style={{ padding: '16px', background: '#273246', color: 'white', textAlign: 'center', fontSize: '14px', fontWeight: 'bold' }}>
                Your LINE Official Account
              </div>
              
              {/* Chat Area */}
              <div style={{ padding: '24px 16px', flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                
                {/* Simulated timestamp */}
                <div style={{ textAlign: 'center', margin: '8px 0' }}>
                  <span style={{ background: 'rgba(0,0,0,0.1)', padding: '4px 12px', borderRadius: '12px', fontSize: '11px', color: 'rgba(255,255,255,0.7)' }}>
                    Today
                  </span>
                </div>

                {message && (
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    {/* Bot Avatar */}
                    <div style={{ width: '36px', height: '36px', background: '#06C755', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                      <MessageSquare size={20} />
                    </div>
                    {/* Message Bubble */}
                    <div style={{ 
                      background: 'white', 
                      color: '#333',
                      padding: '12px 16px', 
                      borderRadius: '16px',
                      borderTopLeftRadius: '4px',
                      maxWidth: '75%',
                      fontSize: '14px',
                      lineHeight: '1.5',
                      whiteSpace: 'pre-wrap',
                      boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
                    }}>
                      {message}
                    </div>
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
