import { useSpace } from '../context/SpaceContext';
import * as LucideIcons from 'lucide-react';
import { Plus, LayoutDashboard, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DeleteModal({ isOpen, onClose, onConfirm, spaceName }: { isOpen: boolean, onClose: () => void, onConfirm: () => void, spaceName: string }) {
  if (!isOpen) return null;
  
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 9999, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="glass-panel animate-fade-in" style={{ width: '100%', maxWidth: '400px', padding: '32px', textAlign: 'center' }}>
        <div style={{ background: 'rgba(239, 68, 68, 0.1)', color: 'var(--danger)', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 24px' }}>
          <Trash2 size={32} />
        </div>
        <h2 style={{ marginBottom: '16px' }}>Delete Workspace?</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
          Are you sure you want to delete <strong>{spaceName}</strong>? This action cannot be undone.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
          <button onClick={onClose} className="btn" style={{ background: 'transparent', border: '1px solid var(--glass-border)', color: 'var(--text-secondary)', flex: 1 }}>Cancel</button>
          <button onClick={onConfirm} className="btn" style={{ background: 'var(--danger)', border: 'none', flex: 1 }}>Yes, Delete</button>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const { spaces, activeSpace, setActiveSpace, deleteSpace, createSpace } = useSpace();
  const [isCreating, setIsCreating] = useState(false);
  const [newSpaceName, setNewSpaceName] = useState('');
  const [spaceToDelete, setSpaceToDelete] = useState<{id: string, name: string} | null>(null);

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSpaceName.trim()) {
      createSpace(newSpaceName.trim());
      setNewSpaceName('');
      setIsCreating(false);
    }
  };

  const handleDeleteClick = (e: React.MouseEvent, id: string, name: string) => {
    e.stopPropagation(); // Prevent card selection
    setSpaceToDelete({ id, name });
  };

  const confirmDelete = () => {
    if (spaceToDelete) {
      deleteSpace(spaceToDelete.id);
      setSpaceToDelete(null);
    }
  };

  const handleSelectSpace = (space: any) => {
    setActiveSpace(space);
    navigate('/');
  };

  return (
    <div className="animate-fade-in" style={{ padding: '64px 32px', maxWidth: '1200px', margin: '0 auto' }}>
      <DeleteModal 
        isOpen={!!spaceToDelete} 
        onClose={() => setSpaceToDelete(null)} 
        onConfirm={confirmDelete} 
        spaceName={spaceToDelete?.name || ''} 
      />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
        <div>
          <h1 style={{ fontSize: '3rem', marginBottom: '8px' }}>Your Workspaces</h1>
          <p className="subtitle">Select a workspace to manage campaigns, or create a new one.</p>
        </div>
        <button className="btn" onClick={() => setIsCreating(true)} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Plus size={20} /> New Workspace
        </button>
      </div>

      {isCreating && (
        <div className="glass-panel animate-fade-in" style={{ marginBottom: '32px' }}>
          <h3 style={{ marginBottom: '16px' }}>Create New Workspace</h3>
          <form onSubmit={handleCreate} style={{ display: 'flex', gap: '16px', alignItems: 'flex-end' }}>
            <div className="form-group" style={{ flex: 1, margin: 0 }}>
              <label>Workspace Name</label>
              <input 
                type="text" 
                className="form-control" 
                value={newSpaceName} 
                onChange={(e) => setNewSpaceName(e.target.value)} 
                placeholder="e.g. Acme Corp" 
                autoFocus 
              />
            </div>
            <button type="button" onClick={() => setIsCreating(false)} className="btn" style={{ background: 'transparent', border: '1px solid var(--glass-border)', color: 'var(--text-secondary)' }}>
              Cancel
            </button>
            <button type="submit" className="btn" disabled={!newSpaceName.trim()}>
              Create
            </button>
          </form>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
        {spaces.map(space => {
          const IconComponent = space.icon ? (LucideIcons as any)[space.icon] : LayoutDashboard;
          return (
          <div 
            key={space.id} 
            className="glass-panel" 
            style={{ 
              cursor: 'pointer', 
              border: activeSpace?.id === space.id ? '2px solid var(--primary)' : '1px solid var(--glass-border)',
              transition: 'all 0.2s ease',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
            onClick={() => handleSelectSpace(space)}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ background: 'var(--glass-bg)', padding: '12px', borderRadius: '12px' }}>
                  {IconComponent ? <IconComponent size={24} color="var(--primary)" /> : <LayoutDashboard size={24} color="var(--primary)" />}
                </div>
                <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{space.name}</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>
                {activeSpace?.id === space.id ? 'Currently Active' : 'Click to switch'}
              </p>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--glass-border)' }}>
              <button 
                onClick={(e) => handleDeleteClick(e, space.id, space.name)}
                style={{ background: 'transparent', border: 'none', color: 'var(--danger)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '6px', transition: 'background 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <Trash2 size={16} /> Delete
              </button>
            </div>
          </div>
        )})}

        {spaces.length === 0 && !isCreating && (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '64px', background: 'var(--glass-bg)', borderRadius: '16px', border: '1px dashed var(--glass-border)' }}>
            <LayoutDashboard size={48} color="var(--text-secondary)" style={{ marginBottom: '16px', opacity: 0.5 }} />
            <h3>No workspaces found</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>Create your first workspace to get started.</p>
            <button className="btn" onClick={() => setIsCreating(true)}>
              Create Workspace
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
