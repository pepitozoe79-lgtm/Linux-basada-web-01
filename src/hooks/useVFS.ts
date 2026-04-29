import { useState, useEffect } from 'react';

export interface VFSNode {
  name: string;
  type: 'file' | 'dir';
  content?: string;
  children?: VFSNode[];
}

const DEFAULT_VFS: VFSNode = {
  name: '/',
  type: 'dir',
  children: [
    {
      name: 'home',
      type: 'dir',
      children: [
        {
          name: 'user',
          type: 'dir',
          children: [
            { name: 'documents', type: 'dir', children: [] },
            { name: 'projects', type: 'dir', children: [] },
            { name: 'welcome.txt', type: 'file', content: 'Welcome to NeoLinux OS!' }
          ]
        }
      ]
    },
    {
      name: 'etc',
      type: 'dir',
      children: [
        { name: 'os-release', type: 'file', content: 'NAME="NeoLinux OS"\nVERSION="1.0.0"\nID=neolinux' }
      ]
    }
  ]
};

export const useVFS = () => {
  const [root, setRoot] = useState<VFSNode>(() => {
    const saved = localStorage.getItem('neolinux_vfs');
    return saved ? JSON.parse(saved) : DEFAULT_VFS;
  });

  useEffect(() => {
    localStorage.setItem('neolinux_vfs', JSON.stringify(root));
  }, [root]);

  const findNode = (path: string): VFSNode | null => {
    const parts = path.split('/').filter(Boolean);
    let current = root;
    for (const part of parts) {
      const next = current.children?.find(c => c.name === part);
      if (!next) return null;
      current = next;
    }
    return current;
  };

  return { root, findNode };
};
