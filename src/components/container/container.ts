import { BaseElement } from '../../utilities/BaseElement';
export class UiContainer extends BaseElement {
  static get observedAttributes() { return ['size']; }
  render() {
    const size = this.getAttribute('size') || 'lg';
    if (!this.querySelector('div')) {
      const div = document.createElement('div');
      while(this.childNodes.length > 0) div.appendChild(this.childNodes[0]);
      this.appendChild(div);
    }
    const div = this.querySelector('div')!;
    div.className = `ui-element ui-container ui-container--${size}`;
  }
}