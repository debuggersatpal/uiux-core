import { BaseElement } from '../../utilities/BaseElement';
export class UiCard extends BaseElement {
  static get observedAttributes() { return ['interactive']; }
  render() {
    if (!this.querySelector('.ui-card')) {
      const div = document.createElement('div');
      while(this.childNodes.length > 0) div.appendChild(this.childNodes[0]);
      this.appendChild(div);
    }
    const div = this.querySelector('.ui-card') || this.querySelector('div')!;
    const isInteractive = this.hasAttribute('interactive');
    div.className = `ui-element ui-card ${isInteractive ? 'ui-card--interactive' : ''}`;
  }
}
