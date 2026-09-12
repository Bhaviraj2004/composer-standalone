import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BarChart2, Activity, Target, MessageSquare, PhoneCall, CheckCircle2, XCircle, TrendingUp } from 'lucide-react';

export default function CampaignAnalytics() {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3020/api/campaigns/${id}/analytics`)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
        <div style={{ color: 'var(--text-secondary)' }}>Loading analytics...</div>
      </div>
    );
  }

  if (!data || data.error) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
        <div style={{ color: 'var(--danger)' }}>Failed to load campaign analytics.</div>
      </div>
    );
  }

  const isVoice = data.platform === 'voice';

  // Get metrics directly from API response
  const metrics = data.metrics || [];
  const mainMetrics = metrics.slice(0, 3);
  const secondaryMetrics = metrics.slice(3, 6);

  // Calculate percentages for visual progress bar
  const total = mainMetrics[0]?.value || 1;
  const success = mainMetrics[1]?.value || 0;
  const failed = mainMetrics[2]?.value || 0;
  
  const successPct = Math.round((success / Math.max(total, 1)) * 100);
  const failedPct = Math.round((failed / Math.max(total, 1)) * 100);
  const pendingPct = 100 - successPct - failedPct;

  const getIcon = (label: string) => {
    if (label.includes("Sent") || label.includes("Made")) return <Activity size={24} color="#3b82f6" />;
    if (label.includes("Delivered") || label.includes("Answered")) return <CheckCircle2 size={24} color="#10b981" />;
    if (label.includes("Failed")) return <XCircle size={24} color="#ef4444" />;
    if (label.includes("Replies")) return <MessageSquare size={24} color="#8b5cf6" />;
    if (label.includes("Responses")) return <PhoneCall size={24} color="#f59e0b" />;
    if (label.includes("Conversions")) return <Target size={24} color="#ec4899" />;
    return <TrendingUp size={24} />;
  };

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '60px' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
        <Link to="/campaigns/history" style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <ArrowLeft size={20} />
        </Link>
        <h1 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '12px' }}>
          Campaign Analytics
          <span className={`badge ${data.platform}`} style={{ fontSize: '14px', textTransform: 'capitalize' }}>{data.platform}</span>
        </h1>
      </div>
      <p className="subtitle" style={{ marginLeft: '36px', marginBottom: '40px' }}>
        Detailed performance metrics and funnel analysis.
      </p>

      {/* Main Delivery Funnel Bar */}
      <div className="glass-panel" style={{ marginBottom: '32px', padding: '32px' }}>
        <h3 style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <BarChart2 size={20} color="var(--text-secondary)" /> 
          {isVoice ? 'Call Delivery Funnel' : 'Message Delivery Funnel'}
        </h3>
        
        <div style={{ height: '32px', width: '100%', display: 'flex', borderRadius: '16px', overflow: 'hidden', background: 'rgba(255,255,255,0.05)', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)' }}>
          <div style={{ width: `${successPct}%`, background: 'linear-gradient(90deg, #10b981, #34d399)', transition: 'width 1s ease-out' }} title={`Success: ${successPct}%`} />
          <div style={{ width: `${failedPct}%`, background: 'linear-gradient(90deg, #ef4444, #f87171)', transition: 'width 1s ease-out' }} title={`Failed: ${failedPct}%`} />
          <div style={{ width: `${pendingPct}%`, background: 'rgba(255,255,255,0.1)', transition: 'width 1s ease-out' }} title={`Pending: ${pendingPct}%`} />
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px', fontSize: '14px', color: 'var(--text-secondary)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }}></div>
            {isVoice ? 'Answered' : 'Delivered'} ({successPct}%)
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }}></div>
            Failed ({failedPct}%)
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }}></div>
            Pending ({pendingPct}%)
          </div>
        </div>
      </div>

      {/* Main Metrics Grid */}
      <h3 style={{ marginBottom: '16px', color: 'var(--text-secondary)' }}>Primary Metrics</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '40px' }}>
        {mainMetrics.map((metric: any, i: number) => (
          <div key={i} className="glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '20px', transition: 'transform 0.2s', cursor: 'default' }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-4px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid var(--glass-border)' }}>
              {getIcon(metric.label)}
            </div>
            <div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '4px' }}>{metric.label}</div>
              <div style={{ fontSize: '36px', fontWeight: 700, letterSpacing: '-1px' }}>{metric.value.toLocaleString()}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Secondary Metrics Grid */}
      <h3 style={{ marginBottom: '16px', color: 'var(--text-secondary)' }}>Engagement & Conversions</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        {secondaryMetrics.map((metric: any, i: number) => (
          <div key={i} className="glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '20px', background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '12px', background: 'rgba(0,0,0,0.2)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {getIcon(metric.label)}
            </div>
            <div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '4px' }}>{metric.label}</div>
              <div style={{ fontSize: '28px', fontWeight: 600 }}>{metric.value.toLocaleString()}</div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
