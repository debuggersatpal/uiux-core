import { BaseElement } from '../../utilities/BaseElement';
export class UiAlert extends BaseElement {
  static get observedAttributes() { return ['variant']; }
  render() {
    const variant = this.getAttribute('variant') || 'info';
    if (!this.querySelector('.ui-alert')) {
      const div = document.createElement('div');
      div.setAttribute('role', 'alert');
      while(this.childNodes.length > 0) div.appendChild(this.childNodes[0]);
      this.appendChild(div);
    }
    const div = this.querySelector('div')!;
    div.className = `ui-element ui-alert ui-alert--${variant}`;
  }
}
