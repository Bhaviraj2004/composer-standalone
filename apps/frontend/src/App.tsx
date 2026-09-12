import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Send, Settings, Users, History, Plus, ChevronDown, Smartphone, Camera, MessageSquare, Mic } from 'lucide-react';
import Dashboard from './pages/Dashboard';
import CreateCampaign from './pages/CreateCampaign';
import WhatsAppCreateCampaignPage from './pages/whatsapp/CreateCampaignPage';
import SMSCreateCampaignPage from './pages/sms/CreateCampaignPage';
import VoiceCreateCampaignPage from './pages/VoiceCreateCampaignPage';
import EmailCreateCampaignPage from './pages/email/CreateCampaignPage';
import LINECreateCampaignPage from './pages/line/CreateCampaignPage';
import Contacts from './pages/Contacts';
import SettingsPage from './pages/Settings';
import CampaignHistory from './pages/CampaignHistory';
import CampaignAnalytics from './pages/CampaignAnalytics';
import Home from './pages/Home';
import { SpaceProvider, useSpace } from './context/SpaceContext';
import './index.css';

function CreateSpaceModal({ isOpen, onClose, onCreate }: { isOpen: boolean, onClose: () => void, onCreate: (name: string, email: string) => void }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onCreate(name.trim(), email);
      setName('');
      setEmail('');
      onClose();
    }
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 9999, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="glass-panel animate-fade-in" style={{ width: '100%', maxWidth: '400px', padding: '32px' }}>
        <h2 style={{ marginBottom: '24px' }}>Create New Space</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Space / Company Name *</label>
            <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} required placeholder="e.g. Acme Corp" />
          </div>
          <div className="form-group">
            <label>Contact Email</label>
            <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} placeholder="hello@acme.com" />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '32px' }}>
            <button type="button" onClick={onClose} className="btn" style={{ background: 'transparent', border: '1px solid var(--glass-border)', color: 'white' }}>Cancel</button>
            <button type="submit" className="btn">Create Space</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Sidebar() {
  const location = useLocation();
  const { spaces, activeSpace, createSpace, setActiveSpace } = useSpace();
  const [isSpaceMenuOpen, setIsSpaceMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateSpace = (name: string, _email: string) => {
    // We can store email in the space object if we want, but for now we just create the space.
    createSpace(name);
  };

  return (
    <div className="sidebar">
      <Link to="/spaces" className="logo" style={{ textDecoration: 'none', color: 'white', display: 'block' }}>Composer</Link>
      
      <div style={{ position: 'relative', marginTop: '16px', marginBottom: '16px' }}>
        <button 
          onClick={() => setIsSpaceMenuOpen(!isSpaceMenuOpen)}
          style={{ width: '100%', padding: '12px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
        >
          <span style={{ fontWeight: 500 }}>{activeSpace ? activeSpace.name : 'Select Space'}</span>
          <ChevronDown size={16} />
        </button>

        {isSpaceMenuOpen && (
          <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, marginTop: '8px', background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '8px', overflow: 'hidden', zIndex: 10 }}>
            {spaces.map(s => (
              <div 
                key={s.id} 
                onClick={() => { setActiveSpace(s); setIsSpaceMenuOpen(false); }}
                style={{ padding: '12px', cursor: 'pointer', borderBottom: '1px solid var(--glass-border)', background: activeSpace?.id === s.id ? 'var(--glass-bg)' : 'transparent' }}
              >
                {s.name}
              </div>
            ))}
            <div 
              onClick={() => { setIsModalOpen(true); setIsSpaceMenuOpen(false); }}
              style={{ padding: '12px', cursor: 'pointer', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <Plus size={16} /> Create New Space
            </div>
          </div>
        )}
      </div>

      <CreateSpaceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onCreate={handleCreateSpace} />

      <div className="nav-links">
        <Link to="/spaces" className={`nav-link ${location.pathname === '/spaces' ? 'active' : ''}`}>
          <LayoutDashboard size={20} /> Workspaces
        </Link>
        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
          <LayoutDashboard size={20} /> Dashboard
        </Link>
        <Link to="/campaigns/whatsapp" className={`nav-link ${location.pathname === '/campaigns/whatsapp' ? 'active' : ''}`}>
          <Smartphone size={20} /> WhatsApp Campaign
        </Link>
        <Link to="/campaigns/instagram" className={`nav-link ${location.pathname === '/campaigns/instagram' ? 'active' : ''}`}>
          <Camera size={20} /> Instagram Campaign
        </Link>
        <Link to="/campaigns/facebook" className={`nav-link ${location.pathname === '/campaigns/facebook' ? 'active' : ''}`}>
          <Send size={20} /> Facebook Campaign
        </Link>
        <Link to="/campaigns/line" className={`nav-link ${location.pathname === '/campaigns/line' ? 'active' : ''}`}>
          <MessageSquare size={20} /> LINE Campaign
        </Link>
        <Link to="/campaigns/sms" className={`nav-link ${location.pathname === '/campaigns/sms' ? 'active' : ''}`}>
          <MessageSquare size={20} /> SMS Campaign
        </Link>
        <Link to="/campaigns/voice" className={`nav-link ${location.pathname === '/campaigns/voice' ? 'active' : ''}`}>
          <Mic size={20} /> Voice Campaign
        </Link>
        <Link to="/campaigns/email" className={`nav-link ${location.pathname === '/campaigns/email' ? 'active' : ''}`}>
          <MessageSquare size={20} /> Email Campaign
        </Link>
        <Link to="/campaigns/history" className={`nav-link ${location.pathname === '/campaigns/history' ? 'active' : ''}`}>
          <History size={20} /> History
        </Link>
        <Link to="/contacts" className={`nav-link ${location.pathname === '/contacts' ? 'active' : ''}`}>
          <Users size={20} /> Contacts
        </Link>
        <Link to="/settings" className={`nav-link ${location.pathname === '/settings' ? 'active' : ''}`}>
          <Settings size={20} /> Settings
        </Link>
      </div>
    </div>
  );
}

function AppContent() {
  const { activeSpace } = useSpace();
  const location = useLocation();

  if (!activeSpace || location.pathname === '/spaces') {
    return (
      <div style={{ width: '100%', minHeight: '100vh', background: 'var(--bg-primary)' }}>
        <Home />
      </div>
    );
  }

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content-wrapper">
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/campaigns/whatsapp" element={<WhatsAppCreateCampaignPage />} />
            <Route path="/campaigns/instagram" element={<CreateCampaign platformType="instagram" />} />
            <Route path="/campaigns/facebook" element={<CreateCampaign platformType="facebook" />} />
            <Route path="/campaigns/sms" element={<SMSCreateCampaignPage />} />
            <Route path="/campaigns/voice" element={<VoiceCreateCampaignPage />} />
            <Route path="/campaigns/email" element={<EmailCreateCampaignPage />} />
            <Route path="/campaigns/line" element={<LINECreateCampaignPage />} />
            <Route path="/campaigns/history" element={<CampaignHistory />} />
            <Route path="/campaigns/:id/analytics" element={<CampaignAnalytics />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <SpaceProvider>
      <Router>
        <AppContent />
      </Router>
    </SpaceProvider>
  );
}

export default App;
