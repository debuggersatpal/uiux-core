export function registerAll() {
  if (typeof window === 'undefined') return Promise.resolve();

  return import('../components/index').then((comps) => {
    const elements: Record<string, CustomElementConstructor> = {
      'ui-button': comps.UiButton,
      'ui-icon-button': comps.UiIconButton,
      'ui-link': comps.UiLink,
      'ui-input': comps.UiInput,
      'ui-textarea': comps.UiTextarea,
      'ui-select': comps.UiSelect,
      'ui-checkbox': comps.UiCheckbox,
      'ui-radio': comps.UiRadio,
      'ui-switch': comps.UiSwitch,
      'ui-badge': comps.UiBadge,
      'ui-avatar': comps.UiAvatar,
      'ui-card': comps.UiCard,
      'ui-divider': comps.UiDivider,
      'ui-image': comps.UiImage,
      'ui-spinner': comps.UiSpinner,
      'ui-alert': comps.UiAlert,
      'ui-tooltip': comps.UiTooltip,
      'ui-modal': comps.UiModal,
      'ui-header': comps.UiHeader,
      'ui-tabs': comps.UiTabs,
      'ui-breadcrumb': comps.UiBreadcrumb,
      'ui-pagination': comps.UiPagination,
      'ui-dropdown': comps.UiDropdown,
      'ui-popover': comps.UiPopover,
      'ui-toast': comps.UiToast,
      'ui-accordion': comps.UiAccordion,
      'ui-progress': comps.UiProgress,
      'ui-skeleton': comps.UiSkeleton,
      'ui-container': comps.UiContainer,
      'ui-section': comps.UiSection,
      'ui-stack': comps.UiStack,
      'ui-grid': comps.UiGrid,
      'ui-table': comps.UiTable,
      'ui-form-field': comps.UiFormField,
    };

    for (const [tag, element] of Object.entries(elements)) {
      if (!customElements.get(tag)) customElements.define(tag, element);
    }
  }).catch((err) => {
    console.error('Failed to register @uiux/core components:', err);
  });
}
