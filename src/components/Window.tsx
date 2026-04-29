import React, { useRef } from 'react';
import { motion, useDragControls } from 'framer-motion';
import { X, Minus, Square } from 'lucide-react';
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
  instance, isActive, onClose, onFocus, onMinimize, children 
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
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      drag
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      onPointerDown={() => onFocus(instance.id)}
    >
      <div className="window-header" onPointerDown={(e) => dragControls.start(e)}>
        <div className="flex items-center gap-2">
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#6366f1' }} />
          <span className="text-xs font-bold" style={{ color: 'white' }}>{instance.title}</span>
        </div>
        <div className="flex gap-2" style={{ display: 'flex', gap: '8px' }}>
          <button className="control-btn control-min" onClick={() => onMinimize(instance.id)}>
            <Minus size={8} color="black" strokeWidth={3} />
          </button>
          <button className="control-btn control-max">
            <Square size={6} color="black" strokeWidth={3} />
          </button>
          <button className="control-btn control-close" onClick={() => onClose(instance.id)}>
            <X size={8} color="black" strokeWidth={3} />
          </button>
        </div>
      </div>
      <div className="window-content">
        {children}
      </div>
    </motion.div>
  );
};
