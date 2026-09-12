interface WhatsAppCampaignDetailsProps {
  name: string;
  setName: (name: string) => void;
  metaToken: string;
  setMetaToken: (token: string) => void;
  adminId: string;
  setAdminId: (id: string) => void;
  scheduleType: string;
  setScheduleType: (type: string) => void;
  scheduleTime: string;
  setScheduleTime: (time: string) => void;
}

export default function WhatsAppCampaignDetails({
  name,
  setName,
  metaToken,
  setMetaToken,
  adminId,
  setAdminId,
  scheduleType,
  setScheduleType,
  scheduleTime,
  setScheduleTime
}: WhatsAppCampaignDetailsProps) {
  return (
    <>
      <div className="form-group">
        <label>Campaign Name</label>
        <input 
          type="text" 
          className="form-control" 
          placeholder="e.g. Summer Sale 2024" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="form-group" style={{ display: 'flex', gap: '16px' }}>
        <div style={{ flex: 1 }}>
          <label>WhatsApp Business Token</label>
          <input type="text" className="form-control" placeholder="EAAG..." value={metaToken} onChange={(e) => setMetaToken(e.target.value)} required />
        </div>
        <div style={{ flex: 1 }}>
          <label>WhatsApp Phone Number ID</label>
          <input type="text" className="form-control" placeholder="Phone Number ID" value={adminId} onChange={(e) => setAdminId(e.target.value)} required />
        </div>
      </div>

      <div className="form-group">
        <label>Campaign Schedule</label>
        <div style={{ display: 'flex', gap: '16px', marginBottom: '12px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', margin: 0 }}>
            <input 
              type="radio" 
              name="schedule" 
              value="now" 
              checked={scheduleType === 'now'} 
              onChange={() => setScheduleType('now')} 
            />
            Send Now
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', margin: 0 }}>
            <input 
              type="radio" 
              name="schedule" 
              value="later" 
              checked={scheduleType === 'later'} 
              onChange={() => setScheduleType('later')} 
            />
            Schedule for Later
          </label>
        </div>
        
        {scheduleType === 'later' && (
          <input 
            type="datetime-local" 
            className="form-control" 
            value={scheduleTime}
            onChange={(e) => setScheduleTime(e.target.value)}
            required
          />
        )}
      </div>
    </>
  );
}
