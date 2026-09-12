import { BaseElement } from '../../utilities/BaseElement';
export class UiDivider extends BaseElement {
  render() {
    if (!this.querySelector('hr')) {
      const hr = document.createElement('hr');
      hr.className = 'ui-element ui-divider';
      this.appendChild(hr);
    }
  }
}
