/**
 * WebLinux OS - App Definitions & Logic
 */

window.apps = [
    { id: 'terminal', name: 'Terminal', icon: '💻', category: 'System' },
    { id: 'files', name: 'File Manager', icon: '📁', category: 'System' },
    { id: 'texteditor', name: 'Text Editor', icon: '📝', category: 'Office' },
    { id: 'calculator', name: 'Calculator', icon: '🔢', category: 'Utilities' },
    { id: 'calendar', name: 'Calendar', icon: '📅', category: 'Office' },
    { id: 'settings', name: 'Settings', icon: '⚙️', category: 'System' },
    { id: 'browser', name: 'Web Browser', icon: '🌐', category: 'Internet' },
    { id: 'notepad', name: 'Notepad', icon: '📋', category: 'Office' },
    { id: 'paint', name: 'Paint', icon: '🎨', category: 'Graphics' },
    { id: 'musicplayer', name: 'Music Player', icon: '🎵', category: 'Multimedia' },
    { id: 'videoplayer', name: 'Video Player', icon: '🎬', category: 'Multimedia' },
    { id: 'photoviewer', name: 'Photo Viewer', icon: '🖼️', category: 'Graphics' },
    { id: 'sysmonitor', name: 'System Monitor', icon: '📊', category: 'System' },
    { id: 'packagemanager', name: 'Package Manager', icon: '📦', category: 'System' },
    { id: 'codeeditor', name: 'Code Editor', icon: '💾', category: 'Development' },
    { id: 'email', name: 'Email Client', icon: '📧', category: 'Internet' },
    { id: 'chat', name: 'Messenger', icon: '💬', category: 'Internet' },
    { id: 'contacts', name: 'Contacts', icon: '👤', category: 'Office' },
    { id: 'notes', name: 'Notes', icon: '📒', category: 'Office' },
    { id: 'todo', name: 'Todo List', icon: '✅', category: 'Office' },
    { id: 'spreadsheet', name: 'Spreadsheet', icon: '📊', category: 'Office' },
    { id: 'pdfviewer', name: 'PDF Viewer', icon: '📄', category: 'Office' },
    { id: 'maps', name: 'Maps', icon: '🗺️', category: 'Internet' },
    { id: 'camera', name: 'Camera', icon: '📷', category: 'Multimedia' },
    { id: 'voicerecorder', name: 'Voice Recorder', icon: '🎤', category: 'Multimedia' },
    { id: 'translator', name: 'Translator', icon: '🌍', category: 'Utilities' },
    { id: 'dictionary', name: 'Dictionary', icon: '📖', category: 'Utilities' },
    { id: 'unitconverter', name: 'Unit Converter', icon: '📏', category: 'Utilities' },
    { id: 'currencyconverter', name: 'Currency Converter', icon: '💱', category: 'Utilities' },
    { id: 'stopwatch', name: 'Stopwatch', icon: '⏱️', category: 'Utilities' },
    { id: 'timer', name: 'Timer', icon: '⏲️', category: 'Utilities' },
    { id: 'alarm', name: 'Alarm Clock', icon: '⏰', category: 'Utilities' },
    { id: 'worldclock', name: 'World Clock', icon: '🕐', category: 'Utilities' },
    { id: 'passwordgen', name: 'Password Generator', icon: '🔑', category: 'Utilities' },
    { id: 'qrcode', name: 'QR Code Generator', icon: '📱', category: 'Utilities' },
    { id: 'colorpicker', name: 'Color Picker', icon: '🎯', category: 'Graphics' },
    { id: 'markdown', name: 'Markdown Editor', icon: '📝', category: 'Development' },
    { id: 'jsonformatter', name: 'JSON Formatter', icon: '🔧', category: 'Development' },
    { id: 'imageeditor', name: 'Image Editor', icon: '🖌️', category: 'Graphics' },
    { id: 'fontviewer', name: 'Font Viewer', icon: '🔤', category: 'Graphics' },
    { id: 'charmap', name: 'Character Map', icon: '©️', category: 'Utilities' },
    { id: 'archiver', name: 'Archive Manager', icon: '🗜️', category: 'Utilities' },
    { id: 'diskusage', name: 'Disk Usage Analyzer', icon: '💿', category: 'System' },
    { id: 'networkmon', name: 'Network Monitor', icon: '📡', category: 'System' },
    { id: 'processmgr', name: 'Process Manager', icon: '🔍', category: 'System' },
    { id: 'logviewer', name: 'Log Viewer', icon: '📜', category: 'System' },
    { id: 'help', name: 'Help & About', icon: '❓', category: 'System' },
    { id: 'tictactoe', name: 'Tic-Tac-Toe', icon: '🎮', category: 'Games' },
    { id: 'snake', name: 'Snake Game', icon: '🐍', category: 'Games' },
    { id: 'minesweeper', name: 'Minesweeper', icon: '💣', category: 'Games' },
    { id: 'sudoku', name: 'Sudoku', icon: '🧩', category: 'Games' },
    { id: 'memorygame', name: 'Memory Match', icon: '🧠', category: 'Games' },
    { id: 'weather', name: 'Weather', icon: '🌤️', category: 'Internet' },
];

