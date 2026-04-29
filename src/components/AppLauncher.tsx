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

  const filteredApps = apps.filter(app => 
    app.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            className="fixed inset-0 z-[9990] bg-black/10 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-[80px] left-1/2 -translate-x-1/2 w-[480px] h-[600px] glass z-[9991] rounded-[28px] p-6 flex flex-col overflow-hidden"
          >
            {/* Header / Search */}
            <div className="relative mb-8">
              <Icons.Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search apps, files, or settings..." 
                className="w-full bg-white/5 border border-white/5 rounded-2xl pl-11 pr-4 py-3 text-sm focus:bg-white/10 transition-all duration-300"
                autoFocus
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            
            {/* Pinned Section Header */}
            <div className="flex items-center justify-between px-2 mb-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500">Pinned Apps</span>
              <button className="text-[10px] bg-white/5 px-2 py-1 rounded-md hover:bg-white/10 transition-colors">All Apps</button>
            </div>

            {/* Apps Grid */}
            <div className="flex-1 overflow-y-auto grid grid-cols-4 gap-y-8 gap-x-4 content-start custom-scrollbar">
              {filteredApps.map(app => {
                const Icon = (Icons as any)[app.icon] || Icons.HelpCircle;
                return (
                  <motion.div 
                    key={app.id}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.92 }}
                    className="flex flex-col items-center gap-2 p-1 group cursor-pointer"
                    onClick={() => {
                      onLaunch(app.id);
                      onClose();
                    }}
                  >
                    <div className="w-16 h-16 rounded-[20px] bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center relative overflow-hidden group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-500">
                       {/* Subtle inner glow */}
                       <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/20 to-purple-600/20 transition-opacity duration-500" />
                       <Icon size={28} className="text-white group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <span className="text-[11px] text-center text-gray-400 group-hover:text-white transition-colors font-medium">{app.name}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Footer / Profile */}
            <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3 p-2 pr-4 rounded-2xl hover:bg-white/5 cursor-pointer transition-colors group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 p-[2px]">
                   <div className="w-full h-full rounded-full bg-[#111] flex items-center justify-center overflow-hidden">
                      <Icons.User size={20} className="text-white/80" />
                   </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white leading-none">Admin User</span>
                  <span className="text-[10px] text-gray-500">Online</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button title="Settings" className="p-3 rounded-xl hover:bg-white/10 text-gray-400 hover:text-white transition-all">
                  <Icons.Settings size={18} />
                </button>
                <button title="Power" className="p-3 rounded-xl hover:bg-red-500/10 text-gray-400 hover:text-red-400 transition-all">
                  <Icons.Power size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
