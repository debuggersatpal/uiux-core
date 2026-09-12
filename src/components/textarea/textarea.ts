import { BaseElement } from '../../utilities/BaseElement';
export class UiTextarea extends BaseElement {
  static get observedAttributes() { return ['label', 'placeholder', 'disabled', 'required', 'readonly', 'value', 'error', 'description', 'rows']; }
  
  get disabled() { return this.hasAttribute('disabled'); }
  set disabled(val) { if (val) this.setAttribute('disabled', ''); else this.removeAttribute('disabled'); }
  get required() { return this.hasAttribute('required'); }
  set required(val) { if (val) this.setAttribute('required', ''); else this.removeAttribute('required'); }
  get readonly() { return this.hasAttribute('readonly'); }
  set readonly(val) { if (val) this.setAttribute('readonly', ''); else this.removeAttribute('readonly'); }
  get value() { 
    const input = this.querySelector('textarea');
    return input ? input.value : (this.getAttribute('value') || '');
  }
  set value(val) { 
    this.setAttribute('value', val);
    const input = this.querySelector('textarea');
    if (input) input.value = val;
  }

  render() {
    const label = this.getAttribute('label');
    const error = this.getAttribute('error');
    const description = this.getAttribute('description');
    const inputId = this.getAttribute('id') ? `${this.getAttribute('id')}-inner` : 'ui-textarea-' + Math.random().toString(36).substr(2, 9);
    
    if (!this.querySelector('textarea')) {
      this.innerHTML = `
        <div class="ui-input-wrapper ui-element">
          ${label ? `<label class="ui-input-label" for="${inputId}">${label}${this.hasAttribute('required') ? ' *' : ''}</label>` : ''}
          <textarea class="ui-input-field" id="${inputId}"></textarea>
          ${description ? `<div class="ui-input-desc">${description}</div>` : ''}
          ${error ? `<div class="ui-input-error">${error}</div>` : ''}
        </div>
      `;
    }
    
    const textarea = this.querySelector('textarea')!;
    ['placeholder', 'value', 'name', 'rows'].forEach(attr => {
      if (this.hasAttribute(attr)) textarea.setAttribute(attr, this.getAttribute(attr)!);
    });
    
    ['disabled', 'required', 'readonly'].forEach(attr => {
      if (this.hasAttribute(attr)) textarea.setAttribute(attr, '');
      else textarea.removeAttribute(attr);
    });
    
    if (error) textarea.classList.add('ui-input-field--error');
    else textarea.classList.remove('ui-input-field--error');
  }
}
