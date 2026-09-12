import { describe, it, expect, beforeAll } from 'vitest';
import { registerAll } from '../../src/index';

describe('Lifecycle & Attributes', () => {
  beforeAll(() => {
    registerAll();
  });

  it('ui-button handles disabled attribute', () => {
    const btn = document.createElement('ui-button');
    document.body.appendChild(btn);
    const nativeBtn = btn.querySelector('button');
    expect(nativeBtn).toBeTruthy();
    
    btn.setAttribute('disabled', '');
    expect(nativeBtn?.disabled).toBe(true);
    
    btn.removeAttribute('disabled');
    expect(nativeBtn?.disabled).toBe(false);
  });

  it('ui-input synchronizes attributes', () => {
    const input = document.createElement('ui-input');
    document.body.appendChild(input);
    const nativeInput = input.querySelector('input');
    
    input.setAttribute('type', 'email');
    expect(nativeInput?.getAttribute('type')).toBe('email');
    
    input.setAttribute('required', '');
    expect(nativeInput?.hasAttribute('required')).toBe(true);
  });
});
