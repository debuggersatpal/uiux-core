import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import "@uiux/core/styles.css";
import { registerAll } from "@uiux/core";

registerAll();

function App() {
  return (
    <div className="p-ui-8 bg-ui-canvas-soft min-h-screen font-sans">
      <ui-card class="max-w-lg mx-auto shadow-ui-md rounded-ui-md p-ui-4">
        <div className="flex justify-between items-center mb-ui-4">
          <h2 className="m-0 text-ui-ink">Vite + Tailwind</h2>
          <ui-badge variant="success">Active</ui-badge>
        </div>
        
        <ui-input label="Username" placeholder="Enter username"></ui-input>
        
        <div className="mt-ui-4">
          <ui-button variant="primary" class="w-full">Save Changes</ui-button>
        </div>
      </ui-card>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
