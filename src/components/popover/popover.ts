import { BaseElement } from '../../utilities/BaseElement';
export class UiPopover extends BaseElement {
  render() {
    if (!this.querySelector('.ui-popover')) {
      const wrapper = document.createElement('div');
      wrapper.className = 'ui-element ui-popover';
      while(this.childNodes.length > 0) wrapper.appendChild(this.childNodes[0]);
      this.appendChild(wrapper);
      
      const trigger = wrapper.querySelector('[slot="trigger"]');
      const content = wrapper.querySelector('[slot="content"]');
      if (trigger && content) {
        content.classList.add('ui-popover-content');
        trigger.addEventListener('click', (e) => {
          content.classList.toggle('ui-popover-content--open');
        });
        document.addEventListener('click', (e) => {
          if (!this.contains(e.target as Node)) content.classList.remove('ui-popover-content--open');
        });
        this.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') content.classList.remove('ui-popover-content--open');
        });
      }
    }
  }
}