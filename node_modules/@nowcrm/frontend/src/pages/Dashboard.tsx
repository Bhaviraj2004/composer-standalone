import { BarChart3, CheckCircle2, XCircle, MessageSquare } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="animate-fade-in">
      <h1>Dashboard</h1>
      <p className="subtitle">Overview of your bulk messaging campaigns.</p>

      <div className="stats-grid">
        <div className="glass-panel">
          <div style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MessageSquare size={18} /> Total Sent
          </div>
          <div className="stat-value">0</div>
        </div>
        <div className="glass-panel">
          <div style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CheckCircle2 size={18} color="var(--success)" /> Success Rate
          </div>
          <div className="stat-value">-</div>
        </div>
        <div className="glass-panel">
          <div style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <XCircle size={18} color="var(--danger)" /> Failed
          </div>
          <div className="stat-value">0</div>
        </div>
        <div className="glass-panel">
          <div style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BarChart3 size={18} color="var(--accent-primary)" /> Active Campaigns
          </div>
          <div className="stat-value">0</div>
        </div>
      </div>

      <div className="glass-panel">
        <h2 style={{ marginBottom: '20px' }}>Recent Campaigns</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ color: 'var(--text-secondary)', textAlign: 'center', padding: '32px 0' }}>
            No recent campaigns found. Click "New Campaign" to start one.
          </div>
        </div>
      </div>
    </div>
  );
}
