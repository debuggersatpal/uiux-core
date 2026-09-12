import { BaseElement } from '../../utilities/BaseElement';
export class UiTooltip extends BaseElement {
  static get observedAttributes() { return ['text']; }
  render() {
    const text = this.getAttribute('text') || '';
    if (!this.querySelector('.ui-tooltip-wrapper')) {
      const wrapper = document.createElement('div');
      wrapper.className = 'ui-tooltip-wrapper ui-element';
      
      const content = document.createElement('div');
      content.className = 'ui-tooltip-content';
      content.setAttribute('role', 'tooltip');
      
      while(this.childNodes.length > 0) wrapper.appendChild(this.childNodes[0]);
      
      wrapper.appendChild(content);
      this.appendChild(wrapper);
      
      // Accessibility & hover
      wrapper.addEventListener('mouseenter', () => content.classList.add('ui-tooltip-content--visible'));
      wrapper.addEventListener('mouseleave', () => content.classList.remove('ui-tooltip-content--visible'));
      wrapper.addEventListener('focusin', () => content.classList.add('ui-tooltip-content--visible'));
      wrapper.addEventListener('focusout', () => content.classList.remove('ui-tooltip-content--visible'));
      wrapper.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') content.classList.remove('ui-tooltip-content--visible');
      });
    }
    const content = this.querySelector('.ui-tooltip-content')!;
    content.textContent = text;
  }
}
