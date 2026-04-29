import React, { useState, useRef, useEffect } from 'react';

interface HistoryItem {
  type: 'command' | 'output' | 'error';
  content: string;
}

export const TerminalApp: React.FC = () => {
  const [history, setHistory] = useState<HistoryItem[]>([
    { type: 'output', content: 'NeoLinux Kernel v6.5.0-generic' },
    { type: 'output', content: 'Welcome guest! Type "help" to see available commands.' }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    const newHistory: HistoryItem[] = [...history, { type: 'command', content: input }];

    switch (cmd) {
      case 'help':
        newHistory.push({ type: 'output', content: 'Available commands: help, clear, ls, whoami, date, echo [text], about' });
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'ls':
        newHistory.push({ type: 'output', content: 'Documents  Downloads  Pictures  Music  Videos  Projects' });
        break;
      case 'whoami':
        newHistory.push({ type: 'output', content: 'guest_user' });
        break;
      case 'date':
        newHistory.push({ type: 'output', content: new Date().toString() });
        break;
      case 'about':
        newHistory.push({ type: 'output', content: 'NeoLinux OS v2.0 - A premium web-based Linux simulation.' });
        break;
      default:
        if (cmd.startsWith('echo ')) {
          newHistory.push({ type: 'output', content: input.substring(5) });
        } else {
          newHistory.push({ type: 'error', content: `Command not found: ${cmd}` });
        }
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <div 
      className="terminal-container" 
      style={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        fontFamily: 'monospace', 
        fontSize: '14px',
        color: '#f8fafc'
      }}
      onClick={() => document.getElementById('terminal-input')?.focus()}
    >
      <div style={{ flex: 1, overflowY: 'auto', marginBottom: '8px' }}>
        {history.map((item, i) => (
          <div key={i} style={{ marginBottom: '4px', whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
            {item.type === 'command' && (
              <span className="text-green-400">guest@neolinux:~$ <span style={{ color: 'white' }}>{item.content}</span></span>
            )}
            {item.type === 'output' && <span className="text-gray-400">{item.content}</span>}
            {item.type === 'error' && <span style={{ color: '#ef4444' }}>{item.content}</span>}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <form onSubmit={handleCommand} style={{ display: 'flex', gap: '8px' }}>
        <span className="text-green-400" style={{ whiteSpace: 'nowrap' }}>guest@neolinux:~$</span>
        <input 
          id="terminal-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
          autoComplete="off"
          style={{ 
            background: 'transparent', 
            border: 'none', 
            outline: 'none', 
            color: 'white', 
            flex: 1,
            padding: 0,
            fontSize: '14px',
            fontFamily: 'inherit'
          }}
        />
      </form>
    </div>
  );
};
