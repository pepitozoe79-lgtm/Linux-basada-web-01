import { ReactNode } from "react";

export interface AppConfig {
  id: string;
  name: string;
  icon: string; // Lucide icon name or URL
  component: ReactNode | (() => ReactNode);
  singleton?: boolean;
  width?: number;
  height?: number;
}

export interface WindowInstance {
  id: string;
  appKey: string;
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
  isMinimized: boolean;
  isMaximized: boolean;
}

export interface OSState {
  windows: WindowInstance[];
  activeWindowId: string | null;
  focusedWindowId: string | null;
}
