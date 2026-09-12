import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Space {
  id: string;
  name: string;
  icon?: string;
}

interface SpaceContextType {
  spaces: Space[];
  activeSpace: Space | null;
  createSpace: (name: string) => void;
  setActiveSpace: (space: Space | null) => void;
  deleteSpace: (id: string) => void;
  updateSpace: (id: string, updates: Partial<Space>) => void;
}

const SpaceContext = createContext<SpaceContextType | undefined>(undefined);

export function SpaceProvider({ children }: { children: React.ReactNode }) {
  const [spaces, setSpaces] = useState<Space[]>(() => {
    const saved = localStorage.getItem('composer_spaces');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [activeSpace, setActiveSpace] = useState<Space | null>(() => {
    const saved = localStorage.getItem('composer_active_space');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    localStorage.setItem('composer_spaces', JSON.stringify(spaces));
  }, [spaces]);

  useEffect(() => {
    if (activeSpace) {
      localStorage.setItem('composer_active_space', JSON.stringify(activeSpace));
    } else {
      localStorage.removeItem('composer_active_space');
    }
  }, [activeSpace]);

  const createSpace = (name: string) => {
    const icons = ['Building2', 'Briefcase', 'Globe', 'Rocket', 'Zap', 'Crown', 'Diamond', 'Target', 'Compass', 'Anchor', 'Box', 'Coffee', 'Music', 'Umbrella', 'Map'];
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];
    const newSpace = { id: Date.now().toString(), name, icon: randomIcon };
    setSpaces([...spaces, newSpace]);
    if (!activeSpace) {
      setActiveSpace(newSpace);
    }
  };

  const deleteSpace = (id: string) => {
    setSpaces(spaces.filter(s => s.id !== id));
    if (activeSpace?.id === id) {
      setActiveSpace(null);
    }
  };

  const updateSpace = (id: string, updates: Partial<Space>) => {
    setSpaces(spaces.map(s => s.id === id ? { ...s, ...updates } : s));
    if (activeSpace?.id === id) {
      setActiveSpace({ ...activeSpace, ...updates });
    }
  };

  return (
    <SpaceContext.Provider value={{ spaces, activeSpace, createSpace, setActiveSpace, deleteSpace, updateSpace }}>
      {children}
    </SpaceContext.Provider>
  );
}

export function useSpace() {
  const context = useContext(SpaceContext);
  if (context === undefined) {
    throw new Error('useSpace must be used within a SpaceProvider');
  }
  return context;
}
