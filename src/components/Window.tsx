import React, { useRef } from 'react';
import { motion, useDragControls } from 'framer-motion';
import { X, Minus, Square, Maximize2 } from 'lucide-react';
import { WindowInstance } from '../types';

interface WindowProps {
  instance: WindowInstance;
  isActive: boolean;
  onClose: (id: string) => void;
  onFocus: (id: string) => void;
  onMinimize: (id: string) => void;
  children: React.ReactNode;
}

export const Window: React.FC<WindowProps> = ({ 
  instance, 
  isActive, 
  onClose, 
  onFocus, 
  onMinimize,
  children 
}) => {
  const dragControls = useDragControls();
  
  return (
    <motion.div
      className={`window glass ${isActive ? 'active-window' : ''}`}
      style={{
        zIndex: instance.zIndex,
        display: instance.isMinimized ? 'none' : 'flex',
        width: instance.width,
        height: instance.height,
        left: instance.x,
        top: instance.y,
      }}
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.95, opacity: 0, transition: { duration: 0.2 } }}
      drag
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      onPointerDown={() => onFocus(instance.id)}
    >
      {/* Window Header / Titlebar */}
      <div 
        className="window-header flex items-center justify-between"
        onPointerDown={(e) => dragControls.start(e)}
      >
        <div className="flex items-center gap-3">
          {/* Simulated App Icon */}
          <div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          </div>
          <span className="text-[11px] font-bold tracking-tight text-white/80">{instance.title}</span>
        </div>

        <div className="window-controls">
          <button 
            className="control-btn control-min flex items-center justify-center group" 
            onClick={() => onMinimize(instance.id)}
          >
            <Minus size={8} className="opacity-0 group-hover:opacity-100 text-black/50 transition-opacity" />
          </button>
          <button className="control-btn control-max flex items-center justify-center group">
             <Square size={6} className="opacity-0 group-hover:opacity-100 text-black/50 transition-opacity" />
          </button>
          <button 
            className="control-btn control-close flex items-center justify-center group" 
            onClick={() => onClose(instance.id)}
          >
            <X size={8} className="opacity-0 group-hover:opacity-100 text-black/50 transition-opacity" />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="window-content custom-scrollbar">
        {/* Subtle noise or overlay for texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </motion.div>
  );
};
