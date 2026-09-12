import { BaseElement } from '../../utilities/BaseElement';
export class UiBadge extends BaseElement {
  static get observedAttributes() { return ['variant']; }
  render() {
    const variant = this.getAttribute('variant') || 'neutral';
    if (!this.querySelector('span')) {
      const span = document.createElement('span');
      while(this.childNodes.length > 0) span.appendChild(this.childNodes[0]);
      this.appendChild(span);
    }
    const span = this.querySelector('span')!;
    span.className = `ui-element ui-badge ui-badge--${variant}`;
  }
}
