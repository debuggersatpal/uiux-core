import { BaseElement } from '../../utilities/BaseElement';
export class UiBreadcrumb extends BaseElement {
  render() {
    if (!this.querySelector('nav')) {
      const nav = document.createElement('nav');
      nav.setAttribute('aria-label', 'Breadcrumb');
      nav.className = 'ui-element';
      const ol = document.createElement('ol');
      ol.className = 'ui-breadcrumb';
      while(this.childNodes.length > 0) ol.appendChild(this.childNodes[0]);
      nav.appendChild(ol);
      this.appendChild(nav);
    }
  }
}