"use client";
import { useEffect } from 'react';
import { registerAll } from "@uiux/core";

export default function Home() {
  useEffect(() => {
    registerAll();
  }, []);

  return (
    <main className="bg-ui-canvas-soft min-h-screen p-ui-8 font-sans flex items-center justify-center">
      <div className="w-full max-w-lg">
        <h1 className="text-ui-primary text-2xl mb-ui-4">Next.js + Tailwind Integration</h1>
        
        <ui-card class="p-ui-6 shadow-ui-lg rounded-ui-lg">
          <h2 className="mt-0 mb-ui-4 text-ui-ink">Create Account</h2>
          <div className="flex flex-col gap-ui-4">
            <ui-input label="Email" type="email" placeholder="you@example.com"></ui-input>
            <ui-input label="Password" type="password" placeholder="••••••••"></ui-input>
            <ui-button class="w-full md:w-auto" variant="primary">Sign Up</ui-button>
          </div>
        </ui-card>
      </div>
    </main>
  );
}
