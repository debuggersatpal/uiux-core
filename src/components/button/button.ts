import { BaseElement } from '../../utilities/BaseElement';
export class UiButton extends BaseElement {
  static get observedAttributes() { return ['variant', 'size', 'disabled', 'loading']; }
  
  
  get disabled() { return this.hasAttribute('disabled'); }
  set disabled(val) { if (val) this.setAttribute('disabled', ''); else this.removeAttribute('disabled'); }
  get loading() { return this.hasAttribute('loading'); }
  set loading(val) { if (val) this.setAttribute('loading', ''); else this.removeAttribute('loading'); }
  
  render() {
    const variant = this.getAttribute('variant') || 'default';
    const size = this.getAttribute('size') || 'md';
    const disabled = this.hasAttribute('disabled');
    const loading = this.hasAttribute('loading');
    
    if (!this.querySelector('button')) {
      const btn = document.createElement('button');
      btn.className = 'ui-element';
      while (this.childNodes.length > 0) {
        if (this.childNodes[0] !== btn) {
          btn.appendChild(this.childNodes[0]);
        } else {
          break;
        }
      }
      this.appendChild(btn);
    }
    
    const btn = this.querySelector('button')!;
    btn.className = `ui-element ui-btn ui-btn--${variant} ui-btn--${size} ${loading ? 'ui-btn--loading' : ''}`;
    btn.disabled = disabled || loading;
    
    // Manage loading spinner
    let spinner = btn.querySelector('.ui-btn-spinner');
    if (loading && !spinner) {
      spinner = document.createElement('span');
      spinner.className = 'ui-btn-spinner';
      spinner.innerHTML = '<ui-spinner size="sm"></ui-spinner>';
      btn.prepend(spinner);
    } else if (!loading && spinner) {
      spinner.remove();
    }
  }
}
