import { Smartphone, Send, FileText, Camera } from 'lucide-react';

interface CampaignPreviewProps {
  platform: string;
  name: string;
  message: string;
  mediaUrl?: string;
  messageType?: string;
  buttons?: any[];
}

export default function CampaignPreview({ platform, name, message, mediaUrl, messageType = 'text', buttons = [] }: CampaignPreviewProps) {
  
  const getStyles = () => {
    switch (platform) {
      case 'instagram':
        return {
          containerBg: '#fafafa',
          headerBg: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
          headerColor: 'white',
          bubbleBg: '#efefef',
          bubbleColor: 'black',
          bubbleAlign: 'flex-end',
          icon: <Camera size={16} />
        };
      case 'facebook':
        return {
          containerBg: 'white',
          headerBg: 'white',
          headerColor: 'black',
          headerBorder: '1px solid #e0e0e0',
          bubbleBg: '#0084ff',
          bubbleColor: 'white',
          bubbleAlign: 'flex-end',
          icon: <Send size={16} color="#0084ff" />
        };
      case 'whatsapp':
      default:
        return {
          containerBg: '#efeae2',
          headerBg: '#075e54',
          headerColor: 'white',
          bubbleBg: '#dcf8c6',
          bubbleColor: 'black',
          bubbleAlign: 'flex-end',
          icon: <Smartphone size={16} />
        };
    }
  };

  const styles = getStyles();

  return (
    <div style={{ position: 'sticky', top: '40px' }}>
      <h3 style={{ marginBottom: '16px', color: 'var(--text-secondary)' }}>Live Preview</h3>
      
      <div style={{ 
        background: styles.containerBg, 
        borderRadius: '24px', 
        padding: '16px', 
        minHeight: '500px',
        border: '8px solid #333',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Fake Phone Header */}
        <div style={{ 
          background: styles.headerBg, 
          margin: '-16px -16px 16px -16px', 
          padding: '16px', 
          borderRadius: '16px 16px 0 0', 
          color: styles.headerColor, 
          fontWeight: 600, 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px',
          borderBottom: styles.headerBorder || 'none'
        }}>
          <div style={{ width: '32px', height: '32px', background: platform === 'facebook' ? '#f0f2f5' : 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
             {styles.icon}
          </div>
          {name || 'Your Campaign'}
        </div>

        {/* Message Area */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: styles.bubbleAlign as any, gap: '4px', flex: 1 }}>
          {(message || mediaUrl || buttons.length > 0) ? (
            <div style={{ 
              background: styles.bubbleBg, 
              color: styles.bubbleColor, 
              padding: '4px', 
              borderRadius: '12px 12px 0 12px',
              maxWidth: '85%',
              minWidth: '200px',
              fontSize: '14px',
              lineHeight: '1.4',
              boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden'
            }}>
              {mediaUrl && messageType === 'image' && (
                <img 
                  src={mediaUrl} 
                  alt="Attachment" 
                  style={{ width: '100%', maxHeight: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: message ? '8px' : '0' }} 
                />
              )}
              {mediaUrl && messageType === 'video' && (
                <video 
                  src={mediaUrl} 
                  controls
                  style={{ width: '100%', maxHeight: '200px', borderRadius: '8px', marginBottom: message ? '8px' : '0' }} 
                />
              )}
              {mediaUrl && messageType === 'document' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px', background: 'rgba(0,0,0,0.05)', borderRadius: '8px', marginBottom: message ? '8px' : '0' }}>
                  <FileText size={24} color="#888" />
                  <span style={{ fontWeight: 500, fontSize: '13px' }}>Document Attachment</span>
                </div>
              )}
              
              {message && (
                <div style={{ padding: '8px 12px', whiteSpace: 'pre-wrap' }}>
                  {message}
                </div>
              )}

              {/* Buttons */}
              {platform === 'whatsapp' && buttons.length > 0 && (
                <div style={{ marginTop: '4px', display: 'flex', flexDirection: 'column' }}>
                  {buttons.map((btn) => (
                    <div 
                      key={btn.id}
                      style={{
                        padding: '10px 12px',
                        borderTop: '1px solid rgba(0,0,0,0.1)',
                        textAlign: 'center',
                        color: '#00a884',
                        fontWeight: 500,
                        fontSize: '15px'
                      }}
                    >
                      {btn.type === 'url' ? '↗ ' : '↺ '}{btn.text || 'Button'}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div style={{ color: '#888', alignSelf: 'center', marginTop: '100px', fontSize: '14px', textAlign: 'center' }}>
              Your message preview will appear here.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
