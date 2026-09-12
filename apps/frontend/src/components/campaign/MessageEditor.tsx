

interface MessageEditorProps {
  messageType: string;
  setMessageType: (type: string) => void;
  message: string;
  setMessage: (msg: string) => void;
  mediaUrl?: string;
  setMediaUrl?: (url: string) => void;
}

export default function MessageEditor({
  messageType,
  setMessageType,
  message,
  setMessage,
  mediaUrl,
  setMediaUrl
}: MessageEditorProps) {
  


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
        </select>
      </div>



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
        <label>Message Content</label>
        <textarea 
          className="form-control" 
          placeholder="Hi there! We have a special offer for you..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required={messageType === 'text'}
        ></textarea>
      </div>


    </>
  );
}
