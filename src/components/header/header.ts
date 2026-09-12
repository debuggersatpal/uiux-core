import { BaseElement } from '../../utilities/BaseElement';
export class UiHeader extends BaseElement {
  render() {
    if (!this.querySelector('header')) {
      const header = document.createElement('header');
      header.className = 'ui-element ui-header';
      while(this.childNodes.length > 0) header.appendChild(this.childNodes[0]);
      this.appendChild(header);
    }
  }
}