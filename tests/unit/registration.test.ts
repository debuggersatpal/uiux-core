import { describe, it, expect, beforeEach } from 'vitest';
import { registerAll } from '../../src/index';

const components = [
  'ui-button', 'ui-icon-button', 'ui-link', 'ui-input', 'ui-textarea', 
  'ui-select', 'ui-checkbox', 'ui-radio', 'ui-switch', 'ui-badge', 
  'ui-avatar', 'ui-card', 'ui-divider', 'ui-image', 'ui-spinner', 
  'ui-alert', 'ui-tooltip', 'ui-modal'
];

describe('Registration', () => {
  it('registers all components idempotently', async () => {
    await registerAll();
    await registerAll(); // Should not throw
    
    for (const comp of components) {
      expect(customElements.get(comp)).toBeDefined();
    }
  });

  it('upgrades existing elements', async () => {
    const el = document.createElement('ui-button');
    document.body.appendChild(el);
    await registerAll();
    expect(el.constructor.name).toBe('UiButton');
  });
});
