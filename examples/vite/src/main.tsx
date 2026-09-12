import React from 'react';
import ReactDOM from 'react-dom/client';
import "@uiux/core/styles.css";
import { registerAll } from "@uiux/core";

registerAll();

function App() {
  return (
    <div style={{ padding: '2rem', background: 'var(--ui-color-canvas-soft)', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <ui-card>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2 style={{ margin: 0 }}>Vite + React</h2>
          <ui-badge variant="success">Active</ui-badge>
        </div>
        
        <ui-input label="Username" placeholder="Enter username"></ui-input>
        
        <div style={{ marginTop: '1rem' }}>
          <ui-button variant="primary">Save Changes</ui-button>
        </div>
      </ui-card>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
