import uiuxPreset from '@uiux/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [uiuxPreset],
  theme: {
    extend: {},
  },
  plugins: [],
}
