import { BaseElement } from '../../utilities/BaseElement';
export class UiToast extends BaseElement {
  static get observedAttributes() { return ['variant', 'duration']; }
  render() {
    const variant = this.getAttribute('variant') || 'info';
    if (!this.querySelector('.ui-toast')) {
      const wrapper = document.createElement('div');
      wrapper.setAttribute('role', 'alert');
      wrapper.setAttribute('aria-live', 'assertive');
      while(this.childNodes.length > 0) wrapper.appendChild(this.childNodes[0]);
      this.appendChild(wrapper);
      
      const duration = this.getAttribute('duration');
      if (duration) {
        setTimeout(() => this.remove(), parseInt(duration, 10));
      }
    }
    const wrapper = this.querySelector('div')!;
    wrapper.className = `ui-element ui-toast ui-toast--${variant}`;
  }
}