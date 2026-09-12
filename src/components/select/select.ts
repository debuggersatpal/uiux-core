import { BaseElement } from '../../utilities/BaseElement';
export class UiSelect extends BaseElement {
  static get observedAttributes() { return ['disabled', 'required', 'aria-label', 'aria-labelledby']; }

  get disabled() { return this.hasAttribute('disabled'); }
  set disabled(val) { if (val) this.setAttribute('disabled', ''); else this.removeAttribute('disabled'); }

  get value() {
    const select = this.querySelector('select');
    return select ? select.value : '';
  }

  render() {
    if (!this.querySelector('select')) {
      const select = document.createElement('select');
      select.className = 'ui-input-field ui-select-field';
      select.id = `ui-select-${Math.random().toString(36).substring(2, 11)}`;
      while (this.childNodes.length > 0) select.appendChild(this.childNodes[0]);
      this.appendChild(select);
    }
    
    const select = this.querySelector('select')!;
    select.disabled = this.hasAttribute('disabled');
    select.required = this.hasAttribute('required');
    
    ['aria-label', 'aria-labelledby'].forEach(attr => {
      if (this.hasAttribute(attr)) select.setAttribute(attr, this.getAttribute(attr)!);
      else select.removeAttribute(attr);
    });
  }
}
