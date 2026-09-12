import { BaseElement } from '../../utilities/BaseElement';
export class UiImage extends BaseElement {
  static get observedAttributes() { return ['src', 'alt', 'loading', 'aspect-ratio']; }
  render() {
    const src = this.getAttribute('src');
    if (!this.querySelector('img') && src) {
      const wrapper = document.createElement('div');
      wrapper.className = 'ui-image-wrapper ui-element';
      const img = document.createElement('img');
      wrapper.appendChild(img);
      this.appendChild(wrapper);
    }
    const img = this.querySelector('img');
    const wrapper = this.querySelector('.ui-image-wrapper') as HTMLElement;
    if (img && wrapper) {
      img.src = src!;
      img.alt = this.getAttribute('alt') || '';
      if (this.hasAttribute('loading')) img.setAttribute('loading', this.getAttribute('loading')!);
      const ratio = this.getAttribute('aspect-ratio');
      if (ratio) {
        wrapper.style.aspectRatio = ratio;
        img.style.objectFit = 'cover';
      }
    }
  }
}
