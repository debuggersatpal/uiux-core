
export class BaseElement extends HTMLElement {
  connectedCallback() {
    if (this.render) {
      this.render();
    }
  }
  attributeChangedCallback() {
    if (this.render) {
      this.render();
    }
  }
  render?(): void;
}
