import uiuxPreset from '@uiux/tailwind';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [uiuxPreset],
  theme: {
    extend: {},
  },
  plugins: [],
}
