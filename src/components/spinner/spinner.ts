import { BaseElement } from '../../utilities/BaseElement';
export class UiSpinner extends BaseElement {
  static get observedAttributes() { return ['size']; }
  render() {
    const size = this.getAttribute('size') || 'md';
    if (!this.querySelector('.ui-spinner')) {
      const span = document.createElement('span');
      span.setAttribute('role', 'status');
      span.setAttribute('aria-label', 'Loading');
      this.appendChild(span);
    }
    const span = this.querySelector('span')!;
    span.className = `ui-element ui-spinner ui-spinner--${size}`;
  }
}
