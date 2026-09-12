import { useState, useEffect } from 'react';
import { Play, Copy, BarChart2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CampaignHistory() {
  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3020/api/campaigns')
      .then(res => res.json())
      .then(data => {
        setCampaigns(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="animate-fade-in">
      <h1>Campaign History</h1>
      <p className="subtitle">View and reactivate your previous campaigns.</p>

      <div className="glass-panel" style={{ padding: '0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--glass-border)', textAlign: 'left' }}>
              <th style={{ padding: '16px', color: 'var(--text-secondary)', fontWeight: 500 }}>Name</th>
              <th style={{ padding: '16px', color: 'var(--text-secondary)', fontWeight: 500 }}>Platform</th>
              <th style={{ padding: '16px', color: 'var(--text-secondary)', fontWeight: 500 }}>Date</th>
              <th style={{ padding: '16px', color: 'var(--text-secondary)', fontWeight: 500 }}>Stats</th>
              <th style={{ padding: '16px', color: 'var(--text-secondary)', fontWeight: 500, textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={5} style={{ padding: '32px', textAlign: 'center', color: 'var(--text-secondary)' }}>
                  Loading campaigns...
                </td>
              </tr>
            ) : campaigns.length === 0 ? (
              <tr>
                <td colSpan={5} style={{ padding: '32px', textAlign: 'center', color: 'var(--text-secondary)' }}>
                  No campaigns found.
                </td>
              </tr>
            ) : campaigns.map((c) => (
              <tr key={c.id} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                <td style={{ padding: '16px', fontWeight: 500 }}>{c.name}</td>
                <td style={{ padding: '16px' }}>
                  <span className={`badge ${c.platform}`}>{c.platform}</span>
                </td>
                <td style={{ padding: '16px', color: 'var(--text-secondary)' }}>
                  {new Date(c.createdAt).toLocaleDateString()}
                </td>
                <td style={{ padding: '16px' }}>
                  <span style={{ 
                    display: 'inline-block', 
                    padding: '4px 8px', 
                    borderRadius: '12px', 
                    fontSize: '12px',
                    background: c.status === 'running' ? 'rgba(0,168,132,0.1)' : 'rgba(255,255,255,0.05)',
                    color: c.status === 'running' ? '#00a884' : 'var(--text-secondary)'
                  }}>
                    {c.status}
                  </span>
                  <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginTop: '4px' }}>
                    {c._count?.logs || 0} messages queued
                  </div>
                </td>
                <td style={{ padding: '16px', textAlign: 'right', whiteSpace: 'nowrap' }}>
                  <Link to={`/campaigns/${c.id}/analytics`} className="btn" style={{ textDecoration: 'none', padding: '8px 16px', fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '6px', marginRight: '8px', background: 'var(--accent-primary)', color: 'var(--bg-primary)' }}>
                    <BarChart2 size={14} /> Analytics
                  </Link>
                  <button className="btn" style={{ padding: '8px 16px', fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '6px', marginRight: '8px', background: 'rgba(255,255,255,0.1)', color: 'white' }}>
                    <Copy size={14} /> Duplicate
                  </button>
                  <button className="btn" style={{ padding: '8px 16px', fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <Play size={14} /> Reactivate
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
