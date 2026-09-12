'use client';
import { useEffect } from 'react';
import { registerAll } from '@uiux/core';

export default function Home() {
  useEffect(() => {
    registerAll();
  }, []);

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', background: 'var(--ui-color-canvas-soft)', minHeight: '100vh' }}>
      <ui-card>
        <h2>Next.js Integration</h2>
        <ui-input label="Search" type="search" placeholder="Search..."></ui-input>
        
        <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
          <ui-button variant="primary">Search</ui-button>
          <ui-button variant="ghost">Clear</ui-button>
        </div>
      </ui-card>
    </main>
  );
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ui-button': any;
      'ui-card': any;
      'ui-input': any;
    }
  }
}
