import { BaseElement } from '../../utilities/BaseElement';
export class UiAvatar extends BaseElement {
  static get observedAttributes() { return ['src', 'alt']; }
  render() {
    const src = this.getAttribute('src');
    const alt = this.getAttribute('alt') || '';
    if (!this.querySelector('.ui-avatar')) {
      const wrapper = document.createElement('div');
      wrapper.className = 'ui-element ui-avatar';
      this.appendChild(wrapper);
    }
    const wrapper = this.querySelector('.ui-avatar')!;
    if (src) {
      wrapper.innerHTML = `<img src="${src}" alt="${alt}" class="ui-avatar-img" />`;
    } else {
      wrapper.innerHTML = `<span class="ui-avatar-initials">${alt ? alt.charAt(0).toUpperCase() : '?'}</span>`;
    }
  }
}
