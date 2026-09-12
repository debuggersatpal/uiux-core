import plugin from 'tailwindcss/plugin.js';

const uiuxPreset = {
  theme: {
    extend: {
      colors: {
        ui: {
          canvas: 'var(--ui-color-canvas)',
          'canvas-soft': 'var(--ui-color-canvas-soft)',
          surface: 'var(--ui-color-surface)',
          'surface-hover': 'var(--ui-color-surface-hover)',
          ink: 'var(--ui-color-ink)',
          'ink-muted': 'var(--ui-color-ink-muted)',
          line: 'var(--ui-color-line)',
          primary: 'var(--ui-color-primary)',
          'primary-hover': 'var(--ui-color-primary-hover)',
          success: 'var(--ui-color-success)',
          warning: 'var(--ui-color-warning)',
          danger: 'var(--ui-color-danger)',
          info: 'var(--ui-color-info)'
        }
      },
      spacing: {
        'ui-1': 'var(--ui-space-1)',
        'ui-2': 'var(--ui-space-2)',
        'ui-3': 'var(--ui-space-3)',
        'ui-4': 'var(--ui-space-4)',
        'ui-5': 'var(--ui-space-5)',
        'ui-6': 'var(--ui-space-6)',
        'ui-8': 'var(--ui-space-8)',
        'ui-10': 'var(--ui-space-10)'
      },
      borderRadius: {
        'ui-sm': 'var(--ui-radius-sm)',
        'ui-md': 'var(--ui-radius-md)',
        'ui-lg': 'var(--ui-radius-lg)',
        'ui-full': 'var(--ui-radius-full)'
      },
      boxShadow: {
        'ui-sm': 'var(--ui-shadow-sm)',
        'ui-md': 'var(--ui-shadow-md)',
        'ui-lg': 'var(--ui-shadow-lg)'
      },
      transitionDuration: {
        'ui-fast': 'var(--ui-motion-duration-fast)',
        'ui-normal': 'var(--ui-motion-duration-normal)'
      },
      transitionTimingFunction: {
        'ui-standard': 'var(--ui-motion-ease-standard)'
      }
    }
  }
};

export default uiuxPreset;
