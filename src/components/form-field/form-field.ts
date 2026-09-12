import { BaseElement } from '../../utilities/BaseElement';

export class UiFormField extends BaseElement {
  private observer: MutationObserver | null = null;

  connectedCallback() {
    super.connectedCallback();
    this.observer = new MutationObserver(() => this._syncLabel());
    this.observer.observe(this, { childList: true, subtree: true, attributes: true, attributeFilter: ['id'] });
  }

  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  render() {
    if (!this.querySelector('.ui-form-label')) {
      const labelText = this.getAttribute('label');
      if (labelText) {
        const label = document.createElement('label');
        label.className = 'ui-form-label';
        label.textContent = labelText;
        this.insertBefore(label, this.firstChild);
      }
    }
    this._syncLabel();
  }

  private _syncLabel() {
    const label = this.querySelector('label.ui-form-label');
    let targetElement: Element | null = this.querySelector('input:not([type="checkbox"]):not([type="radio"]), textarea, select');
    
    if (!targetElement) {
       const customControl = this.querySelector('ui-input, ui-textarea, ui-select');
       if (customControl) {
           targetElement = customControl.querySelector('input, textarea, select');
       }
    }

    if (label && targetElement) {
      if (!targetElement.id) {
        targetElement.id = `ui-control-${Math.random().toString(36).substring(2, 11)}`;
      }
      label.setAttribute('for', targetElement.id);
    }
  }
}
