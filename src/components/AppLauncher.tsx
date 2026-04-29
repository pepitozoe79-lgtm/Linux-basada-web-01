import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppConfig } from '../types';
import * as Icons from 'lucide-react';

interface AppLauncherProps {
  apps: AppConfig[];
  onLaunch: (appKey: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const AppLauncher: React.FC<AppLauncherProps> = ({ apps, onLaunch, isOpen, onClose }) => {
  const [search, setSearch] = useState('');
  const filteredApps = apps.filter(app => app.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            className="inset-0" 
            style={{ background: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(4px)', zIndex: 9990 }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.95 }}
            className="start-menu glass"
          >
            <div className="relative" style={{ marginBottom: '24px' }}>
              <input 
                type="text" 
                placeholder="Search apps..." 
                className="search-input"
                autoFocus
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            
            <div className="app-grid custom-scrollbar">
              {filteredApps.map(app => {
                const Icon = (Icons as any)[app.icon] || Icons.HelpCircle;
                return (
                  <div key={app.id} className="flex flex-col items-center gap-2 app-item cursor-pointer" onClick={() => { onLaunch(app.id); onClose(); }}>
                    <div className="app-icon">
                       <Icon size={28} style={{ color: 'white' }} />
                    </div>
                    <span className="text-xs text-gray-400 font-bold" style={{ textAlign: 'center' }}>{app.name}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between" style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <div className="flex items-center gap-2">
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(to bottom right, #6366f1, #a855f7)' }} />
                <span className="text-xs font-bold">Admin User</span>
              </div>
              <div className="flex gap-2">
                <Icons.Settings size={18} className="text-gray-400" />
                <Icons.Power size={18} className="text-gray-400" />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
