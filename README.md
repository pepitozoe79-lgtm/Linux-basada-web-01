# 🚀 NeoLinux OS v2: El Escritorio Linux en tu Navegador

**NeoLinux OS** es una réplica avanzada de un entorno de escritorio tipo Linux construida íntegramente para la web. Esta versión 2.0 presenta un rediseño completo orientado a una estética **Premium y Futurista**, con un enfoque en la fluidez y la inmersión total.

## ✨ Características de la Versión 2.0 (Premium Update)

*   **Floating Taskbar (Barra de Tareas Flotante):** Un nuevo diseño centralizado inspirado en sistemas operativos modernos, con indicadores de estado dinámicos y animaciones de diseño (layout animations).
*   **Diseño Ultra-Premium:** Glassmorphism elevado con desenfoque de 20px, saturación mejorada, bordes sutiles y sombras de alta fidelidad.
*   **Animated Mesh Background:** Un fondo dinámico con gradientes animados que crea una sensación de profundidad y movimiento.
*   **Start Menu Centralizado:** El App Launcher ahora es un menú central elegante con búsqueda inteligente, perfiles de usuario y efectos de brillo en los iconos.
*   **Ventanas Hi-Fi:** Controles de ventana estilo macOS mejorados, transiciones suaves con Framer Motion y texturas internas sutiles.
*   **Ecosistema de Apps Detallado:** Las aplicaciones principales (Terminal, Files, Settings, Browser, etc.) han sido rediseñadas con interfaces profesionales y funcionales.

---

## 📖 Cómo Utilizar NeoLinux OS

La experiencia es intuitiva y familiar para usuarios de Linux, Windows o macOS:

### 1. Navegación por el Escritorio
*   **Lanzar Aplicaciones:** Haz clic en el icono de **"Grid"** en el centro de la barra de tareas para abrir el **Start Menu**.
*   **Gestión de Tareas:** Las apps abiertas aparecen en la barra central con indicadores inteligentes. Haz clic para enfocar o restaurar.

### 2. Control de Ventanas
*   **Mover:** Arrastra desde la cabecera de la ventana.
*   **Acciones:**
    *   🔴 **Cerrar:** Elimina la instancia.
    *   🟡 **Minimizar:** Oculta la ventana (puedes restaurarla desde la barra).
    *   🟢 **Maximizar:** Ajusta al espacio disponible.

---

## 🛠️ Instalación para Desarrolladores

Si quieres ejecutarlo localmente o contribuir:

1.  **Clona el repositorio:** 
    ```bash
    git clone https://github.com/pepitozoe79-lgtm/Linux-basada-web-01.git
    ```
2.  **Instala las dependencias:** 
    ```bash
    npm install
    ```
3.  **Inicia el servidor de desarrollo:** 
    ```bash
    npm run dev -- --host
    ```

---

## 📂 Arquitectura Técnica
- **Core:** React 18 + TypeScript.
- **Estilos:** Vanilla CSS (Design Tokens) + TailwindCSS.
- **Animaciones:** Framer Motion (Orquestación de gestos y estados).
- **Iconos:** Lucide React.
- **Build Tool:** Vite.
