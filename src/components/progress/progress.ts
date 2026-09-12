import { BaseElement } from '../../utilities/BaseElement';
export class UiProgress extends BaseElement {
  static get observedAttributes() { return ['value', 'max']; }
  render() {
    const value = this.getAttribute('value');
    const max = this.getAttribute('max') || '100';
    if (!this.querySelector('progress')) {
      const prog = document.createElement('progress');
      prog.className = 'ui-element ui-progress';
      this.appendChild(prog);
    }
    const prog = this.querySelector('progress')!;
    prog.max = parseFloat(max);
    if (value !== null) prog.value = parseFloat(value);
    else prog.removeAttribute('value');
  }
}