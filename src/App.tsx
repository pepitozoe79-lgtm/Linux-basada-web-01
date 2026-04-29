import React, { useState, useEffect } from 'react';
import { Window } from './components/Window';
import { AppLauncher } from './components/AppLauncher';
import { WindowInstance, AppConfig } from './types';
import * as Icons from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// App Registry
const APP_REGISTRY: Record<string, AppConfig> = {
  terminal: { 
    id: 'terminal', name: 'Terminal', icon: 'Terminal', 
    component: () => (
      <div className="text-sm font-mono" style={{ lineHeight: '1.6' }}>
        <div className="text-blue-400">NeoLinux Kernel v6.5.0-generic</div>
        <div className="text-gray-400" style={{ marginBottom: '16px' }}>Last login: {new Date().toDateString()}</div>
        <div className="flex gap-2">
          <span className="text-green-400">guest@neolinux:~$</span>
          <span style={{ color: 'white' }}>ls -la</span>
        </div>
        <div className="text-gray-400" style={{ marginTop: '8px' }}>
          drwxr-xr-x  2 guest guest  4096 Apr 28 2026 .<br/>
          drwxr-xr-x  3 root  root   4096 Apr 28 2026 ..<br/>
          -rw-r--r--  1 guest guest   220 Apr 28 2026 .bashrc
        </div>
        <div className="flex gap-2" style={{ marginTop: '16px' }}>
          <span className="text-green-400">guest@neolinux:~$</span>
          <span className="animate-pulse" style={{ width: '8px', height: '20px', background: 'rgba(255,255,255,0.5)' }} />
        </div>
      </div>
    ), 
    width: 650, height: 420 
  },
  files: { id: 'files', name: 'Files', icon: 'Folder', component: () => (
    <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
      {['Documents', 'Downloads', 'Pictures', 'Music', 'Videos', 'Projects'].map(folder => (
        <div key={folder} className="flex flex-col items-center gap-2 p-2 rounded-xl cursor-pointer" style={{ background: 'rgba(255,255,255,0.02)' }}>
          <Icons.Folder className="text-blue-400" size={32} />
          <span className="text-xs font-bold">{folder}</span>
        </div>
      ))}
    </div>
  ), width: 500, height: 350 },
  settings: { id: 'settings', name: 'Settings', icon: 'Settings', component: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.05)' }}>
        <div className="flex items-center gap-2"><Icons.Moon size={16} /> Dark Mode</div>
        <div style={{ width: '32px', height: '16px', background: '#6366f1', borderRadius: '10px' }} />
      </div>
      <div className="flex items-center justify-between p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.05)' }}>
        <div className="flex items-center gap-2"><Icons.Wifi size={16} /> Wi-Fi</div>
        <span className="text-xs text-gray-400">Connected</span>
      </div>
    </div>
  ), width: 400, height: 450 },
  browser: { id: 'browser', name: 'Browser', icon: 'Globe', component: () => (
    <div className="w-full h-full flex flex-col overflow-hidden rounded-xl" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="flex items-center px-4 gap-4" style={{ height: '36px', background: 'rgba(255,255,255,0.05)' }}>
        <div className="flex gap-1">
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }} />
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b' }} />
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
        </div>
        <div className="flex-1 rounded-xl px-3 flex items-center text-xs" style={{ background: 'rgba(0,0,0,0.3)', height: '24px' }}>
          https://neolinux-os.dev
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <Icons.Globe size={48} style={{ opacity: 0.1, marginBottom: '16px' }} />
        <h2 className="font-bold">Welcome to NeoSearch</h2>
      </div>
    </div>
  ), width: 800, height: 600 },
};

const APPS = Object.values(APP_REGISTRY);

const App: React.FC = () => {
  const [windows, setWindows] = useState<WindowInstance[]>([]);
  const [activeWindowId, setActiveWindowId] = useState<string | null>(null);
  const [nextZIndex, setNextZIndex] = useState(10);
  const [launcherOpen, setLauncherOpen] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const launchApp = (appKey: string) => {
    const config = APP_REGISTRY[appKey];
    if (!config) return;
    const existing = windows.find(w => w.appKey === appKey);
    if (existing) { focusWindow(existing.id); return; }

    const id = Math.random().toString(36).substr(2, 9);
    const newWindow: WindowInstance = {
      id, appKey, title: config.name,
      x: 100 + (windows.length * 30),
      y: 100 + (windows.length * 30),
      width: config.width || 400,
      height: config.height || 300,
      zIndex: nextZIndex,
      isMinimized: false, isMaximized: false
    };
    setWindows([...windows, newWindow]);
    setActiveWindowId(id);
    setNextZIndex(nextZIndex + 1);
  };

  const focusWindow = (id: string) => {
    setActiveWindowId(id);
    setWindows(windows.map(w => w.id === id ? { ...w, zIndex: nextZIndex, isMinimized: false } : w));
    setNextZIndex(nextZIndex + 1);
  };

  const closeWindow = (id: string) => {
    setWindows(windows.filter(w => w.id !== id));
    if (activeWindowId === id) setActiveWindowId(null);
  };

  const minimizeWindow = (id: string) => {
    setWindows(windows.map(w => w.id === id ? { ...w, isMinimized: true } : w));
    setActiveWindowId(null);
  };

  return (
    <div className="desktop">
      <AppLauncher apps={APPS} isOpen={launcherOpen} onClose={() => setLauncherOpen(false)} onLaunch={launchApp} />

      <AnimatePresence>
        {windows.map(window => (
          <Window key={window.id} instance={window} isActive={activeWindowId === window.id} onFocus={focusWindow} onClose={closeWindow} onMinimize={minimizeWindow}>
            {APP_REGISTRY[window.appKey]?.component as any}
          </Window>
        ))}
      </AnimatePresence>

      <motion.div className="taskbar" initial={{ y: 100 }} animate={{ y: 0 }}>
        <button className={`taskbar-item ${launcherOpen ? 'active' : ''}`} onClick={() => setLauncherOpen(!launcherOpen)}>
          <Icons.LayoutGrid size={22} />
        </button>
        <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.1)', margin: '0 4px' }} />
        <div className="flex items-center gap-2">
          {windows.map(w => {
            const app = APP_REGISTRY[w.appKey];
            const Icon = (Icons as any)[app.icon] || Icons.HelpCircle;
            const isActive = activeWindowId === w.id;
            return (
              <div key={w.id} className={`taskbar-item ${isActive ? 'active' : ''}`} onClick={() => focusWindow(w.id)}>
                <Icon size={18} className={isActive ? 'text-blue-400' : ''} />
                <span className="text-xs font-bold">{app.name}</span>
              </div>
            );
          })}
        </div>
        <div className="flex-1" />
        <div className="flex items-center gap-4 px-4" style={{ borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="flex items-center gap-3 text-gray-400"><Icons.Wifi size={14} /><Icons.Volume2 size={14} /></div>
          <div style={{ textAlign: 'right' }}>
            <div className="text-xs font-bold">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
            <div className="text-xs text-gray-400" style={{ fontSize: '10px' }}>{time.toLocaleDateString([], { month: 'short', day: 'numeric' })}</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default App;
