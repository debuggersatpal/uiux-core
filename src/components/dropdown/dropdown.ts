import { BaseElement } from '../../utilities/BaseElement';
export class UiDropdown extends BaseElement {
  render() {
    if (!this.querySelector('.ui-dropdown')) {
      const wrapper = document.createElement('div');
      wrapper.className = 'ui-element ui-dropdown';
      while(this.childNodes.length > 0) wrapper.appendChild(this.childNodes[0]);
      this.appendChild(wrapper);
      
      const trigger = wrapper.querySelector('[slot="trigger"]');
      const menu = wrapper.querySelector('[slot="menu"]');
      if (trigger && menu) {
        menu.classList.add('ui-dropdown-menu');
        trigger.addEventListener('click', (e) => {
          menu.classList.toggle('ui-dropdown-menu--open');
        });
        document.addEventListener('click', (e) => {
          if (!this.contains(e.target as Node)) menu.classList.remove('ui-dropdown-menu--open');
        });
        this.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') menu.classList.remove('ui-dropdown-menu--open');
        });
      }
    }
  }
}