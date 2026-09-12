import { BaseElement } from '../../utilities/BaseElement';
export class UiPagination extends BaseElement {
  render() {
    if (!this.querySelector('nav')) {
      const nav = document.createElement('nav');
      nav.setAttribute('aria-label', 'Pagination');
      nav.className = 'ui-element';
      const ul = document.createElement('ul');
      ul.className = 'ui-pagination';
      while(this.childNodes.length > 0) ul.appendChild(this.childNodes[0]);
      nav.appendChild(ul);
      this.appendChild(nav);
    }
  }
}