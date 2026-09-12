import { BaseElement } from '../../utilities/BaseElement';
export class UiTabs extends BaseElement {
  render() {
    if (!this.querySelector('.ui-tabs')) {
      const wrapper = document.createElement('div');
      wrapper.className = 'ui-element ui-tabs';
      while(this.childNodes.length > 0) wrapper.appendChild(this.childNodes[0]);
      this.appendChild(wrapper);
      
      const tabList = wrapper.querySelector('[role="tablist"]');
      if (tabList) {
        const tabs = Array.from(tabList.querySelectorAll('[role="tab"]')) as HTMLElement[];
        const panels = Array.from(wrapper.querySelectorAll('[role="tabpanel"]')) as HTMLElement[];
        tabs.forEach((tab, index) => {
          tab.classList.add('ui-tab');
          tab.addEventListener('click', () => {
            tabs.forEach(t => t.setAttribute('aria-selected', 'false'));
            panels.forEach(p => p.setAttribute('aria-hidden', 'true'));
            tab.setAttribute('aria-selected', 'true');
            if (panels[index]) panels[index].setAttribute('aria-hidden', 'false');
          });
          tab.addEventListener('keydown', (event: Event) => {
            const e = event as KeyboardEvent;
            let newIdx = index;
            if (e.key === 'ArrowRight') newIdx = (index + 1) % tabs.length;
            if (e.key === 'ArrowLeft') newIdx = (index - 1 + tabs.length) % tabs.length;
            if (newIdx !== index) { tabs[newIdx].focus(); tabs[newIdx].click(); }
          });
        });
        panels.forEach(p => p.classList.add('ui-tab-panel'));
      }
    }
  }
}
