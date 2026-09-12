import { BaseElement } from '../../utilities/BaseElement';
export class UiSkeleton extends BaseElement {
  static get observedAttributes() { return ['width', 'height', 'variant']; }
  render() {
    if (!this.querySelector('div')) {
      const div = document.createElement('div');
      this.appendChild(div);
    }
    const div = this.querySelector('div')!;
    const variant = this.getAttribute('variant') || 'rect';
    div.className = `ui-element ui-skeleton ui-skeleton--${variant}`;
    const w = this.getAttribute('width');
    const h = this.getAttribute('height');
    if (w) div.style.width = w;
    if (h) div.style.height = h;
  }
}