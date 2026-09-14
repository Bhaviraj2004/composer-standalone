import { useState } from 'react';
import { Save } from 'lucide-react';
import { useSpace } from '../context/SpaceContext';

export default function Settings() {
  const { activeSpace } = useSpace();
  const [activeTab, setActiveTab] = useState('general');

  const tabs = [
    { id: 'general', name: 'General' },
  ];

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeSpace) {
      // updateSpace(activeSpace.id, { ... });
      alert('Settings saved successfully to workspace!');
    }
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', gap: '32px' }}>
      {/* Settings Sidebar */}
      <div style={{ width: '240px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h1 style={{ marginBottom: '24px' }}>Settings</h1>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '12px 16px',
              textAlign: 'left',
              background: activeTab === tab.id ? 'var(--glass-bg)' : 'transparent',
              border: 'none',
              borderRadius: '8px',
              color: activeTab === tab.id ? 'var(--text-primary)' : 'var(--text-secondary)',
              cursor: 'pointer',
              fontWeight: 500,
              transition: 'background 0.2s'
            }}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Settings Content */}
      <div style={{ flex: 1, marginTop: '64px' }}>
        <form onSubmit={handleSave} className="glass-panel">
          
          {activeTab === 'general' && (
            <div className="animate-fade-in">
              <h2 style={{ marginBottom: '24px' }}>General Profile</h2>
              <div className="form-group">
                <label>Company Name</label>
                <input type="text" className="form-control" defaultValue="My Business" />
              </div>
              <div className="form-group">
                <label>Timezone</label>
                <select className="form-control" defaultValue="UTC">
                  <option value="UTC">UTC</option>
                  <option value="EST">Eastern Time (EST)</option>
                  <option value="IST">India Standard Time (IST)</option>
                </select>
              </div>
            </div>
          )}







          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '32px', borderTop: '1px solid var(--glass-border)', paddingTop: '24px' }}>
            <button type="submit" className="btn" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Save size={18} /> Save Settings
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