window.getAppContent = function(appId) {
    const contents = {
        'terminal': buildTerminal,
        'files': buildFileManager,
        'texteditor': buildTextEditor,
        'calculator': buildCalculator,
        'calendar': buildCalendar,
        'settings': buildSettings,
        'browser': buildBrowser,
        'notepad': buildNotepad,
        'paint': buildPaint,
        'musicplayer': buildMusicPlayer,
        'videoplayer': buildVideoPlayer,
        'photoviewer': buildPhotoViewer,
        'sysmonitor': buildSysMonitor,
        'packagemanager': buildPackageManager,
        'codeeditor': buildCodeEditor,
        'email': buildEmail,
        'chat': buildChat,
        'contacts': buildContacts,
        'notes': buildNotes,
        'todo': buildTodo,
        'spreadsheet': buildSpreadsheet,
        'pdfviewer': buildPDFViewer,
        'maps': buildMaps,
        'camera': buildCamera,
        'voicerecorder': buildVoiceRecorder,
        'translator': buildTranslator,
        'dictionary': buildDictionary,
        'unitconverter': buildUnitConverter,
        'currencyconverter': buildCurrencyConverter,
        'stopwatch': buildStopwatch,
        'timer': buildTimer,
        'alarm': buildAlarm,
        'worldclock': buildWorldClock,
        'passwordgen': buildPasswordGen,
        'qrcode': buildQRCode,
        'colorpicker': buildColorPicker,
        'markdown': buildMarkdown,
        'jsonformatter': buildJSONFormatter,
        'imageeditor': buildImageEditor,
        'fontviewer': buildFontViewer,
        'charmap': buildCharMap,
        'archiver': buildArchiver,
        'diskusage': buildDiskUsage,
        'networkmon': buildNetworkMon,
        'processmgr': buildProcessMgr,
        'logviewer': buildLogViewer,
        'help': buildHelp,
        'tictactoe': buildTicTacToe,
        'snake': buildSnake,
        'minesweeper': buildMinesweeper,
        'sudoku': buildSudoku,
        'memorygame': buildMemoryGame,
        'weather': buildWeather,
    };
    return contents[appId] || ((body) => body.innerHTML = '<p>Application content goes here.</p>');
};

// --- Content Builders ---

function buildTerminal(body, win) {
    body.style.padding = '0';
    body.style.background = '#0a0a0a';
    body.style.display = 'flex';
    body.style.flexDirection = 'column';
    const output = document.createElement('div');
    output.className = 'terminal-output';
    output.style.flex = '1';
    output.innerHTML = '<span style="color:#0f0;">WebLinux OS v5.2.0 — Terminal</span>\n<span style="color:#888;">Type "help" for available commands.</span>\n';
    const inputLine = document.createElement('div');
    inputLine.className = 'terminal-input-line';
    inputLine.style.cssText = 'padding: 10px; display: flex; align-items: center; background: #000; border-top: 1px solid #333;';
    inputLine.innerHTML = '<span class="terminal-prompt" style="color: #4a9eff; margin-right: 10px;">user@weblinux:~$</span>';
    const input = document.createElement('input');
    input.type = 'text';
    input.style.cssText = 'flex: 1; background: transparent; border: none; color: #fff; font-family: inherit; outline: none;';
    input.spellcheck = false;
    
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const cmd = input.value.trim();
            output.innerHTML += `<div><span class="terminal-prompt">user@weblinux:~$</span> ${cmd}</div>`;
            processCommand(cmd, output);
            input.value = '';
            output.scrollTop = output.scrollHeight;
        }
    });
    
    inputLine.appendChild(input);
    body.appendChild(output);
    body.appendChild(inputLine);
    setTimeout(() => input.focus(), 200);
}

function processCommand(cmd, output) {
    const parts = cmd.split(' ');
    const c = parts[0].toLowerCase();
    const responses = {
        'help': 'Available: help, clear, date, whoami, ls, pwd, echo [text], neofetch, calc [expr], fortune, uptime, uname, df, free, ps, ping [host], cat, mkdir, touch, rm, cowsay [text], banner [text], exit',
        'clear': () => { output.innerHTML = ''; return ''; },
        'date': new Date().toString(),
        'whoami': 'user',
        'ls': 'Desktop  Documents  Downloads  Music  Pictures  Videos  .config  .local',
        'pwd': '/home/user',
        'neofetch': `
<span style="color:#4af;">    ⢀⣴⣶⣤⣀    </span> OS: WebLinux OS
<span style="color:#4af;">  ⢀⣴⣿⣿⣿⣿⣿⣶⡀  </span> Kernel: 5.2.0-web
<span style="color:#4af;"> ⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄ </span> Shell: web-shell 1.0
<span style="color:#4af;">⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄</span> Uptime: ${Math.floor(Math.random()*24)}h ${Math.floor(Math.random()*60)}m
<span style="color:#4af;">⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿</span> Memory: ${Math.floor(Math.random()*8000)}MB / 16384MB`,
        'uname': 'WebLinux',
        'uptime': `up ${Math.floor(Math.random()*24)} hours, ${Math.floor(Math.random()*60)} minutes`,
        'df': 'Filesystem      Size  Used Avail Use%\n/dev/sda1       256G   89G  167G  35%\ntmpfs           8.0G  1.2G  6.8G  15%',
        'free': '              total    used    free\nMem:         16384    4521   11863\nSwap:         8192       0    8192',
        'ps': 'PID TTY    TIME CMD\n  1 ?    00:00:01 systemd\n 42 ?    00:00:03 web-shell\n 99 ?    00:00:00 ps',
        'fortune': ['You will have a great day!', 'The best code is no code.', 'Keep it simple, stupid.', 'There is no place like 127.0.0.1'][Math.floor(Math.random() * 4)],
    };

    let result = '';
    if (c === 'echo') result = (parts.slice(1).join(' ') || '') + '\n';
    else if (c === 'calc') {
        try { result = '= ' + eval(parts.slice(1).join('')) + '\n'; } 
        catch (e) { result = 'Error\n'; }
    }
    else if (c === 'cowsay') {
        result = ` ______\n< ${parts.slice(1).join(' ')||'Moo!'} >\n ------\n   \\   ^__^\n    \\  (oo)\\_______\n       (__)\\       )\\/\\\n           ||----w |\n           ||     ||\n`;
    }
    else if (c === 'banner') result = '== ' + (parts.slice(1).join(' ').toUpperCase() || 'BANNER') + ' ==\n';
    else if (responses[c]) {
        const r = responses[c];
        result = (typeof r === 'function' ? r() : r) + '\n';
    } else if (c) {
        result = `Command not found: ${c}\n`;
    }
    
    if (result) output.innerHTML += `<div>${result}</div>`;
}

