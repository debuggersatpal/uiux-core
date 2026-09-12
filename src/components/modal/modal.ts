import { BaseElement } from '../../utilities/BaseElement';
export class UiModal extends BaseElement {
  render() {
    if (!this.querySelector('dialog')) {
      const dialog = document.createElement('dialog');
      dialog.className = 'ui-element ui-modal';
      
      const content = document.createElement('div');
      content.className = 'ui-modal-content';
      while(this.childNodes.length > 0) content.appendChild(this.childNodes[0]);
      dialog.appendChild(content);
      
      this.appendChild(dialog);
      
      dialog.addEventListener('click', (e) => {
        if (e.target === dialog) this.close();
      });
    }
  }
  open() { this.querySelector('dialog')?.showModal(); }
  close() { this.querySelector('dialog')?.close(); }
}
