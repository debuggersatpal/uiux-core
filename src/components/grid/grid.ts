import { BaseElement } from '../../utilities/BaseElement';
export class UiGrid extends BaseElement {
  static get observedAttributes() { return ['cols', 'md-cols']; }
  render() {
    const cols = this.getAttribute('cols') || '1';
    const mdCols = this.getAttribute('md-cols');
    if (!this.querySelector('.ui-grid')) {
      const div = document.createElement('div');
      while(this.childNodes.length > 0) div.appendChild(this.childNodes[0]);
      this.appendChild(div);
    }
    const div = this.querySelector('div')!;
    div.className = `ui-element ui-grid ui-grid--cols-${cols}`;
    if (mdCols) div.classList.add(`ui-grid--md-cols-${mdCols}`);
  }
}