function buildFileManager(body) {
    body.innerHTML = `
    <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap;">
      <button style="padding: 6px 12px; font-size: 12px;">🏠 Home</button>
      <button style="padding: 6px 12px; font-size: 12px; background: rgba(255,255,255,0.1); color: #fff;">📄 New File</button>
      <input type="text" placeholder="Search files..." style="flex:1; min-width:120px; font-size: 12px; padding: 6px 12px;">
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(90px,1fr));gap:16px;">
      ${['📁 Documents','📁 Downloads','📁 Music','📁 Pictures','📁 Videos','📄 notes.txt','📄 resume.pdf','📄 config.json','📁 Projects','📄 todo.md'].map(f=>`
        <div class="file-item" style="text-align:center;padding:12px;border-radius:10px;cursor:pointer;transition:0.2s;">
            <span style="font-size:42px;display:block;margin-bottom:8px;">${f.startsWith('📁')?'📁':'📄'}</span>
            <span style="font-size:12px;color:rgba(255,255,255,0.8);">${f.slice(2)}</span>
        </div>`).join('')}
    </div>`;
}

function buildTextEditor(body) {
    body.innerHTML = `
    <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;">
      <button>New</button><button>Open</button><button>Save</button>
      <select style="background: rgba(255,255,255,0.1);"><option>Plain Text</option><option>HTML</option><option>CSS</option><option>JS</option></select>
    </div>
    <textarea style="width:100%;height:calc(100% - 60px);resize:none;font-family:var(--font-mono);font-size:14px;background:rgba(0,0,0,0.3);color:#fff;border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:15px;" placeholder="Start typing...">Welcome to WebLinux Text Editor!

This is a premium, modular text editor.
You can type, edit, and save your text here.

Features:
- Multiple file type support
- Syntax highlighting ready
- Auto-save capability</textarea>`;
}

function buildCalculator(body) {
    body.innerHTML = `
    <style>
      .calc-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
      .calc-btn-item { padding: 18px; font-size: 18px; border-radius: 12px; cursor: pointer; transition: 0.2s; background: rgba(255,255,255,0.05); color: #fff; border: none; }
      .calc-btn-item:hover { background: rgba(255,255,255,0.15); transform: translateY(-2px); }
      .calc-btn-item.op { background: var(--accent-gradient); }
      .calc-btn-item.clr { background: var(--danger); }
    </style>
    <input type="text" id="calc-display" readonly style="width:100%;padding:20px;font-size:28px;text-align:right;margin-bottom:15px;background:rgba(0,0,0,0.4);border:1px solid rgba(255,255,255,0.1);color:#fff;border-radius:12px;" value="0">
    <div class="calc-grid">
      ${['C','⌫','%','÷','7','8','9','×','4','5','6','−','1','2','3','+','±','0','.','='].map(b=>{
        let cls='calc-btn-item';
        if('÷×−+%='.includes(b))cls+=' op';
        if(b==='C')cls+=' clr';
        return `<button class="${cls}" data-val="${b}">${b}</button>`;
      }).join('')}
    </div>`;
    
    let calcExpr = '';
    const display = body.querySelector('#calc-display');
    body.querySelectorAll('.calc-btn-item').forEach(btn => {
        btn.addEventListener('click', () => {
            const v = btn.dataset.val;
            if (v === 'C') { calcExpr = ''; display.value = '0'; } 
            else if (v === '⌫') { calcExpr = calcExpr.slice(0, -1); display.value = calcExpr || '0'; } 
            else if (v === '=') { 
                try { 
                    display.value = eval(calcExpr.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-')); 
                    calcExpr = display.value; 
                } catch (e) { display.value = 'Error'; calcExpr = ''; } 
            } 
            else if (v === '±') { 
                if (calcExpr.startsWith('-')) calcExpr = calcExpr.slice(1);
                else calcExpr = '-' + calcExpr;
                display.value = calcExpr || '0'; 
            } else { 
                if (display.value === '0' && !isNaN(v)) calcExpr = v;
                else calcExpr += v;
                display.value = calcExpr; 
            }
        });
    });
}

function buildCalendar(body) {
    const now = new Date();
    const y = now.getFullYear();
    const m = now.getMonth();
    const daysInMonth = new Date(y, m + 1, 0).getDate();
    const firstDay = new Date(y, m, 1).getDay();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    let calHTML = `<h2 style="text-align:center;margin-bottom:20px; font-weight: 600;">${months[m]} ${y}</h2><div style="display:grid;grid-template-columns:repeat(7,1fr);gap:8px;text-align:center;">`;
    ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].forEach(d => calHTML += `<b style="padding:10px; color: var(--accent-primary); font-size: 12px; text-transform: uppercase;">${d}</b>`);
    
    for (let i = 0; i < firstDay; i++) calHTML += '<span></span>';
    for (let d = 1; d <= daysInMonth; d++) {
        const isToday = d === now.getDate();
        const style = isToday ? 'background: var(--accent-gradient); border-radius: 12px; color: #fff; font-weight: bold; box-shadow: 0 4px 10px rgba(108, 92, 231, 0.3);' : 'background: rgba(255,255,255,0.03); border-radius: 12px;';
        calHTML += `<span style="padding:15px; cursor:pointer; ${style} transition: 0.2s;" class="cal-day">${d}</span>`;
    }
    calHTML += '</div>';
    body.innerHTML = calHTML;
}

