import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { Upload, Plus, Users, Trash2, Link as LinkIcon } from 'lucide-react';

export default function Contacts() {
  const [segments, setSegments] = useState<any[]>([]);
  const [newSegmentName, setNewSegmentName] = useState('');
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [activeTab, setActiveTab] = useState<'upload' | 'url'>('upload');
  const [syncUrl, setSyncUrl] = useState('');

  useEffect(() => {
    fetchSegments();
  }, []);

  const fetchSegments = async () => {
    try {
      const res = await fetch('http://localhost:3020/api/contacts/segments');
      const data = await res.json();
      setSegments(data);
    } catch (error) {
      console.error('Failed to fetch segments:', error);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSegmentName) return alert('Provide a name');
    if (activeTab === 'upload' && !csvFile) return alert('Provide a CSV file');
    if (activeTab === 'url' && !syncUrl) return alert('Provide a URL');

    setIsUploading(true);
    
    const papaConfig: any = {
      header: true,
      skipEmptyLines: true,
      complete: async (results) => {
        try {
          let contacts: any[] = [];
          
          results.data.forEach((row: any) => {
            // Check for various possible header names (case-insensitive)
            const getVal = (keys: string[]) => {
              for (const k of keys) {
                const foundKey = Object.keys(row).find(r => r.toLowerCase().trim() === k.toLowerCase());
                if (foundKey && row[foundKey]) return String(row[foundKey]).trim();
              }
              return null;
            };

            const phone = getVal(['phone', 'number', 'mobile', 'whatsapp']);
            const email = getVal(['email', 'mail']);
            const lineId = getVal(['lineid', 'line id', 'line_id', 'line']);
            const firstName = getVal(['firstname', 'first name', 'name', 'first_name']);
            const lastName = getVal(['lastname', 'last name', 'last_name']);

            if (phone || email || lineId) {
              contacts.push({ phone, email, lineId, firstName, lastName });
            }
          });

          // Fallback if no valid headers found but data exists (assume single column list of phones, emails, or lineIds)
          if (contacts.length === 0 && results.data.length > 0) {
            results.data.forEach((row: any) => {
              const firstVal = Object.values(row)[0];
              if (firstVal && typeof firstVal === 'string') {
                const val = firstVal.trim();
                if (val.includes('@')) {
                  contacts.push({ email: val, phone: null, lineId: null, firstName: null, lastName: null });
                } else if (val.startsWith('U') && val.length > 20) {
                  contacts.push({ lineId: val, phone: null, email: null, firstName: null, lastName: null });
                } else if (val.length > 5) {
                  contacts.push({ phone: val, email: null, lineId: null, firstName: null, lastName: null });
                }
              }
            });
          }

          if (contacts.length === 0) {
            setIsUploading(false);
            return alert('No valid phone numbers found in CSV');
          }

          const res = await fetch('http://localhost:3020/api/contacts/segments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: newSegmentName, contacts })
          });

          if (res.ok) {
            setNewSegmentName('');
            setCsvFile(null);
            setSyncUrl('');
            fetchSegments();
            alert(`Segment created with ${contacts.length} contacts!`);
          } else {
            const err = await res.json();
            alert('Error: ' + err.error);
          }
        } catch (error) {
          console.error(error);
          alert('Failed to upload contacts');
        } finally {
          setIsUploading(false);
        }
      },
      error: () => {
        setIsUploading(false);
        alert('Failed to parse CSV file');
      }
    };

    if (activeTab === 'upload') {
      Papa.parse(csvFile, papaConfig);
    } else {
      // Auto-convert Google Sheet URL to CSV export format
      let finalUrl = syncUrl;
      if (finalUrl.includes('docs.google.com/spreadsheets') && finalUrl.includes('/edit')) {
        finalUrl = finalUrl.replace(/\/edit.*$/, '/export?format=csv');
      }
      
      try {
        const fetchRes = await fetch('http://localhost:3020/api/contacts/fetch-url', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url: finalUrl })
        });
        if (!fetchRes.ok) throw new Error('Fetch failed');
        const csvText = await fetchRes.text();
        Papa.parse(csvText, papaConfig);
      } catch (error) {
        setIsUploading(false);
        alert('Error fetching URL. Check permissions or CORS.');
      }
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this segment?')) return;
    try {
      await fetch(`http://localhost:3020/api/contacts/segments/${id}`, { method: 'DELETE' });
      fetchSegments();
    } catch (error) {
      alert('Failed to delete segment');
    }
  };

  return (
    <div className="animate-fade-in" style={{ maxWidth: '1200px' }}>
      <h1 style={{ marginBottom: '8px' }}>Global Contacts Manager</h1>
      <p className="subtitle" style={{ marginBottom: '32px' }}>Create target audience segments by uploading CSV lists. These segments can be reused across all campaigns.</p>
      
      <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
        
        {/* Create Segment Form */}
        <div style={{ flex: '1', minWidth: '350px' }}>
          <div className="glass-panel">
            <h2 style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Plus size={20} /> Create New Segment
            </h2>
            
            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '8px' }}>
              <button 
                type="button"
                onClick={() => setActiveTab('upload')}
                style={{ background: 'transparent', border: 'none', color: activeTab === 'upload' ? 'var(--primary)' : 'var(--text-secondary)', fontWeight: activeTab === 'upload' ? 'bold' : 'normal', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                <Upload size={16} /> File Upload
              </button>
              <button 
                type="button"
                onClick={() => setActiveTab('url')}
                style={{ background: 'transparent', border: 'none', color: activeTab === 'url' ? 'var(--primary)' : 'var(--text-secondary)', fontWeight: activeTab === 'url' ? 'bold' : 'normal', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                <LinkIcon size={16} /> Sync URL
              </button>
            </div>

            <form onSubmit={handleUpload}>
              <div className="form-group">
                <label>Segment Name</label>
                <input 
                  type="text" 
                  value={newSegmentName} 
                  onChange={e => setNewSegmentName(e.target.value)} 
                  className="form-control" 
                  placeholder="e.g. VIP Customers" 
                  required 
                />
              </div>
              
              {activeTab === 'upload' && (
                <div className="form-group animate-fade-in">
                  <label>Upload CSV</label>
                  <div style={{ border: '2px dashed var(--glass-border)', padding: '24px', borderRadius: '8px', textAlign: 'center' }}>
                    <input 
                      type="file" 
                      accept=".csv"
                      onChange={e => setCsvFile(e.target.files ? e.target.files[0] : null)}
                      style={{ display: 'none' }}
                      id="csv-upload"
                    />
                    <label htmlFor="csv-upload" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                      <Upload size={32} color="var(--primary)" />
                      <span>{csvFile ? csvFile.name : 'Click to select CSV file'}</span>
                      <small style={{ color: 'var(--text-secondary)' }}>Accepts CSV files. Best with headers: <b>phone, email, lineId, firstName, lastName</b>.</small>
                    </label>
                  </div>
                </div>
              )}

              {activeTab === 'url' && (
                <div className="form-group animate-fade-in">
                  <label>Google Sheet / CSV URL</label>
                  <input 
                    type="text" 
                    value={syncUrl} 
                    onChange={e => setSyncUrl(e.target.value)} 
                    className="form-control" 
                    placeholder="https://docs.google.com/spreadsheets/d/.../edit#gid=0" 
                  />
                  <small style={{ color: 'var(--text-tertiary)', display: 'block', marginTop: '8px' }}>
                    Ensure your Google Sheet is set to "Anyone with the link can view".
                  </small>
                </div>
              )}

              <button 
                type="submit" 
                className="btn btn-primary" 
                disabled={isUploading || !newSegmentName || (activeTab === 'upload' ? !csvFile : !syncUrl)}
                style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '16px' }}
              >
                {isUploading ? 'Fetching & Processing...' : 'Create Segment'}
              </button>
            </form>
          </div>
        </div>

        {/* Existing Segments List */}
        <div style={{ flex: '2', minWidth: '500px' }}>
          <div className="glass-panel" style={{ minHeight: '400px' }}>
            <h2 style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Users size={20} /> Saved Segments
            </h2>
            
            {segments.length === 0 ? (
              <p style={{ color: 'var(--text-secondary)', textAlign: 'center', padding: '40px 0' }}>No segments found. Upload a CSV to get started.</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {segments.map(segment => (
                  <div key={segment.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', background: 'var(--bg-tertiary)', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
                    <div>
                      <h3 style={{ margin: '0 0 4px 0', fontSize: '1.1rem' }}>{segment.name}</h3>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        {segment._count?.contacts || 0} Contacts
                      </span>
                    </div>
                    <button 
                      onClick={() => handleDelete(segment.id)}
                      className="btn" 
                      style={{ background: 'transparent', padding: '8px', color: 'var(--text-secondary)' }}
                      title="Delete Segment"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
