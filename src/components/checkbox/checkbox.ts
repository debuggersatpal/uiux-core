import { BaseElement } from '../../utilities/BaseElement';
export class UiCheckbox extends BaseElement {
  static get observedAttributes() { return ['checked', 'disabled', 'required']; }
  
  get disabled() { return this.hasAttribute('disabled'); }
  set disabled(val) { if (val) this.setAttribute('disabled', ''); else this.removeAttribute('disabled'); }
  get required() { return this.hasAttribute('required'); }
  set required(val) { if (val) this.setAttribute('required', ''); else this.removeAttribute('required'); }
  get checked() { 
    const input = this.querySelector('input');
    return input ? input.checked : this.hasAttribute('checked');
  }
  set checked(val) { 
    if (val) this.setAttribute('checked', ''); else this.removeAttribute('checked');
    const input = this.querySelector('input');
    if (input) input.checked = !!val;
  }

  private observer: MutationObserver | null = null;

  connectedCallback() {
    super.connectedCallback();
    this.observer = new MutationObserver(() => this._syncAttributes());
    this.observer.observe(this, { attributes: true, attributeFilter: ['aria-label', 'aria-labelledby', 'label'] });
    this._syncAttributes();
  }

  disconnectedCallback() {
    if (this.observer) this.observer.disconnect();
  }

  render() {
    if (!this.querySelector('input')) {
      const wrapper = document.createElement('label');
      wrapper.className = 'ui-checkbox-wrapper ui-element';
      
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.className = 'ui-checkbox-input';
      
      const span = document.createElement('span');
      span.className = 'ui-checkbox-label';
      while(this.childNodes.length > 0) span.appendChild(this.childNodes[0]);
      
      wrapper.appendChild(input);
      wrapper.appendChild(span);
      this.appendChild(wrapper);
    }
    
    const input = this.querySelector('input')!;
    input.checked = this.hasAttribute('checked');
    input.disabled = this.hasAttribute('disabled');
    input.required = this.hasAttribute('required');
    this._syncAttributes();
  }

  private _syncAttributes() {
    const input = this.querySelector('input');
    if (!input) return;

    ['aria-label', 'aria-labelledby'].forEach(attr => {
      if (this.hasAttribute(attr)) input.setAttribute(attr, this.getAttribute(attr)!);
      else input.removeAttribute(attr);
    });
    
    const labelAttr = this.getAttribute('label');
    if (labelAttr) {
       const span = this.querySelector('.ui-checkbox-label');
       if (span) span.textContent = labelAttr;
       if (!input.hasAttribute('aria-label') && !input.hasAttribute('aria-labelledby')) {
         input.setAttribute('aria-label', labelAttr);
       }
    }
  }
}