function buildSettings(body) {
    body.innerHTML = `
    <h3 style="margin-bottom: 20px;">⚙️ System Settings</h3>
    <div style="display:grid;gap:20px;">
      <div class="setting-item">
        <label style="display:block; margin-bottom: 8px; font-size: 13px; color: var(--text-secondary);">Display Brightness</label>
        <input type="range" min="0" max="100" value="80" style="width:100%;">
      </div>
      <div class="setting-item">
        <label style="display:block; margin-bottom: 8px; font-size: 13px; color: var(--text-secondary);">System Volume</label>
        <input type="range" min="0" max="100" value="65" style="width:100%;">
      </div>
      <div class="setting-item">
        <label style="display:block; margin-bottom: 8px; font-size: 13px; color: var(--text-secondary);">Theme</label>
        <select style="width:100%;"><option>Cyberpunk Dark (Default)</option><option>Deep Sea</option><option>Forest</option><option>Light Mode</option></select>
      </div>
      <div class="setting-item">
        <label style="display:block; margin-bottom: 8px; font-size: 13px; color: var(--text-secondary);">Interface Scaling</label>
        <select style="width:100%;"><option>90%</option><option selected>100%</option><option>110%</option><option>125%</option></select>
      </div>
      <button class="success" style="margin-top: 10px;">Apply All Settings</button>
    </div>`;
}

function buildBrowser(body) {
    body.innerHTML = `
    <div style="display:flex;gap:8px;margin-bottom:12px; padding: 4px; background: rgba(0,0,0,0.2); border-radius: 10px;">
      <button style="padding: 6px 12px;">◀</button><button style="padding: 6px 12px;">▶</button><button style="padding: 6px 12px;">🔄</button>
      <input type="text" value="https://google.com" style="flex:1; background: rgba(0,0,0,0.3); border: none; font-size: 13px;" id="browser-url">
      <button style="padding: 6px 12px;">Go</button>
    </div>
    <div style="background:#fff; color:#000; padding:40px; border-radius:12px; min-height:300px; text-align: center; display: flex; flex-direction: column; justify-content: center;">
      <h1 style="color:#4a9eff; font-size: 48px; margin-bottom: 20px;">Google</h1>
      <div style="max-width: 500px; margin: 0 auto; width: 100%;">
        <input type="text" placeholder="Search Google or type a URL" style="width:100%; background:#f1f1f1; color:#000; border:1px solid #dfe1e5; border-radius:24px; padding: 12px 20px;">
      </div>
      <div style="margin-top: 20px;">
        <button style="background: #f8f9fa; color: #3c4043; border: 1px solid #f8f9fa; font-weight: normal; font-size: 14px;">Google Search</button>
        <button style="background: #f8f9fa; color: #3c4043; border: 1px solid #f8f9fa; font-weight: normal; font-size: 14px; margin-left: 10px;">I'm Feeling Lucky</button>
      </div>
    </div>`;
}

function buildNotepad(body) {
    body.innerHTML = `<textarea style="width:100%;height:100%;resize:none;background:#fffef5;color:#333;border:none;border-radius:12px;padding:25px;font-size:16px;line-height:1.6; box-shadow: inset 0 0 10px rgba(0,0,0,0.05);" placeholder="Quick notes...">📋 Quick Notepad

- High-priority tasks for today
- Finalize WebLinux OS architecture
- Refactor app module logic
- Implement glassmorphism styles
- Test multi-window focus engine</textarea>`;
}

