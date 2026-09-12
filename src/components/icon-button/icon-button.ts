import { BaseElement } from '../../utilities/BaseElement';
export class UiIconButton extends BaseElement {
  static get observedAttributes() { return ['variant', 'size', 'disabled', 'aria-label']; }
  
  get disabled() { return this.hasAttribute('disabled'); }
  set disabled(val) { if (val) this.setAttribute('disabled', ''); else this.removeAttribute('disabled'); }
  render() {
    const variant = this.getAttribute('variant') || 'default';
    const size = this.getAttribute('size') || 'md';
    const disabled = this.hasAttribute('disabled');
    const ariaLabel = this.getAttribute('aria-label') || '';
    
    if (!this.querySelector('button')) {
      const btn = document.createElement('button');
      btn.className = 'ui-element';
      while (this.childNodes.length > 0) {
        if (this.childNodes[0] !== btn) btn.appendChild(this.childNodes[0]);
        else break;
      }
      this.appendChild(btn);
    }
    const btn = this.querySelector('button')!;
    btn.className = `ui-element ui-icon-btn ui-icon-btn--${variant} ui-icon-btn--${size}`;
    btn.disabled = disabled;
    if (ariaLabel) btn.setAttribute('aria-label', ariaLabel);
  }
}
