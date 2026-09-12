import { BaseElement } from '../../utilities/BaseElement';
export class UiStack extends BaseElement {
  static get observedAttributes() { return ['direction', 'gap', 'align', 'justify', 'wrap']; }
  render() {
    const direction = this.getAttribute('direction') || 'col';
    const gap = this.getAttribute('gap') || 'md';
    const align = this.getAttribute('align') || '';
    const justify = this.getAttribute('justify') || '';
    const wrap = this.hasAttribute('wrap');
    
    if (!this.querySelector('.ui-stack')) {
      const div = document.createElement('div');
      while(this.childNodes.length > 0) div.appendChild(this.childNodes[0]);
      this.appendChild(div);
    }
    const div = this.querySelector('div')!;
    div.className = `ui-element ui-stack ui-stack--${direction} ui-stack--gap-${gap}`;
    if (align) div.classList.add(`ui-stack--align-${align}`);
    if (justify) div.classList.add(`ui-stack--justify-${justify}`);
    if (wrap) div.classList.add('ui-stack--wrap');
  }
}