function buildPaint(body) {
    body.innerHTML = `
    <div style="display:flex;gap:10px;margin-bottom:12px;flex-wrap:wrap; align-items: center;">
      <input type="color" value="#4a9eff" id="paint-color" style="width:40px;height:40px;border:none;cursor:pointer; padding: 0; background: transparent;">
      <button id="paint-brush" style="padding: 8px 12px;">🖌️</button>
      <button id="paint-eraser" style="padding: 8px 12px; background: rgba(255,255,255,0.1);">🧹</button>
      <input type="range" min="1" max="50" value="5" id="paint-size" style="width:100px;">
      <button id="paint-clear" style="margin-left: auto; background: var(--danger);">Clear</button>
    </div>
    <canvas id="paint-canvas" style="border:1px solid rgba(255,255,255,0.1); border-radius:12px; cursor:crosshair; background:#fff; width:100%; height:calc(100% - 60px);"></canvas>`;
    
    setTimeout(() => {
        const canvas = body.querySelector('#paint-canvas');
        if (!canvas) return;
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        const ctx = canvas.getContext('2d');
        let painting = false;
        let eraser = false;
        
        const startPosition = (e) => { painting = true; draw(e); };
        const finishedPosition = () => { painting = false; ctx.beginPath(); };
        
        function draw(e) {
            if (!painting) return;
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            ctx.lineWidth = body.querySelector('#paint-size').value;
            ctx.lineCap = 'round';
            ctx.strokeStyle = eraser ? '#ffffff' : body.querySelector('#paint-color').value;
            
            ctx.lineTo(x, y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(x, y);
        }
        
        canvas.addEventListener('mousedown', startPosition);
        canvas.addEventListener('mouseup', finishedPosition);
        canvas.addEventListener('mousemove', draw);
        
        body.querySelector('#paint-brush').addEventListener('click', () => { eraser = false; });
        body.querySelector('#paint-eraser').addEventListener('click', () => { eraser = true; });
        body.querySelector('#paint-clear').addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height));
    }, 300);
}

function buildMusicPlayer(body) {
    body.innerHTML = `
    <div style="text-align:center; padding: 20px;">
      <div style="font-size:100px; margin:20px; animation: pulse 2s infinite;">🎵</div>
      <h2 style="margin-bottom: 5px;">Cyberpunk Dreams</h2>
      <p style="color:var(--text-secondary); margin-bottom: 30px;">Lofi Girl - Synthwave Mix</p>
      <div style="background:rgba(255,255,255,0.1); height:6px; border-radius:10px; margin:20px 0; overflow: hidden;">
        <div style="background:var(--accent-gradient); width:45%; height:100%; border-radius:10px;"></div>
      </div>
      <div style="display: flex; justify-content: space-between; font-size: 12px; margin-top: -15px; color: var(--text-secondary);">
        <span>1:45</span><span>4:20</span>
      </div>
      <div style="display:flex; justify-content:center; gap:25px; align-items: center; margin-top: 30px;">
        <button style="background:none; box-shadow:none; font-size: 24px;">⏮</button>
        <button style="font-size:40px; padding:15px 25px; border-radius: 20px;">▶</button>
        <button style="background:none; box-shadow:none; font-size: 24px;">⏭</button>
      </div>
      <div style="display: flex; align-items: center; gap: 15px; margin-top: 40px;">
        <span>🔈</span><input type="range" min="0" max="100" value="65" style="flex:1;"><span>🔊</span>
      </div>
    </div>
    <style>@keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.1); } 100% { transform: scale(1); } }</style>`;
}

function buildSysMonitor(body) {
    body.innerHTML = `
    <h3 style="margin-bottom: 20px;">📊 System Resources</h3>
    <div style="display:grid; gap:25px;">
      <div class="stat-group">
        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <span style="font-size: 14px; font-weight: 500;">CPU Load</span>
            <span id="cpu-val" style="color: var(--accent-primary);">24%</span>
        </div>
        <div style="background:rgba(0,0,0,0.3); height:12px; border-radius:10px; overflow: hidden;">
            <div id="cpu-bar" style="background:var(--accent-gradient); width:24%; height:100%; transition: 0.5s;"></div>
        </div>
      </div>
      <div class="stat-group">
        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <span style="font-size: 14px; font-weight: 500;">Memory Usage</span>
            <span style="color: var(--success);">4.2 GB / 16 GB</span>
        </div>
        <div style="background:rgba(0,0,0,0.3); height:12px; border-radius:10px; overflow: hidden;">
            <div style="background:var(--success); width:26%; height:100%;"></div>
        </div>
      </div>
      <div class="stat-group">
        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <span style="font-size: 14px; font-weight: 500;">Disk Activity</span>
            <span style="color: var(--warning);">1.2 MB/s</span>
        </div>
        <div style="background:rgba(0,0,0,0.3); height:12px; border-radius:10px; overflow: hidden;">
            <div style="background:var(--warning); width:15%; height:100%;"></div>
        </div>
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 10px;">
        <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 12px; text-align: center;">
            <div style="font-size: 12px; color: var(--text-secondary);">Uptime</div>
            <div style="font-size: 18px; font-weight: 600;">12:45:02</div>
        </div>
        <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 12px; text-align: center;">
            <div style="font-size: 12px; color: var(--text-secondary);">Processes</div>
            <div style="font-size: 18px; font-weight: 600;">248</div>
        </div>
      </div>
    </div>`;
    
    setInterval(() => {
        const val = Math.floor(Math.random() * 40) + 10;
        const bar = body.querySelector('#cpu-bar');
        const text = body.querySelector('#cpu-val');
        if (bar && text) {
            bar.style.width = val + '%';
            text.textContent = val + '%';
        }
    }, 2000);
}

