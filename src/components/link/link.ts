import { BaseElement } from '../../utilities/BaseElement';
export class UiLink extends BaseElement {
  static get observedAttributes() { return ['href', 'target', 'rel']; }
  render() {
    if (!this.querySelector('a')) {
      const a = document.createElement('a');
      a.className = 'ui-element ui-link-el';
      while (this.childNodes.length > 0) {
        if (this.childNodes[0] !== a) a.appendChild(this.childNodes[0]);
        else break;
      }
      this.appendChild(a);
    }
    const a = this.querySelector('a')!;
    a.href = this.getAttribute('href') || '#';
    if (this.hasAttribute('target')) a.target = this.getAttribute('target')!;
    if (this.hasAttribute('rel')) a.rel = this.getAttribute('rel')!;
  }
}
