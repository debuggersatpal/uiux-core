type UiuxBaseProps<T = {}> = {
  id?: string;
  className?: string;
  class?: string;
  style?: string | Record<string, string | number>;
  slot?: string;
  part?: string;
  children?: any;
  ref?: any;
  key?: any;
  dangerouslySetInnerHTML?: any;
  role?: string;
  onClick?: any;
  onChange?: any;
  onInput?: any;
  onFocus?: any;
  onBlur?: any;
  onKeyDown?: any;
  onKeyUp?: any;
  onclick?: any;
  onchange?: any;
  oninput?: any;
  onfocus?: any;
  onblur?: any;
  onkeydown?: any;
  onkeyup?: any;
  [key: `aria-${string}`]: any;
  [key: `data-${string}`]: any;
} & T;

export interface UiuxElements {
  'ui-button': UiuxBaseProps<{ variant?: 'default' | 'primary' | string; size?: 'sm' | 'md' | string; disabled?: boolean | string; loading?: boolean | string }>;
  'ui-icon-button': UiuxBaseProps<{ variant?: 'default' | 'primary' | string; size?: 'sm' | 'md' | string; disabled?: boolean | string; 'aria-label'?: string }>;
  'ui-link': UiuxBaseProps<{ href?: string; target?: string; rel?: string }>;
  'ui-input': UiuxBaseProps<{ label?: string; placeholder?: string; type?: string; value?: string; error?: string; description?: string; disabled?: boolean | string; required?: boolean | string; readonly?: boolean | string; name?: string; autocomplete?: string }>;
  'ui-textarea': UiuxBaseProps<{ label?: string; placeholder?: string; value?: string; error?: string; description?: string; rows?: string | number; disabled?: boolean | string; required?: boolean | string; readonly?: boolean | string; name?: string }>;
  'ui-select': UiuxBaseProps<{ label?: string; value?: string; error?: string; description?: string; disabled?: boolean | string; required?: boolean | string; name?: string }>;
  'ui-checkbox': UiuxBaseProps<{ checked?: boolean | string; disabled?: boolean | string; required?: boolean | string; label?: string; "aria-label"?: string; "aria-labelledby"?: string }>;
  'ui-radio': UiuxBaseProps<{ name?: string; value?: string; checked?: boolean | string; disabled?: boolean | string; "aria-label"?: string; "aria-labelledby"?: string; label?: string }>;
  'ui-switch': UiuxBaseProps<{ checked?: boolean | string; disabled?: boolean | string; "aria-label"?: string; "aria-labelledby"?: string }>;
  'ui-badge': UiuxBaseProps<{ variant?: 'neutral' | 'info' | 'success' | 'warning' | 'error' | string }>;
  'ui-avatar': UiuxBaseProps<{ src?: string; alt?: string }>;
  'ui-card': UiuxBaseProps<{ interactive?: boolean | string }>;
  'ui-divider': UiuxBaseProps<{}>;
  'ui-image': UiuxBaseProps<{ src?: string; alt?: string; loading?: 'lazy' | 'eager' | string; 'aspect-ratio'?: string }>;
  'ui-spinner': UiuxBaseProps<{ size?: 'sm' | 'md' | string }>;
  'ui-alert': UiuxBaseProps<{ variant?: 'info' | 'success' | 'warning' | 'error' | string }>;
  'ui-tooltip': UiuxBaseProps<{ text?: string }>;
  'ui-modal': UiuxBaseProps<{}>;
  'ui-header': UiuxBaseProps<{}>;
  'ui-tabs': UiuxBaseProps<{}>;
  'ui-breadcrumb': UiuxBaseProps<{}>;
  'ui-pagination': UiuxBaseProps<{}>;
  'ui-dropdown': UiuxBaseProps<{}>;
  'ui-popover': UiuxBaseProps<{}>;
  'ui-toast': UiuxBaseProps<{ variant?: 'info' | 'success' | 'warning' | 'error' | string; duration?: string | number }>;
  'ui-accordion': UiuxBaseProps<{}>;
  'ui-progress': UiuxBaseProps<{ value?: string | number; max?: string | number }>;
  'ui-skeleton': UiuxBaseProps<{ width?: string; height?: string; variant?: 'rect' | 'circle' | string }>;
  'ui-container': UiuxBaseProps<{ size?: 'sm' | 'md' | 'lg' | 'xl' | string }>;
  'ui-section': UiuxBaseProps<{}>;
  'ui-stack': UiuxBaseProps<{ direction?: 'row' | 'col' | string; gap?: 'sm' | 'md' | 'lg' | string; align?: 'start' | 'center' | 'end' | string; justify?: 'between' | 'center' | string; wrap?: boolean | string }>;
  'ui-grid': UiuxBaseProps<{ cols?: string | number; 'md-cols'?: string | number }>;
  'ui-table': UiuxBaseProps<{}>;
  'ui-form-field': UiuxBaseProps<{ label?: string; error?: string; description?: string; required?: boolean | string }>;
}

declare global {
  namespace JSX {
    interface IntrinsicElements extends UiuxElements {}
  }
  namespace React {
    namespace JSX {
      interface IntrinsicElements extends UiuxElements {}
    }
  }
}
