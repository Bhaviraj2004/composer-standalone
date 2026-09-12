interface WhatsAppContactsManagerProps {
  contacts: string;
  setContacts: React.Dispatch<React.SetStateAction<string>>;
  handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  segment: string;
  setSegment: (segment: string) => void;
}

export default function WhatsAppContactsManager({ contacts, setContacts, handleFileUpload, segment, setSegment }: WhatsAppContactsManagerProps) {
  return (
    <div className="form-group">
      <label>Target Audience (Contacts)</label>
      
      <div style={{ marginBottom: '16px' }}>
        <select 
          className="form-control" 
          value={segment} 
          onChange={(e) => setSegment(e.target.value)}
        >
          <option value="all">All Contacts</option>
          <option value="recent">Recent Customers (Last 30 days)</option>
          <option value="active">Highly Active Users</option>
          <option value="custom">Custom List (Upload below)</option>
        </select>
      </div>

      {(segment === 'custom' || segment === 'all') && (
        <>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '8px' }}>
            <input type="file" accept=".csv" onChange={handleFileUpload} className="form-control" style={{ flex: 1 }} />
          </div>
          <textarea 
            className="form-control" 
            placeholder="+1234567890, +9876543210..." 
            value={contacts} 
            onChange={(e) => setContacts(e.target.value)} 
            required={segment === 'custom'}
          ></textarea>
        </>
      )}
    </div>
  );
}
