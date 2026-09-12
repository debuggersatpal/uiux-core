import { BaseElement } from '../../utilities/BaseElement';
export class UiInput extends BaseElement {
  static get observedAttributes() { return ['label', 'placeholder', 'type', 'disabled', 'required', 'readonly', 'value', 'error', 'description']; }
  
  get disabled() { return this.hasAttribute('disabled'); }
  set disabled(val) { if (val) this.setAttribute('disabled', ''); else this.removeAttribute('disabled'); }
  get required() { return this.hasAttribute('required'); }
  set required(val) { if (val) this.setAttribute('required', ''); else this.removeAttribute('required'); }
  get readonly() { return this.hasAttribute('readonly'); }
  set readonly(val) { if (val) this.setAttribute('readonly', ''); else this.removeAttribute('readonly'); }
  get value() { 
    const input = this.querySelector('input');
    return input ? input.value : (this.getAttribute('value') || '');
  }
  set value(val) { 
    this.setAttribute('value', val);
    const input = this.querySelector('input');
    if (input) input.value = val;
  }

  render() {
    const label = this.getAttribute('label');
    const error = this.getAttribute('error');
    const description = this.getAttribute('description');
    const inputId = this.getAttribute('id') ? `${this.getAttribute('id')}-inner` : 'ui-input-' + Math.random().toString(36).substr(2, 9);
    
    if (!this.querySelector('input')) {
      this.innerHTML = `
        <div class="ui-input-wrapper ui-element">
          ${label ? `<label class="ui-input-label" for="${inputId}">${label}${this.hasAttribute('required') ? ' *' : ''}</label>` : ''}
          <input class="ui-input-field" id="${inputId}" />
          ${description ? `<div class="ui-input-desc">${description}</div>` : ''}
          ${error ? `<div class="ui-input-error">${error}</div>` : ''}
        </div>
      `;
    }
    
    const input = this.querySelector('input')!;
    const wrapper = this.querySelector('.ui-input-wrapper')!;
    
    // Update input attributes
    const attrs = ['type', 'placeholder', 'value', 'name', 'autocomplete'];
    attrs.forEach(attr => {
      if (this.hasAttribute(attr)) input.setAttribute(attr, this.getAttribute(attr)!);
      else input.removeAttribute(attr);
    });
    
    ['disabled', 'required', 'readonly'].forEach(attr => {
      if (this.hasAttribute(attr)) input.setAttribute(attr, '');
      else input.removeAttribute(attr);
    });
    
    if (error) input.classList.add('ui-input-field--error');
    else input.classList.remove('ui-input-field--error');
  }
}
