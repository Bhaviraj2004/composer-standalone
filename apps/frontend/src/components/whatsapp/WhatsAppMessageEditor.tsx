import { Plus, Trash2 } from 'lucide-react';

export interface ButtonDef {
  id: string;
  type: 'quick_reply' | 'url';
  text: string;
  url?: string;
}

interface WhatsAppMessageEditorProps {
  messageType: string;
  setMessageType: (type: string) => void;
  templateLanguage: string;
  setTemplateLanguage: (lang: string) => void;
  message: string;
  setMessage: (msg: string) => void;
  mediaUrl?: string;
  setMediaUrl?: (url: string) => void;
  buttons: ButtonDef[];
  setButtons: (buttons: ButtonDef[]) => void;
}

export default function WhatsAppMessageEditor({
  messageType,
  setMessageType,
  templateLanguage,
  setTemplateLanguage,
  message,
  setMessage,
  mediaUrl,
  setMediaUrl,
  buttons,
  setButtons
}: WhatsAppMessageEditorProps) {
  
  const handleAddButton = () => {
    if (buttons.length >= 3) return;
    setButtons([...buttons, { id: Date.now().toString(), type: 'quick_reply', text: '' }]);
  };

  const handleUpdateButton = (id: string, updates: Partial<ButtonDef>) => {
    setButtons(buttons.map(b => b.id === id ? { ...b, ...updates } : b));
  };

  const handleRemoveButton = (id: string) => {
    setButtons(buttons.filter(b => b.id !== id));
  };

  return (
    <>
      <div className="form-group">
        <label>Message Type</label>
        <select 
          className="form-control" 
          value={messageType} 
          onChange={(e) => {
            setMessageType(e.target.value);
            if (e.target.value !== 'image' && e.target.value !== 'video' && e.target.value !== 'document' && setMediaUrl) {
              setMediaUrl('');
            }
          }}
        >
          <option value="text">Text Message</option>
          <option value="image">Image Message</option>
          <option value="video">Video Message</option>
          <option value="document">Document Message</option>
          <option value="template">WhatsApp Template</option>
        </select>
      </div>

      {messageType === 'template' && (
        <div className="form-group">
          <label>Template Language Code</label>
          <input type="text" className="form-control" placeholder="e.g. en_US" value={templateLanguage} onChange={(e) => setTemplateLanguage(e.target.value)} required />
        </div>
      )}

      {(messageType === 'image' || messageType === 'video' || messageType === 'document') && (
        <div className="form-group">
          <label>Attachment ({messageType})</label>
          <input 
            type="file" 
            accept={messageType === 'image' ? 'image/*' : messageType === 'video' ? 'video/*' : '.pdf,.doc,.docx,.xls,.csv'} 
            className="form-control" 
            onChange={(e) => {
              if (e.target.files?.[0] && setMediaUrl) {
                setMediaUrl(URL.createObjectURL(e.target.files[0]));
              }
            }} 
            required={!mediaUrl}
          />
          {mediaUrl && messageType === 'image' && (
            <div style={{ marginTop: '12px', position: 'relative', display: 'inline-block' }}>
              <img src={mediaUrl} alt="Attachment Preview" style={{ maxWidth: '120px', borderRadius: '8px', border: '1px solid var(--glass-border)' }} />
              <button 
                type="button" 
                onClick={() => setMediaUrl && setMediaUrl('')} 
                style={{ position: 'absolute', top: '-8px', right: '-8px', background: 'var(--danger, #ef4444)', color: 'white', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'none', cursor: 'pointer' }}
              >
                ×
              </button>
            </div>
          )}
          {mediaUrl && messageType !== 'image' && (
            <div style={{ marginTop: '8px', color: 'var(--success)' }}>File ready for preview.</div>
          )}
        </div>
      )}

      <div className="form-group">
        <label>{messageType === 'template' ? 'Template Name' : 'Message Content'}</label>
        <textarea 
          className="form-control" 
          placeholder={messageType === 'template' ? "e.g. hello_world" : "Hi there! We have a special offer for you..."}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required={messageType === 'text' || messageType === 'template'}
        ></textarea>
      </div>

      <div className="form-group">
        <label>Interactive Buttons (Max 3)</label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {buttons.map((btn) => (
            <div key={btn.id} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <select 
                className="form-control" 
                style={{ width: '150px' }}
                value={btn.type}
                onChange={(e) => handleUpdateButton(btn.id, { type: e.target.value as any })}
              >
                <option value="quick_reply">Quick Reply</option>
                <option value="url">Call to Action (URL)</option>
              </select>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Button Text" 
                  value={btn.text}
                  onChange={(e) => handleUpdateButton(btn.id, { text: e.target.value })}
                  required
                />
                {btn.type === 'url' && (
                  <input 
                    type="url" 
                    className="form-control" 
                    placeholder="https://example.com" 
                    value={btn.url || ''}
                    onChange={(e) => handleUpdateButton(btn.id, { url: e.target.value })}
                    required
                  />
                )}
              </div>
              <button 
                type="button" 
                className="btn" 
                style={{ padding: '10px', background: 'transparent', border: '1px solid var(--glass-border)' }}
                onClick={() => handleRemoveButton(btn.id)}
              >
                <Trash2 size={16} color="var(--danger, #ef4444)" />
              </button>
            </div>
          ))}
          
          {buttons.length < 3 && (
            <button 
              type="button" 
              className="btn" 
              style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.05)', border: '1px dashed var(--glass-border)' }}
              onClick={handleAddButton}
            >
              <Plus size={16} /> Add Button
            </button>
          )}
        </div>
      </div>
    </>
  );
}