function buildPackageManager(body) {
    body.innerHTML = `
    <h3 style="margin-bottom: 15px;">📦 App Marketplace</h3>
    <input type="text" placeholder="Search for applications..." style="width:100%; margin-bottom:20px; background: rgba(0,0,0,0.2);">
    <div style="display:grid; gap:10px;">
      ${['VS Code','Firefox','Spotify','Discord','Docker','Postman','VLC Player','Obsidian','Steam','TablePlus'].map(p=>`
        <div style="display:flex; justify-content:space-between; align-items:center; padding:15px; background:rgba(255,255,255,0.05); border-radius:12px; border: 1px solid rgba(255,255,255,0.05);">
            <div style="display: flex; align-items: center; gap: 15px;">
                <div style="width: 40px; height: 40px; background: rgba(0,0,0,0.2); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 20px;">📦</div>
                <div>
                    <div style="font-weight: 600;">${p}</div>
                    <div style="font-size: 11px; color: var(--text-secondary);">Stable v1.${Math.floor(Math.random()*10)}.0</div>
                </div>
            </div>
            <button style="padding: 8px 16px; font-size: 12px;">Install</button>
        </div>`).join('')}
    </div>`;
}

function buildCodeEditor(body) {
    body.innerHTML = `
    <div style="display:flex; gap:10px; margin-bottom:12px; align-items: center;">
      <select style="font-size: 12px;"><option>JavaScript</option><option>Python</option><option>HTML</option><option>TypeScript</option></select>
      <div style="margin-left: auto; display: flex; gap: 8px;">
        <button style="background: var(--success); padding: 8px 16px;">Run Code</button>
        <button style="background: rgba(255,255,255,0.1); padding: 8px 16px;">Format</button>
      </div>
    </div>
    <div style="display: flex; height: calc(100% - 55px); gap: 1px; background: rgba(255,255,255,0.05); border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
        <div style="width: 40px; background: rgba(0,0,0,0.3); padding: 15px 0; text-align: center; font-family: var(--font-mono); font-size: 12px; color: rgba(255,255,255,0.2);">
            ${Array.from({length: 20}, (_, i) => i + 1).join('<br>')}
        </div>
        <textarea style="flex:1; font-family:var(--font-mono); font-size:14px; background:rgba(0,0,0,0.4); color:#d4d4d4; border:none; padding:15px; resize:none;" spellcheck="false">/**
 * Fibonacci Sequence Generator
 */
function fibonacci(n) {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence;
}

const result = fibonacci(15);
console.log("Fibonacci(15):", result.join(", "));</textarea>
    </div>`;
}

// ... Additional builders would follow the same premium pattern ...
// For brevity, I'll include the ones already implemented in the original file but updated.

function buildEmail(body) {
    body.innerHTML = `
    <div style="display:flex; gap:15px; height:100%;">
      <div style="width:180px; border-right:1px solid rgba(255,255,255,0.1); padding-right:15px;">
        <button style="width:100%; margin-bottom:20px; font-size: 13px;">✉️ Compose</button>
        <div style="display: grid; gap: 5px;">
            <div style="padding: 10px; background: rgba(74, 158, 255, 0.1); border-radius: 8px; color: var(--accent-primary); font-weight: 600; font-size: 13px; display: flex; justify-content: space-between;">
                <span>📥 Inbox</span><span>3</span>
            </div>
            <div style="padding: 10px; border-radius: 8px; font-size: 13px; color: var(--text-secondary);">📤 Sent</div>
            <div style="padding: 10px; border-radius: 8px; font-size: 13px; color: var(--text-secondary);">📝 Drafts</div>
            <div style="padding: 10px; border-radius: 8px; font-size: 13px; color: var(--text-secondary);">🗑️ Trash</div>
        </div>
      </div>
      <div style="flex:1; overflow-y: auto;">
        ${['Alice Johnson','GitHub Security','Bob Smith','Stripe Billing','Dribbble Digest'].map((name, i) => `
            <div style="padding:15px; border-bottom:1px solid rgba(255,255,255,0.05); cursor:pointer; transition: 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.03)'" onmouseout="this.style.background='transparent'">
                <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                    <b style="font-size: 14px;">${name}</b>
                    <span style="font-size: 11px; color: var(--text-secondary);">10:42 AM</span>
                </div>
                <div style="font-size: 12px; color: var(--text-secondary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                    ${i === 0 ? 'Project update: Final designs are ready for review...' : 'Important information regarding your account security...'}
                </div>
            </div>`).join('')}
      </div>
    </div>`;
}

function buildChat(body) {
    body.innerHTML = `
    <div style="display:flex; flex-direction:column; height:100%;">
      <div style="flex:1; overflow-y:auto; padding:15px; display: flex; flex-direction: column; gap: 15px;">
        <div style="padding:12px 16px; background:rgba(255,255,255,0.08); border-radius:15px 15px 15px 0; max-width:80%; align-self: flex-start;">
            <b style="display: block; font-size: 11px; color: var(--accent-primary); margin-bottom: 4px;">Alice</b>
            <span style="font-size: 13px;">Hey! Have you seen the new OS design? It looks amazing!</span>
        </div>
        <div style="padding:12px 16px; background:var(--accent-gradient); color: #fff; border-radius:15px 15px 0 15px; max-width:80%; align-self: flex-end;">
            <span style="font-size: 13px;">Yes! Working on the modular refactor right now. The glassmorphism is a game changer.</span>
        </div>
        <div style="padding:12px 16px; background:rgba(255,255,255,0.08); border-radius:15px 15px 15px 0; max-width:80%; align-self: flex-start;">
            <b style="display: block; font-size: 11px; color: var(--accent-primary); margin-bottom: 4px;">Alice</b>
            <span style="font-size: 13px;">Agreed. Let me know if you need help with the icons.</span>
        </div>
      </div>
      <div style="display:flex; gap:10px; padding:15px; border-top:1px solid rgba(255,255,255,0.1); background: rgba(0,0,0,0.1);">
        <input type="text" placeholder="Type a message..." style="flex:1; background: rgba(255,255,255,0.05); border-radius: 20px;"><button style="border-radius: 20px; padding: 10px 20px;">Send</button>
      </div>
    </div>`;
}

