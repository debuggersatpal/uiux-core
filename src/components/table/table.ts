import { BaseElement } from '../../utilities/BaseElement';
export class UiTable extends BaseElement {
  render() {
    if (!this.querySelector('.ui-table-wrapper')) {
      const wrapper = document.createElement('div');
      wrapper.className = 'ui-table-wrapper ui-element';
      
      const table = this.querySelector('table');
      if (table) {
        table.classList.add('ui-table');
        this.insertBefore(wrapper, table);
        wrapper.appendChild(table);
      }
    }
  }
}