import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { Upload, Edit3, Users, Link as LinkIcon } from 'lucide-react';

interface ContactSelectorProps {
  onContactsChange: (contactsStr: string, segmentId: string) => void;
}

export default function ContactSelector({ onContactsChange }: ContactSelectorProps) {
  const [activeTab, setActiveTab] = useState<'manual' | 'upload' | 'segment' | 'url'>('manual');
  
  // Manual State
  const [manualContacts, setManualContacts] = useState('');
  
  // Upload State
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState('');

  // URL State
  const [syncUrl, setSyncUrl] = useState('');
  const [urlStatus, setUrlStatus] = useState('');

  // Segment State
  const [segments, setSegments] = useState<any[]>([]);
  const [selectedSegmentId, setSelectedSegmentId] = useState('');

  // Fetch segments on mount
  useEffect(() => {
    fetch('http://localhost:3020/api/contacts/segments')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setSegments(data);
      })
      .catch(console.error);
  }, []);

  // Update parent whenever selection changes
  useEffect(() => {
    if (activeTab === 'manual') {
      onContactsChange(manualContacts, '');
    } else if (activeTab === 'upload') {
      // In upload mode, contacts are extracted and set as string, segmentId is empty
      // Handled in parse function
    } else if (activeTab === 'segment') {
      onContactsChange('', selectedSegmentId);
    }
  }, [activeTab, manualContacts, selectedSegmentId, onContactsChange]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setCsvFile(file);
    if (!file) return;

    setUploadStatus('Parsing...');
    Papa.parse(file, {
      header: false,
      complete: (results) => {
        let extracted: string[] = [];
        results.data.forEach((row: any) => {
          if (row && row[0]) {
            const cleaned = String(row[0]).trim();
            if (cleaned.length > 5) extracted.push(cleaned);
          }
        });
        
        if (extracted.length === 0) {
          setUploadStatus('No valid numbers found.');
          onContactsChange('', '');
        } else {
          setUploadStatus(`Extracted ${extracted.length} numbers.`);
          onContactsChange(extracted.join(','), '');
        }
      },
      error: () => {
        setUploadStatus('Failed to parse file.');
      }
    });
  };

  const handleUrlSync = async () => {
    if (!syncUrl) return;
    setUrlStatus('Fetching...');
    
    // Auto-convert Google Sheet URL to CSV export format
    let finalUrl = syncUrl;
    if (finalUrl.includes('docs.google.com/spreadsheets') && finalUrl.includes('/edit')) {
      finalUrl = finalUrl.replace(/\/edit.*$/, '/export?format=csv');
    }

    try {
      const res = await fetch('http://localhost:3020/api/contacts/fetch-url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: finalUrl })
      });
      if (!res.ok) throw new Error('Fetch failed');
      const csvText = await res.text();
      
      Papa.parse(csvText, {
        header: false,
        complete: (results) => {
          let extracted: string[] = [];
          results.data.forEach((row: any) => {
            if (row && row[0]) {
              const cleaned = String(row[0]).trim();
              if (cleaned.length > 5) extracted.push(cleaned);
            }
          });
          if (extracted.length === 0) {
            setUrlStatus('No valid numbers found in URL.');
            onContactsChange('', '');
          } else {
            setUrlStatus(`Extracted ${extracted.length} contacts.`);
            onContactsChange(extracted.join(','), '');
          }
        },
        error: () => setUrlStatus('Failed to parse CSV from URL.')
      });
    } catch (error) {
      setUrlStatus('Error fetching URL. Check permissions or CORS.');
    }
  };

  return (
    <div className="glass-panel" style={{ padding: '16px' }}>
      
      {/* Tabs */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '8px' }}>
        <button 
          type="button"
          onClick={() => setActiveTab('manual')}
          style={{ background: 'transparent', border: 'none', color: activeTab === 'manual' ? 'var(--primary)' : 'var(--text-secondary)', fontWeight: activeTab === 'manual' ? 'bold' : 'normal', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
        >
          <Edit3 size={16} /> Manual Input
        </button>
        <button 
          type="button"
          onClick={() => setActiveTab('upload')}
          style={{ background: 'transparent', border: 'none', color: activeTab === 'upload' ? 'var(--primary)' : 'var(--text-secondary)', fontWeight: activeTab === 'upload' ? 'bold' : 'normal', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
        >
          <Upload size={16} /> Upload CSV
        </button>
        <button 
          type="button"
          onClick={() => setActiveTab('segment')}
          style={{ background: 'transparent', border: 'none', color: activeTab === 'segment' ? 'var(--primary)' : 'var(--text-secondary)', fontWeight: activeTab === 'segment' ? 'bold' : 'normal', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
        >
          <Users size={16} /> Select Segment
        </button>
        <button 
          type="button"
          onClick={() => setActiveTab('url')}
          style={{ background: 'transparent', border: 'none', color: activeTab === 'url' ? 'var(--primary)' : 'var(--text-secondary)', fontWeight: activeTab === 'url' ? 'bold' : 'normal', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
        >
          <LinkIcon size={16} /> Sync URL
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'manual' && (
        <div className="animate-fade-in">
          <textarea 
            value={manualContacts} 
            onChange={e => setManualContacts(e.target.value)} 
            className="form-control" 
            placeholder="+1234567890\n+0987654321" 
            style={{ height: '150px' }}
          />
          <small style={{ color: 'var(--text-tertiary)' }}>Enter comma or newline separated numbers with country codes.</small>
        </div>
      )}

      {activeTab === 'upload' && (
        <div className="animate-fade-in">
          <div style={{ border: '2px dashed var(--glass-border)', padding: '24px', borderRadius: '8px', textAlign: 'center' }}>
            <input 
              type="file" 
              accept=".csv"
              onChange={handleFileUpload}
              style={{ display: 'none' }}
              id="campaign-csv-upload"
            />
            <label htmlFor="campaign-csv-upload" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              <Upload size={32} color={csvFile ? "var(--primary)" : "var(--text-secondary)"} />
              <span>{csvFile ? csvFile.name : 'Click to select CSV file'}</span>
              <small style={{ color: 'var(--text-tertiary)' }}>Format: One phone number per row (Column A)</small>
            </label>
          </div>
          {uploadStatus && <div style={{ marginTop: '12px', fontSize: '0.9rem', color: 'var(--primary)' }}>{uploadStatus}</div>}
        </div>
      )}

      {activeTab === 'segment' && (
        <div className="animate-fade-in">
          {segments.length === 0 ? (
            <div style={{ padding: '20px', textAlign: 'center', color: 'var(--text-secondary)' }}>
              No segments found. Go to the Contacts page to create one.
            </div>
          ) : (
            <select 
              value={selectedSegmentId} 
              onChange={e => setSelectedSegmentId(e.target.value)} 
              className="form-control"
            >
              <option value="">-- Select a Segment --</option>
              {segments.map(s => (
                <option key={s.id} value={s.id}>
                  {s.name} ({s._count?.contacts || 0} contacts)
                </option>
              ))}
            </select>
          )}
        </div>
      )}

      {activeTab === 'url' && (
        <div className="animate-fade-in">
          <div className="form-group">
            <label>Google Sheet / CSV URL</label>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input 
                type="text" 
                value={syncUrl} 
                onChange={e => setSyncUrl(e.target.value)} 
                className="form-control" 
                placeholder="https://docs.google.com/spreadsheets/d/.../edit#gid=0" 
              />
              <button type="button" onClick={handleUrlSync} className="btn" style={{ whiteSpace: 'nowrap' }}>Sync</button>
            </div>
            <small style={{ color: 'var(--text-tertiary)', display: 'block', marginTop: '8px' }}>
              Ensure your Google Sheet is set to "Anyone with the link can view". First column must contain phone/email.
            </small>
            {urlStatus && <div style={{ marginTop: '12px', fontSize: '0.9rem', color: 'var(--primary)' }}>{urlStatus}</div>}
          </div>
        </div>
      )}
    </div>
  );
}
