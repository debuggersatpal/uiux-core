import { BaseElement } from '../../utilities/BaseElement';
export class UiAccordion extends BaseElement {
  render() {
    if (!this.querySelector('.ui-accordion')) {
      const wrapper = document.createElement('div');
      wrapper.className = 'ui-element ui-accordion';
      while(this.childNodes.length > 0) wrapper.appendChild(this.childNodes[0]);
      this.appendChild(wrapper);
      
      const items = Array.from(wrapper.querySelectorAll('.ui-accordion-item'));
      items.forEach((item, index) => {
        const trigger = item.querySelector('.ui-accordion-trigger');
        const panel = item.querySelector('.ui-accordion-panel');
        if (trigger && panel) {
          trigger.addEventListener('click', () => {
            const isOpen = panel.classList.contains('ui-accordion-panel--open');
            panel.classList.toggle('ui-accordion-panel--open', !isOpen);
            trigger.setAttribute('aria-expanded', String(!isOpen));
          });
        }
      });
    }
  }
}