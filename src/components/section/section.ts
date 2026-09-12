import { BaseElement } from '../../utilities/BaseElement';
export class UiSection extends BaseElement {
  render() {
    if (!this.querySelector('section')) {
      const section = document.createElement('section');
      section.className = 'ui-element ui-section';
      while(this.childNodes.length > 0) section.appendChild(this.childNodes[0]);
      this.appendChild(section);
    }
  }
}