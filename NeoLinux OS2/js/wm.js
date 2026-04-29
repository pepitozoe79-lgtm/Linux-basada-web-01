/**
 * WebLinux OS - Window Manager
 */

class WindowManager {
    constructor() {
        this.windows = [];
        this.focusedWindow = null;
        this.zIndexCounter = 100;
        this.dragging = null;
        this.resizing = null;
        this.dragOffset = { x: 0, y: 0 };
        this.resizeDir = null;
        this.resizeStart = {};

        this.initEvents();
    }

    initEvents() {
        document.addEventListener('mousemove', (e) => {
            if (this.dragging) this.onDragMove(e);
            if (this.resizing) this.onResizeMove(e);
        });

        document.addEventListener('mouseup', () => {
            this.onDragEnd();
            this.onResizeEnd();
        });
    }

    createWindow(app, contentFn) {
        const win = document.createElement('div');
        win.className = 'window glass';
        win.dataset.appId = app.id;
        win.style.left = (100 + Math.random() * 200) + 'px';
        win.style.top = (60 + Math.random() * 150) + 'px';
        win.style.width = '700px';
        win.style.height = '500px';
        win.style.zIndex = ++this.zIndexCounter;

        win.innerHTML = `
            <div class="window-header">
                <span class="w-icon">${app.icon}</span>
                <span class="w-title">${app.name}</span>
                <div class="win-controls">
                    <button class="win-btn minimize" title="Minimize">─</button>
                    <button class="win-btn maximize" title="Maximize">□</button>
                    <button class="win-btn close" title="Close">✕</button>
                </div>
            </div>
            <div class="window-body"></div>
        `;

        document.getElementById('desktop').appendChild(win);
        
        const winData = { 
            el: win, 
            appId: app.id, 
            appName: app.name, 
            icon: app.icon, 
            minimized: false, 
            maximized: false 
        };
        this.windows.push(winData);

        const body = win.querySelector('.window-body');
        if (contentFn) contentFn(body, win);

        // Event handlers
        const header = win.querySelector('.window-header');
        header.addEventListener('mousedown', (e) => this.onDragStart(e, win));
        win.addEventListener('mousedown', () => this.focusWindow(win));

        win.querySelector('.close').addEventListener('click', (e) => {
            e.stopPropagation();
            this.closeWindow(win);
        });
        win.querySelector('.minimize').addEventListener('click', (e) => {
            e.stopPropagation();
            this.minimizeWindow(win);
        });
        win.querySelector('.maximize').addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleMaximize(win);
        });

        this.addResizeHandles(win);
        this.focusWindow(win);
        
        // Dispatch event for taskbar update
        window.dispatchEvent(new CustomEvent('windowsChanged'));
        
        return win;
    }

    addResizeHandles(win) {
        const directions = ['n', 's', 'e', 'w', 'ne', 'nw', 'se', 'sw'];
        directions.forEach(dir => {
            const handle = document.createElement('div');
            handle.style.cssText = `
                position:absolute;z-index:10;
                ${dir.includes('n')?'top:0;height:6px;':''}
                ${dir.includes('s')?'bottom:0;height:6px;':''}
                ${dir.includes('e')?'right:0;width:6px;':''}
                ${dir.includes('w')?'left:0;width:6px;':''}
                ${dir==='n'||dir==='s'?'left:6px;right:6px;':''}
                ${dir==='e'||dir==='w'?'top:6px;bottom:6px;':''}
                cursor:${dir}-resize;
            `;
            handle.addEventListener('mousedown', (e) => {
                e.stopPropagation();
                this.onResizeStart(e, win, dir);
            });
            win.appendChild(handle);
        });
    }

    focusWindow(win) {
        if (this.focusedWindow === win) return;
        this.focusedWindow = win;
        win.style.zIndex = ++this.zIndexCounter;
        this.windows.forEach(w => w.el.classList.remove('focused'));
        win.classList.add('focused');
        window.dispatchEvent(new CustomEvent('windowsChanged'));
    }

    closeWindow(win) {
        win.classList.add('closing');
        setTimeout(() => {
            win.remove();
            this.windows = this.windows.filter(w => w.el !== win);
            if (this.focusedWindow === win) this.focusedWindow = null;
            window.dispatchEvent(new CustomEvent('windowsChanged'));
        }, 200);
    }

    minimizeWindow(win) {
        const wData = this.windows.find(w => w.el === win);
        if (wData) {
            wData.minimized = true;
            win.classList.add('minimized');
            if (this.focusedWindow === win) this.focusedWindow = null;
            window.dispatchEvent(new CustomEvent('windowsChanged'));
        }
    }

    toggleMaximize(win) {
        const wData = this.windows.find(w => w.el === win);
        if (!wData) return;
        if (wData.maximized) {
            win.classList.remove('maximized');
            win.style.left = wData._prevLeft || '100px';
            win.style.top = wData._prevTop || '80px';
            win.style.width = wData._prevWidth || '700px';
            win.style.height = wData._prevHeight || '500px';
            wData.maximized = false;
        } else {
            wData._prevLeft = win.style.left;
            wData._prevTop = win.style.top;
            wData._prevWidth = win.style.width;
            wData._prevHeight = win.style.height;
            win.classList.add('maximized');
            wData.maximized = true;
        }
    }

    onDragStart(e, win) {
        if (e.target.closest('.win-btn')) return;
        if (win.classList.contains('maximized')) return;
        this.dragging = win;
        const rect = win.getBoundingClientRect();
        this.dragOffset.x = e.clientX - rect.left;
        this.dragOffset.y = e.clientY - rect.top;
        this.focusWindow(win);
    }

    onDragMove(e) {
        if (!this.dragging) return;
        const desktop = document.getElementById('desktop');
        const d = desktop.getBoundingClientRect();
        this.dragging.style.left = Math.max(0, Math.min(e.clientX - this.dragOffset.x - d.left, d.width - 100)) + 'px';
        this.dragging.style.top = Math.max(0, Math.min(e.clientY - this.dragOffset.y - d.top, d.height - 40)) + 'px';
    }

    onDragEnd() {
        this.dragging = null;
    }

    onResizeStart(e, win, dir) {
        this.resizing = win;
        this.resizeDir = dir;
        this.resizeStart = { 
            x: e.clientX, 
            y: e.clientY, 
            w: win.offsetWidth, 
            h: win.offsetHeight, 
            l: win.offsetLeft,
            t: win.offsetTop 
        };
        e.preventDefault();
    }

    onResizeMove(e) {
        if (!this.resizing) return;
        const dx = e.clientX - this.resizeStart.x;
        const dy = e.clientY - this.resizeStart.y;
        const d = this.resizeDir;
        let nw = this.resizeStart.w, nh = this.resizeStart.h, nl = this.resizeStart.l, nt = this.resizeStart.t;
        
        if (d.includes('e')) nw = Math.max(300, this.resizeStart.w + dx);
        if (d.includes('w')) { nw = Math.max(300, this.resizeStart.w - dx); nl = this.resizeStart.l + this.resizeStart.w - nw; }
        if (d.includes('s')) nh = Math.max(200, this.resizeStart.h + dy);
        if (d.includes('n')) { nh = Math.max(200, this.resizeStart.h - dy); nt = this.resizeStart.t + this.resizeStart.h - nh; }
        
        this.resizing.style.width = nw + 'px';
        this.resizing.style.height = nh + 'px';
        this.resizing.style.left = nl + 'px';
        this.resizing.style.top = nt + 'px';
    }

    onResizeEnd() {
        this.resizing = null;
    }
}

window.wm = new WindowManager();
