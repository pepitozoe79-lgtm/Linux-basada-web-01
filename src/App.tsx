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
      <div className="text-sm font-mono leading-relaxed">
        <div className="text-blue-400 mb-1">NeoLinux Kernel v6.5.0-generic</div>
        <div className="text-gray-500 mb-4">Last login: {new Date().toDateString()}</div>
        <div className="flex gap-2">
          <span className="text-green-400">guest@neolinux:~$</span>
          <span className="text-white animate-pulse">ls -la</span>
        </div>
        <div className="text-gray-400 mt-2">
          drwxr-xr-x  2 guest guest  4096 Apr 28 2026 .<br/>
          drwxr-xr-x  3 root  root   4096 Apr 28 2026 ..<br/>
          -rw-r--r--  1 guest guest   220 Apr 28 2026 .bash_logout<br/>
          -rw-r--r--  1 guest guest  3771 Apr 28 2026 .bashrc
        </div>
        <div className="flex gap-2 mt-4">
          <span className="text-green-400">guest@neolinux:~$</span>
          <span className="w-2 h-5 bg-white/50 animate-pulse" />
        </div>
      </div>
    ), 
    width: 650, height: 420 
  },
  files: { id: 'files', name: 'Files', icon: 'Folder', component: () => (
    <div className="grid grid-cols-3 gap-6 p-2">
      {['Documents', 'Downloads', 'Pictures', 'Music', 'Videos', 'Projects'].map(folder => (
        <div key={folder} className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
          <Icons.Folder className="text-blue-400 group-hover:text-blue-300 transition-colors" size={40} />
          <span className="text-xs font-medium">{folder}</span>
        </div>
      ))}
    </div>
  ), width: 550, height: 380 },
  settings: { id: 'settings', name: 'Settings', icon: 'Settings', component: () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
        <div className="flex items-center gap-3">
          <Icons.Moon size={18} className="text-purple-400" />
          <span>Dark Mode</span>
        </div>
        <div className="w-10 h-5 bg-blue-500 rounded-full relative"><div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full" /></div>
      </div>
      <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
        <div className="flex items-center gap-3">
          <Icons.Wifi size={18} className="text-green-400" />
          <span>Wi-Fi</span>
        </div>
        <span className="text-xs text-gray-400">Connected: NeoNet_5G</span>
      </div>
      <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
        <div className="flex items-center gap-3">
          <Icons.Bluetooth size={18} className="text-blue-400" />
          <span>Bluetooth</span>
        </div>
        <span className="text-xs text-gray-400">On</span>
      </div>
    </div>
  ), width: 450, height: 500 },
  browser: { id: 'browser', name: 'Browser', icon: 'Globe', component: () => (
    <div className="w-full h-full flex flex-col bg-[#1a1a1a] rounded-lg overflow-hidden border border-white/5">
      <div className="h-10 bg-[#2a2a2a] flex items-center px-4 gap-4 border-bottom border-white/5">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <div className="flex-1 bg-black/30 rounded-md h-6 px-3 flex items-center text-[10px] text-gray-400">
          https://neolinux-os.dev
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <Icons.Globe size={48} className="text-blue-500/20 mb-4" />
        <h2 className="text-xl font-bold mb-2">Welcome to NeoSearch</h2>
        <p className="text-sm text-gray-500 max-w-xs">The world's fastest browser for the world's most experimental OS.</p>
      </div>
    </div>
  ), width: 800, height: 600 },
  monitor: { id: 'monitor', name: 'System', icon: 'Cpu', component: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between text-xs">
          <span>CPU Usage</span>
          <span className="text-blue-400">12%</span>
        </div>
        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
          <div className="w-[12%] h-full bg-blue-500" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-xs">
          <span>Memory</span>
          <span className="text-purple-400">4.2GB / 16GB</span>
        </div>
        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
          <div className="w-[26%] h-full bg-purple-500" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
          <div className="text-[10px] text-gray-500 uppercase">Uptime</div>
          <div className="text-sm font-bold">2d 14h 22m</div>
        </div>
        <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
          <div className="text-[10px] text-gray-500 uppercase">Tasks</div>
          <div className="text-sm font-bold">142 Running</div>
        </div>
      </div>
    </div>
  ), width: 400, height: 350 },
  calculator: { id: 'calculator', name: 'Calc', icon: 'Calculator', component: () => (
    <div className="grid grid-cols-4 gap-2">
      <div className="col-span-4 bg-black/30 p-4 rounded-lg text-right text-2xl font-light mb-2 italic">1,234.56</div>
      {['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+'].map(key => (
        <button key={key} className={`p-3 rounded-lg text-sm font-medium transition-colors ${['/','*','-','+','='].includes(key) ? 'bg-blue-500/20 text-blue-400' : 'bg-white/5 hover:bg-white/10'}`}>
          {key}
        </button>
      ))}
    </div>
  ), width: 300, height: 420 },
  translate: { id: 'translate', name: 'Translate', icon: 'Languages', component: () => (
    <div className="space-y-4">
      <div className="p-3 rounded-lg bg-white/5 border border-white/5">
        <div className="text-[10px] text-gray-500 mb-1">English</div>
        <div className="text-sm">Hello, how can I help you today?</div>
      </div>
      <div className="flex justify-center"><Icons.ArrowDown size={16} className="text-blue-500" /></div>
      <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
        <div className="text-[10px] text-blue-400 mb-1">Spanish</div>
        <div className="text-sm">Hola, ¿cómo puedo ayudarte hoy?</div>
      </div>
    </div>
  ), width: 350, height: 300 },
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

    // Check if app is already open
    const existing = windows.find(w => w.appKey === appKey);
    if (existing) {
      focusWindow(existing.id);
      return;
    }

    const id = Math.random().toString(36).substr(2, 9);
    const newWindow: WindowInstance = {
      id,
      appKey,
      title: config.name,
      x: 100 + (windows.length * 30),
      y: 100 + (windows.length * 30),
      width: config.width || 400,
      height: config.height || 300,
      zIndex: nextZIndex,
      isMinimized: false,
      isMaximized: false
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
      {/* App Launcher */}
      <AppLauncher 
        apps={APPS} 
        isOpen={launcherOpen} 
        onClose={() => setLauncherOpen(false)} 
        onLaunch={launchApp} 
      />

      {/* Windows Layer */}
      <AnimatePresence>
        {windows.map(window => (
          <Window
            key={window.id}
            instance={window}
            isActive={activeWindowId === window.id}
            onFocus={focusWindow}
            onClose={closeWindow}
            onMinimize={minimizeWindow}
          >
            {APP_REGISTRY[window.appKey]?.component as any}
          </Window>
        ))}
      </AnimatePresence>

      {/* Taskbar */}
      <motion.div 
        className="taskbar"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
      >
        <div className="flex items-center gap-2 h-full">
          <button 
            className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all ${launcherOpen ? 'bg-white/20 text-white shadow-lg' : 'hover:bg-white/10 text-white/70'}`}
            onClick={() => setLauncherOpen(!launcherOpen)}
          >
            <Icons.LayoutGrid size={22} />
          </button>
          
          <div className="w-[1px] h-6 bg-white/10 mx-1" />

          {/* Running Apps */}
          <div className="flex items-center gap-2">
            {windows.map(w => {
              const app = APP_REGISTRY[w.appKey];
              const Icon = (Icons as any)[app.icon] || Icons.HelpCircle;
              const isActive = activeWindowId === w.id;
              return (
                <motion.div 
                  layout
                  key={w.id}
                  className={`relative group px-3 h-10 flex items-center gap-2 rounded-xl cursor-pointer transition-all ${isActive ? 'bg-white/15 border border-white/10' : 'hover:bg-white/10 opacity-70 hover:opacity-100'}`}
                  onClick={() => focusWindow(w.id)}
                >
                  <Icon size={18} className={isActive ? 'text-blue-400' : 'text-white'} />
                  <span className={`text-xs font-medium max-w-[100px] truncate ${isActive ? 'text-white' : 'text-gray-400'}`}>{app.name}</span>
                  {isActive && (
                    <motion.div 
                      layoutId="active-indicator"
                      className="absolute -bottom-[20px] left-1/2 -translate-x-1/2 w-4 h-[2px] bg-blue-500 rounded-full" 
                    />
                  )}
                  {w.isMinimized && (
                    <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-yellow-500 rounded-full border border-black" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
        
        <div className="flex-1 min-w-[20px]" />
        
        <div className="flex items-center gap-4 pl-4 border-l border-white/10 ml-2">
           <div className="flex items-center gap-3 text-gray-400">
             <Icons.Wifi size={14} className="hover:text-green-400 cursor-pointer transition-colors" />
             <Icons.Volume2 size={14} className="hover:text-blue-400 cursor-pointer transition-colors" />
             <Icons.Battery size={14} className="hover:text-yellow-400 cursor-pointer transition-colors" />
           </div>
           <div className="text-right">
             <div className="text-[11px] font-bold text-white tracking-tight">
               {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
             </div>
             <div className="text-[9px] opacity-40 font-medium uppercase tracking-wider">
               {time.toLocaleDateString([], { month: 'short', day: 'numeric' })}
             </div>
           </div>
        </div>
      </motion.div>
    </div>
  );
};

export default App;
