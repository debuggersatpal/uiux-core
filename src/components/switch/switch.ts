import { BaseElement } from '../../utilities/BaseElement';
export class UiSwitch extends BaseElement {
  static get observedAttributes() { return ['checked', 'disabled', 'aria-label', 'aria-labelledby']; }
  
  get disabled() { return this.hasAttribute('disabled'); }
  set disabled(val) { if (val) this.setAttribute('disabled', ''); else this.removeAttribute('disabled'); }
  get checked() { 
    const btn = this.querySelector('button');
    return btn ? btn.getAttribute('aria-checked') === 'true' : this.hasAttribute('checked');
  }
  set checked(val) { 
    if (val) this.setAttribute('checked', ''); else this.removeAttribute('checked');
    const btn = this.querySelector('button');
    if (btn) {
       btn.setAttribute('aria-checked', String(!!val));
       if (val) btn.classList.add('ui-switch-btn--checked');
       else btn.classList.remove('ui-switch-btn--checked');
    }
  }

  render() {
    if (!this.querySelector('button')) {
      const wrapper = document.createElement('label');
      wrapper.className = 'ui-switch-wrapper ui-element';
      
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.role = 'switch';
      btn.className = 'ui-switch-btn';
      
      const thumb = document.createElement('span');
      thumb.className = 'ui-switch-thumb';
      btn.appendChild(thumb);
      
      btn.addEventListener('click', (e) => {
        // Prevent label click from firing twice if it wraps the button
        e.preventDefault();
        
        if (this.hasAttribute('disabled')) return;
        const isChecked = this.hasAttribute('checked');
        if (isChecked) this.removeAttribute('checked');
        else this.setAttribute('checked', '');
        
        // Dispatch change event
        this.dispatchEvent(new Event('change', { bubbles: true }));
      });
      
      const span = document.createElement('span');
      span.className = 'ui-switch-label';
      while(this.childNodes.length > 0) span.appendChild(this.childNodes[0]);
      
      wrapper.appendChild(btn);
      wrapper.appendChild(span);
      this.appendChild(wrapper);
    }
    const btn = this.querySelector('button')!;
    const isChecked = this.hasAttribute('checked');
    btn.setAttribute('aria-checked', String(isChecked));
    btn.disabled = this.hasAttribute('disabled');
    if (isChecked) btn.classList.add('ui-switch-btn--checked');
    else btn.classList.remove('ui-switch-btn--checked');
    
    // Propagate aria labels
    ['aria-label', 'aria-labelledby'].forEach(attr => {
      if (this.hasAttribute(attr)) btn.setAttribute(attr, this.getAttribute(attr)!);
      else btn.removeAttribute(attr);
    });
  }
}
