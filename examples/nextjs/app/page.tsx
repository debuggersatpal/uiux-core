"use client";
import { useEffect } from 'react';
import { registerAll } from "@uiux/core";

export default function Home() {
  useEffect(() => {
    registerAll();
  }, []);

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: 600, margin: '0 auto' }}>
      <h1>Next.js Consumer</h1>
      
      <ui-card>
        <h2 style={{ marginTop: 0 }}>Create Account</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <ui-input label="Email" type="email" placeholder="you@example.com"></ui-input>
          <ui-input label="Password" type="password" placeholder="••••••••"></ui-input>
          <ui-button variant="primary">Sign Up</ui-button>
        </div>
      </ui-card>
    </main>
  );
}