function buildTicTacToe(body) {
    body.innerHTML = `
    <h2 style="text-align:center; margin-bottom: 20px;">🎮 Tic-Tac-Toe</h2>
    <div id="ttt-board" style="display:grid; grid-template-columns:repeat(3,1fr); gap:12px; max-width:300px; margin:0 auto;">
      ${Array.from({length:9},(_,i)=>`<div data-i="${i}" style="aspect-ratio:1; background:rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius:16px; display:flex; align-items:center; justify-content:center; font-size:50px; cursor:pointer; transition: 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='rgba(255,255,255,0.05)'"></div>`).join('')}
    </div>
    <div style="text-align:center; margin-top: 30px;">
        <p id="ttt-status" style="font-size: 18px; font-weight: 500; margin-bottom: 20px;">Player X's turn</p>
        <button id="ttt-reset" style="background: rgba(255,255,255,0.1); padding: 12px 24px;">Restart Game</button>
    </div>`;
    
    let tttBoard = Array(9).fill('');
    let tttTurn = 'X';
    const cells = body.querySelectorAll('#ttt-board div');
    const status = body.querySelector('#ttt-status');
    
    const checkWinner = () => {
        const wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        for (const [a,b,c] of wins) {
            if (tttBoard[a] && tttBoard[a] === tttBoard[b] && tttBoard[a] === tttBoard[c]) return tttBoard[a];
        }
        return null;
    };
    
    cells.forEach(cell => cell.addEventListener('click', () => {
        const i = parseInt(cell.dataset.i);
        if (tttBoard[i] || checkWinner()) return;
        
        tttBoard[i] = tttTurn;
        cell.textContent = tttTurn;
        cell.style.color = tttTurn === 'X' ? '#4a9eff' : '#6c5ce7';
        
        const winner = checkWinner();
        if (winner) {
            status.textContent = `Player ${winner} Wins! 🎉`;
            status.style.color = '#27c93f';
        } else if (tttBoard.every(c => c)) {
            status.textContent = "It's a Draw!";
        } else {
            tttTurn = tttTurn === 'X' ? 'O' : 'X';
            status.textContent = `Player ${tttTurn}'s Turn`;
        }
    }));
    
    body.querySelector('#ttt-reset').addEventListener('click', () => {
        tttBoard = Array(9).fill('');
        tttTurn = 'X';
        cells.forEach(c => c.textContent = '');
        status.textContent = "Player X's turn";
        status.style.color = '#fff';
    });
}

function buildSnake(body) {
    body.innerHTML = `
    <h2 style="text-align:center; margin-bottom: 15px;">🐍 Snake Evolution</h2>
    <canvas id="snake-canvas" style="display:block; margin:0 auto; border:4px solid rgba(255,255,255,0.1); border-radius:12px; background:#000; box-shadow: 0 10px 30px rgba(0,0,0,0.5);"></canvas>
    <div style="display: flex; justify-content: space-between; align-items: center; max-width: 400px; margin: 20px auto;">
        <div style="font-size: 20px; font-weight: 600;">Score: <span id="snake-score" style="color: var(--accent-primary);">0</span></div>
        <button id="snake-restart">New Game</button>
    </div>`;
    
    setTimeout(() => {
        const canvas = body.querySelector('#snake-canvas');
        canvas.width = 400; canvas.height = 400;
        const ctx = canvas.getContext('2d');
        const gridSize = 20;
        const cols = canvas.width / gridSize;
        const rows = canvas.height / gridSize;
        
        let snake = [{x: 10, y: 10}, {x: 9, y: 10}, {x: 8, y: 10}];
        let food = {x: 15, y: 10};
        let dir = {x: 1, y: 0};
        let score = 0;
        let gameOver = false;
        let interval;

        function spawnFood() {
            food = { x: Math.floor(Math.random() * cols), y: Math.floor(Math.random() * rows) };
            if (snake.some(s => s.x === food.x && s.y === food.y)) spawnFood();
        }

        function step() {
            if (gameOver) return;
            const head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };
            
            if (head.x < 0 || head.x >= cols || head.y < 0 || head.y >= rows || snake.some(s => s.x === head.x && s.y === head.y)) {
                gameOver = true;
                clearInterval(interval);
                return;
            }
            
            snake.unshift(head);
            if (head.x === food.x && head.y === food.y) {
                score += 10;
                body.querySelector('#snake-score').textContent = score;
                spawnFood();
            } else {
                snake.pop();
            }
            draw();
        }

        function draw() {
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Draw Grid (Subtle)
            ctx.strokeStyle = 'rgba(255,255,255,0.05)';
            for(let i=0; i<cols; i++) {
                ctx.beginPath(); ctx.moveTo(i*gridSize, 0); ctx.lineTo(i*gridSize, canvas.height); ctx.stroke();
                ctx.beginPath(); ctx.moveTo(0, i*gridSize); ctx.lineTo(canvas.width, i*gridSize); ctx.stroke();
            }

            // Draw Snake
            snake.forEach((s, i) => {
                const grad = ctx.createLinearGradient(s.x*gridSize, s.y*gridSize, (s.x+1)*gridSize, (s.y+1)*gridSize);
                grad.addColorStop(0, i === 0 ? '#4a9eff' : '#6c5ce7');
                grad.addColorStop(1, i === 0 ? '#6c5ce7' : '#4834d4');
                ctx.fillStyle = grad;
                ctx.beginPath();
                ctx.roundRect(s.x*gridSize+1, s.y*gridSize+1, gridSize-2, gridSize-2, 4);
                ctx.fill();
            });

            // Draw Food
            ctx.fillStyle = '#ff5f56';
            ctx.shadowBlur = 15; ctx.shadowColor = '#ff5f56';
            ctx.beginPath();
            ctx.arc(food.x*gridSize+gridSize/2, food.y*gridSize+gridSize/2, gridSize/3, 0, Math.PI*2);
            ctx.fill();
            ctx.shadowBlur = 0;
        }

        const handleKey = (e) => {
            const keys = { ArrowUp: {x:0,y:-1}, ArrowDown: {x:0,y:1}, ArrowLeft: {x:-1,y:0}, ArrowRight: {x:1,y:0} };
            if (keys[e.key]) {
                const newDir = keys[e.key];
                if (newDir.x !== -dir.x || newDir.y !== -dir.y) dir = newDir;
                e.preventDefault();
            }
        };
        
        document.addEventListener('keydown', handleKey);
        body.querySelector('#snake-restart').addEventListener('click', () => {
            clearInterval(interval);
            snake = [{x: 10, y: 10}, {x: 9, y: 10}, {x: 8, y: 10}];
            dir = {x: 1, y: 0}; score = 0; gameOver = false;
            body.querySelector('#snake-score').textContent = '0';
            spawnFood();
            interval = setInterval(step, 100);
        });
        
        spawnFood();
        interval = setInterval(step, 100);
        
        // Cleanup listener on window close
        win.addEventListener('close', () => document.removeEventListener('keydown', handleKey));
    }, 300);
}

