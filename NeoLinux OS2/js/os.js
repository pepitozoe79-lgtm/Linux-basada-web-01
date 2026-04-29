/**
 * WebLinux OS - Core System
 */

class WebLinuxOS {
    constructor() {
        this.apps = [];
        this.desktopIcons = ['terminal', 'files', 'browser', 'texteditor', 'calculator', 'settings', 'codeeditor', 'notes', 'paint', 'musicplayer'];
        
        this.dom = {
            desktop: document.getElementById('desktop'),
            desktopIcons: document.getElementById('desktop-icons'),
            taskbarApps: document.getElementById('taskbar-apps'),
            startBtn: document.getElementById('start-btn'),
            startMenu: document.getElementById('start-menu'),
            startAppList: document.getElementById('start-app-list'),
            startSearch: document.getElementById('start-search'),
            clockDisplay: document.getElementById('clock-display'),
            ctxMenu: document.getElementById('desktop-context-menu')
        };

        this.init();
    }

    async init() {
        // Load Apps
        this.apps = window.apps || [];
        
        this.initClock();
        this.initStartMenu();
        this.initDesktop();
        this.initEvents();
        
        // Initial Apps
        setTimeout(() => this.openApp('terminal'), 500);
        
        console.log('%c🐧 WebLinux OS Ready', 'color: #4a9eff; font-weight: bold; font-size: 1.2em;');
    }

    initClock() {
        const update = () => {
            const now = new Date();
            this.dom.clockDisplay.textContent = now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }) + '  ' + 
                                            now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        };
        setInterval(update, 1000);
        update();
    }

    initStartMenu() {
        const populate = (filter = '') => {
            this.dom.startAppList.innerHTML = '';
            const filtered = this.apps.filter(a => 
                a.name.toLowerCase().includes(filter.toLowerCase()) || 
                a.category.toLowerCase().includes(filter.toLowerCase())
            );
            
            filtered.forEach(app => {
                const item = document.createElement('div');
                item.className = 'start-app-item';
                item.innerHTML = `<span class="s-icon">${app.icon}</span><span>${app.name}</span>`;
                item.addEventListener('click', () => {
                    this.openApp(app.id);
                    this.toggleStartMenu(false);
                });
                this.dom.startAppList.appendChild(item);
            });
        };

        this.dom.startBtn.addEventListener('click', () => this.toggleStartMenu());
        this.dom.startSearch.addEventListener('input', (e) => populate(e.target.value));
        
        populate();
    }

    toggleStartMenu(state) {
        const isOpen = state !== undefined ? state : !this.dom.startMenu.classList.contains('open');
        this.dom.startMenu.classList.toggle('open', isOpen);
        this.dom.startBtn.classList.toggle('active', isOpen);
        if (isOpen) {
            this.dom.startSearch.value = '';
            this.dom.startSearch.focus();
        }
    }

    initDesktop() {
        // Create Desktop Icons
        this.dom.desktopIcons.innerHTML = '';
        this.desktopIcons.forEach(appId => {
            const app = this.apps.find(a => a.id === appId);
            if (!app) return;
            
            const icon = document.createElement('div');
            icon.className = 'desktop-icon';
            icon.innerHTML = `<span class="icon-img">${app.icon}</span><span class="icon-label">${app.name}</span>`;
            icon.addEventListener('click', () => this.openApp(appId));
            this.dom.desktopIcons.appendChild(icon);
        });

        // Context Menu
        this.dom.desktop.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            this.dom.ctxMenu.style.display = 'block';
            this.dom.ctxMenu.style.left = e.clientX + 'px';
            this.dom.ctxMenu.style.top = e.clientY + 'px';
        });

        document.querySelectorAll('.ctx-item').forEach(item => {
            item.addEventListener('click', () => {
                const action = item.dataset.action;
                if (action === 'refresh') location.reload();
                if (action === 'terminal') this.openApp('terminal');
                if (action === 'files') this.openApp('files');
                this.dom.ctxMenu.style.display = 'none';
            });
        });
    }

    initEvents() {
        document.addEventListener('click', (e) => {
            if (!this.dom.startMenu.contains(e.target) && !this.dom.startBtn.contains(e.target)) {
                this.toggleStartMenu(false);
            }
            if (!this.dom.ctxMenu.contains(e.target)) {
                this.dom.ctxMenu.style.display = 'none';
            }
        });

        window.addEventListener('windowsChanged', () => this.updateTaskbar());
    }

    updateTaskbar() {
        this.dom.taskbarApps.innerHTML = '';
        window.wm.windows.forEach(w => {
            const btn = document.createElement('button');
            btn.className = 'taskbar-app' + (w.el === window.wm.focusedWindow && !w.minimized ? ' active' : '');
            btn.innerHTML = `<span>${w.icon}</span><span>${w.appName}</span>`;
            btn.title = w.appName;
            btn.addEventListener('click', () => {
                if (w.minimized) {
                    w.minimized = false;
                    w.el.style.display = 'flex';
                    w.el.classList.remove('minimized');
                }
                window.wm.focusWindow(w.el);
            });
            this.dom.taskbarApps.appendChild(btn);
        });
    }

    openApp(appId) {
        const app = this.apps.find(a => a.id === appId);
        if (!app) return;

        // Check if already open
        const existing = window.wm.windows.find(w => w.appId === appId);
        if (existing) {
            if (existing.minimized) {
                existing.minimized = false;
                existing.el.style.display = 'flex';
                existing.el.classList.remove('minimized');
            }
            window.wm.focusWindow(existing.el);
            return;
        }

        const contentFn = window.getAppContent ? window.getAppContent(appId) : null;
        window.wm.createWindow(app, contentFn);
    }
}

// Initialize OS when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.os = new WebLinuxOS();
});