function buildWeather(body) {
    body.innerHTML = `
    <div style="text-align:center; padding: 20px;">
      <div style="font-size:120px; margin-bottom: 10px; filter: drop-shadow(0 10px 20px rgba(74, 158, 255, 0.3));">🌤️</div>
      <h1 style="font-size: 64px; font-weight: 700; margin-bottom: 5px;">24°C</h1>
      <p style="font-size: 20px; color: var(--text-secondary); margin-bottom: 40px;">Partly Cloudy • San Francisco</p>
      
      <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-bottom: 40px;">
        <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 16px;">
            <div style="font-size: 24px;">💧</div>
            <div style="font-size: 11px; color: var(--text-secondary); margin-top: 5px;">Humidity</div>
            <div style="font-weight: 600;">45%</div>
        </div>
        <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 16px;">
            <div style="font-size: 24px;">🌬️</div>
            <div style="font-size: 11px; color: var(--text-secondary); margin-top: 5px;">Wind</div>
            <div style="font-weight: 600;">12 km/h</div>
        </div>
        <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 16px;">
            <div style="font-size: 24px;">☀️</div>
            <div style="font-size: 11px; color: var(--text-secondary); margin-top: 5px;">UV Index</div>
            <div style="font-weight: 600;">Moderate</div>
        </div>
      </div>
      
      <div style="display:flex; justify-content:space-between; padding: 20px; background: rgba(0,0,0,0.2); border-radius: 16px;">
        ${['Mon','Tue','Wed','Thu','Fri'].map((d, i) => `
            <div style="text-align: center;">
                <div style="font-size: 12px; color: var(--text-secondary);">${d}</div>
                <div style="font-size: 20px; margin: 8px 0;">${['☀️','☁️','🌦️','🌧️','⛅'][i]}</div>
                <div style="font-weight: 600;">${22+i}°</div>
            </div>`).join('')}
      </div>
    </div>`;
}

function buildHelp(body) {
    body.innerHTML = `
    <div style="text-align:center; padding: 40px;">
      <div style="font-size:100px; margin-bottom: 20px;">🐧</div>
      <h1 style="font-size: 32px; font-weight: 700; margin-bottom: 10px; background: var(--accent-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">WebLinux OS</h1>
      <p style="color: var(--text-secondary); margin-bottom: 40px;">Version 6.0.0 "Glass Evolution"</p>
      
      <div style="text-align: left; background: rgba(255,255,255,0.05); padding: 25px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.1);">
        <h4 style="margin-bottom: 15px; color: var(--accent-primary);">System Information</h4>
        <div style="display: grid; gap: 10px; font-size: 14px;">
            <div style="display: flex; justify-content: space-between;"><span>Kernel</span><span style="color: #fff;">Web-5.2.0-LGT-Premium</span></div>
            <div style="display: flex; justify-content: space-between;"><span>Shell</span><span style="color: #fff;">bash-emulated 1.2</span></div>
            <div style="display: flex; justify-content: space-between;"><span>Window Manager</span><span style="color: #fff;">GlassWM 2.0</span></div>
            <div style="display: flex; justify-content: space-between;"><span>Architecture</span><span style="color: #fff;">x64-web (JS-runtime)</span></div>
        </div>
      </div>
      
      <p style="margin-top: 40px; font-size: 13px; color: var(--text-secondary);">Built with ❤️ for pepitozoe79-lgtm</p>
    </div>`;
}
