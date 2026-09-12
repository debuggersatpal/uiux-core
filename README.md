# @uiux/core v1.0.0

> Framework-agnostic Web Components UI library.

`@uiux/core` is a lightweight, production-grade collection of native Web Components (Custom Elements) written in TypeScript and styled with modern CSS. Build your UI once and use it seamlessly across Vanilla HTML, Next.js, Vite, Astro, or any other framework.

- **Native Web Components**: No React, Vue, or Next.js runtime dependencies.
- **Framework Independent**: Use it everywhere.
- **Light DOM Architecture**: Standard elements integrate perfectly with native forms.
- **Design Tokens**: Powerful CSS custom properties for effortless theming.

This release includes 34 complete components (18 Core + 16 Advanced UI Layer).

---

## Installation

**npm package installation:**

```bash
npm install @uiux/core
```

**local development/tarball installation:**

```bash
npm install /absolute/path/to/uiux-core-1.0.0.tgz
```

---

## Quick Start

```ts
import { registerAll } from "@uiux/core";
import "@uiux/core/styles.css";

// Register custom elements in the browser
registerAll();
```

Then use the elements anywhere in your HTML/JSX:

```html
<ui-container>
  <ui-section>
    <ui-card>
      <ui-badge>New</ui-badge>
      <h2>Build faster</h2>
      <p>Framework-agnostic reusable UI components.</p>
      <ui-button variant="primary">Get Started</ui-button>
    </ui-card>
  </ui-section>
</ui-container>
```

- **`registerAll()`**: Defines the Custom Elements in the browser's `customElements` registry. Without it, the browser treats them as unknown HTML tags.
- **`styles.css`**: Loads the component-specific styles and CSS custom properties (design tokens).
- **Separation**: The library intentionally separates styling from registration, ensuring your CSS loads instantly (avoiding FOUC) even before the JavaScript hydration finishes.

---

## Framework Setup

### Vanilla JavaScript

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="node_modules/@uiux/core/dist/styles.css">
  <script type="module">
    import { registerAll } from "./node_modules/@uiux/core/dist/index.js";
    registerAll();
  </script>
</head>
<body>
  <ui-button variant="primary">Vanilla JS Button</ui-button>
</body>
</html>
```

### Vite

```ts
// main.ts
import { registerAll } from "@uiux/core";
import "@uiux/core/styles.css";

registerAll();
```

```html
<!-- index.html -->
<ui-alert variant="info">Hello from Vite!</ui-alert>
```

### Next.js

Next.js evaluates modules on the server where browser APIs (`HTMLElement`, `customElements`) do not exist. `@uiux/core` is explicitly designed with a safe registration boundary.

1. **Global CSS**: Load styles in your `app/layout.tsx`.
2. **Client Component**: Execute `registerAll()` dynamically in a `"use client"` boundary.

```tsx
// app/layout.tsx
import "@uiux/core/styles.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

```tsx
// app/page.tsx
"use client";

import { useEffect } from "react";
import { registerAll } from "@uiux/core";

export default function Page() {
  useEffect(() => {
    // Only fires in the browser after hydration
    registerAll();
  }, []);

  return (
    <main>
      <ui-button variant="primary">
        Get Started
      </ui-button>
    </main>
  );
}
```

```text
Next.js server
     ↓
safe package import (Component classes are NOT eagerly evaluated)
     ↓
browser hydration
     ↓
registerAll()
     ↓
Custom Elements registered dynamically
```

### Astro

Astro naturally supports Web Components. Load styles in your layout, and use a `<script>` tag for registration.

```astro
---
// Layout.astro
import "@uiux/core/styles.css";
---
<html>
  <body>
    <slot />
    <script>
      import { registerAll } from "@uiux/core";
      registerAll();
    </script>
  </body>
</html>
```

---

## Core Components (18)

| Component | Element | Component | Element |
|---|---|---|---|
| Button | `<ui-button>` | Avatar | `<ui-avatar>` |
| Icon Button | `<ui-icon-button>` | Card | `<ui-card>` |
| Link | `<ui-link>` | Divider | `<ui-divider>` |
| Input | `<ui-input>` | Image | `<ui-image>` |
| Textarea | `<ui-textarea>` | Spinner | `<ui-spinner>` |
| Select | `<ui-select>` | Alert | `<ui-alert>` |
| Checkbox | `<ui-checkbox>` | Tooltip | `<ui-tooltip>` |
| Radio | `<ui-radio>` | Modal | `<ui-modal>` |
| Switch | `<ui-switch>` | Badge | `<ui-badge>` |

## Advanced Components (16)

| Component | Element | Component | Element |
|---|---|---|---|
| Header | `<ui-header>` | Progress | `<ui-progress>` |
| Tabs | `<ui-tabs>` | Skeleton | `<ui-skeleton>` |
| Breadcrumb | `<ui-breadcrumb>` | Container | `<ui-container>` |
| Pagination | `<ui-pagination>` | Section | `<ui-section>` |
| Dropdown | `<ui-dropdown>` | Stack | `<ui-stack>` |
| Popover | `<ui-popover>` | Grid | `<ui-grid>` |
| Toast | `<ui-toast>` | Table | `<ui-table>` |
| Accordion | `<ui-accordion>` | Form Field | `<ui-form-field>` |

---

## API Documentation: Core Components

### `<ui-button>`
**Purpose:** A versatile, interactive button element.
**Basic usage:**
```html
<ui-button variant="primary" size="md">Click Me</ui-button>
```
| Attribute | Type | Default | Description |
|---|---|---|---|
| `variant` | `default` \| `primary` | `default` | Visual button style. |
| `size` | `sm` \| `md` | `md` | Size of the button. |
| `disabled` | boolean | false | Disables interactions. |
| `loading` | boolean | false | Displays a spinner and prevents interaction. |

| Property | Type | Description |
|---|---|---|
| `disabled` | boolean | Gets/sets the disabled state dynamically. |
| `loading` | boolean | Gets/sets the loading state dynamically. |

### `<ui-icon-button>`
**Purpose:** A button specifically sized for icons.
| Attribute | Type | Default | Description |
|---|---|---|---|
| `variant` | `default` \| `primary` | `default` | Visual button style. |
| `size` | `sm` \| `md` | `md` | Sizing block. |
| `disabled` | boolean | false | Disables interactions. |
| `aria-label` | string | `""` | Essential for screen readers. |

| Property | Type | Description |
|---|---|---|
| `disabled` | boolean | Gets/sets the disabled state dynamically. |

### `<ui-link>`
**Purpose:** Text hyperlinks wrapping `<a>` tags.
| Attribute | Type | Default | Description |
|---|---|---|---|
| `href` | string | `#` | URL destination. |
| `target` | string | `""` | Target browsing context (e.g., `_blank`). |
| `rel` | string | `""` | Relationship (e.g., `noopener`). |

### `<ui-input>`
**Purpose:** A standard text input field with labels and validation styling.
| Attribute | Type | Default | Description |
|---|---|---|---|
| `label` | string | `""` | Associates a visible label. |
| `placeholder` | string | `""` | Input placeholder text. |
| `type` | string | `""` | The HTML input type (text, email, password, etc). |
| `value` | string | `""` | The initial value of the input. |
| `error` | string | `""` | Displays an error message below the input. |
| `description` | string | `""` | Displays helper text below the input. |
| `disabled` | boolean | false | Disables the field. |
| `required` | boolean | false | Marks the field as required. |
| `readonly` | boolean | false | Makes the field read-only. |
| `name` | string | `""` | Form submission name. |
| `autocomplete`| string | `""` | Autocomplete hints. |

| Property | Type | Description |
|---|---|---|
| `value` | string | Gets/sets the current active value of the native inner `<input>`. |
| `disabled` | boolean | Gets/sets the disabled state dynamically. |
| `required` | boolean | Gets/sets the required state dynamically. |
| `readonly` | boolean | Gets/sets the readonly state dynamically. |

### `<ui-textarea>`
**Purpose:** A multi-line text input field.
| Attribute | Type | Default | Description |
|---|---|---|---|
| `label` | string | `""` | Associates a visible label. |
| `placeholder` | string | `""` | Input placeholder text. |
| `value` | string | `""` | Initial textarea value. |
| `error` | string | `""` | Error message string. |
| `description` | string | `""` | Helper description text. |
| `rows` | string | `""` | Native rows height. |
| `disabled` | boolean | false | Disables the field. |
| `required` | boolean | false | Marks the field as required. |
| `readonly` | boolean | false | Makes the field read-only. |
| `name` | string | `""` | Form submission name. |

| Property | Type | Description |
|---|---|---|
| `value` | string | Gets/sets the current active value. |
| `disabled` | boolean | Gets/sets the disabled state dynamically. |
| `required` | boolean | Gets/sets the required state dynamically. |
| `readonly` | boolean | Gets/sets the readonly state dynamically. |

### `<ui-select>`
**Purpose:** A native dropdown select element.
| Attribute | Type | Default | Description |
|---|---|---|---|
| `label` | string | `""` | Visible label for the dropdown. |
| `value` | string | `""` | Pre-selects a matching option by value. |
| `error` | string | `""` | Error message string. |
| `description` | string | `""` | Helper description text. |
| `disabled` | boolean | false | Disables the field. |
| `required` | boolean | false | Marks the field as required. |
| `name` | string | `""` | Form submission name. |

| Property | Type | Description |
|---|---|---|
| `value` | string | Gets/sets the currently selected value. |
| `disabled` | boolean | Gets/sets the disabled state. |
| `required` | boolean | Gets/sets the required state. |

### `<ui-checkbox>`
**Purpose:** A standard checkbox element.
| Attribute | Type | Default | Description |
|---|---|---|---|
| `checked` | boolean | false | Determines initial checked state. |
| `disabled` | boolean | false | Disables the checkbox. |
| `required` | boolean | false | Marks the field as required for form validation. |

| Property | Type | Description |
|---|---|---|
| `checked` | boolean | Gets/sets the live checked state of the input. |
| `disabled` | boolean | Gets/sets the disabled state. |
| `required` | boolean | Gets/sets the required state. |

### `<ui-radio>`
**Purpose:** Radio buttons for single-select choices.
| Attribute | Type | Default | Description |
|---|---|---|---|
| `name` | string | `""` | Groups radios together. |
| `value` | string | `""` | Form submission value. |
| `checked` | boolean | false | Initial checked state. |
| `disabled` | boolean | false | Disables the radio button. |

| Property | Type | Description |
|---|---|---|
| `value` | string | Gets/sets the value. |
| `checked` | boolean | Gets/sets the live checked state. |
| `disabled` | boolean | Gets/sets the disabled state. |

### `<ui-switch>`
**Purpose:** A boolean toggle switch.
| Attribute | Type | Default | Description |
|---|---|---|---|
| `checked` | boolean | false | State of the toggle switch. |
| `disabled` | boolean | false | Disables interactions. |

| Property | Type | Description |
|---|---|---|
| `checked` | boolean | Gets/sets the live checked state of the switch. |
| `disabled` | boolean | Gets/sets the disabled state. |

| Event | Detail | Description |
|---|---|---|
| `change` | Bubbles | Fired natively when the user toggles the switch. |

### `<ui-badge>`
**Purpose:** A small status indicator.
| Attribute | Type | Default | Description |
|---|---|---|---|
| `variant` | string | `neutral` | The visual style/color of the badge (e.g. `info`). |

### `<ui-avatar>`
**Purpose:** Displays a user avatar image or fallback initials.
| Attribute | Type | Default | Description |
|---|---|---|---|
| `src` | string | `""` | URL to the avatar image. |
| `alt` | string | `""` | Accessible name. Used to calculate initial fallback if `src` is missing. |

### `<ui-card>`
**Purpose:** A basic container for grouping related content. Uses Light DOM to compose standard HTML children.
| Attribute | Type | Default | Description |
|---|---|---|---|
| `interactive` | boolean | false | Adds hover/focus elevation effects. |

### `<ui-divider>`
**Purpose:** A horizontal line separating content.

### `<ui-image>`
**Purpose:** A wrapper around `<img>` to handle aspect ratios and loading states.
| Attribute | Type | Default | Description |
|---|---|---|---|
| `src` | string | `""` | Image source URL. |
| `alt` | string | `""` | Image description. |
| `loading` | string | `""` | Native loading strategy (e.g., `lazy`). |
| `aspect-ratio`| string | `""` | Forces a specific aspect ratio, cropping via `object-fit: cover`. |

### `<ui-spinner>`
**Purpose:** An indeterminate loading indicator.
| Attribute | Type | Default | Description |
|---|---|---|---|
| `size` | `sm` \| `md` | `md` | Dimensions of the spinner. |

### `<ui-alert>`
**Purpose:** A prominent alert or banner.
| Attribute | Type | Default | Description |
|---|---|---|---|
| `variant` | string | `info` | The severity color of the alert. |

### `<ui-tooltip>`
**Purpose:** A tooltip that appears on hover or keyboard focus. Uses Light DOM content.
| Attribute | Type | Default | Description |
|---|---|---|---|
| `text` | string | `""` | The string text to display inside the tooltip. |

### `<ui-modal>`
**Purpose:** A dialog box using the native HTML `<dialog>` element.
| Method | Parameters | Return | Description |
|---|---|---|---|
| `open()` | none | void | Opens the modal and backdrop using `showModal()`. |
| `close()` | none | void | Closes the modal. |

---

## API Documentation: Advanced Components

### `<ui-header>`
**Purpose:** Reusable responsive site/application header wrapper.
**Basic usage:**
```html
<ui-header>
  <div>Brand</div>
  <nav>Links</nav>
</ui-header>
```

### `<ui-tabs>`
**Purpose:** Accessible tabs using standard ARIA attributes in Light DOM.
**Basic usage:**
```html
<ui-tabs>
  <div role="tablist">
    <button role="tab" aria-selected="true">Tab 1</button>
    <button role="tab" aria-selected="false">Tab 2</button>
  </div>
  <div role="tabpanel" aria-hidden="false">Content 1</div>
  <div role="tabpanel" aria-hidden="true">Content 2</div>
</ui-tabs>
```

### `<ui-breadcrumb>`
**Purpose:** Accessible breadcrumb navigation wrapper (`<nav aria-label="Breadcrumb">`).
**Basic usage:**
```html
<ui-breadcrumb>
  <li><ui-link href="/">Home</ui-link></li>
  <li class="ui-breadcrumb-separator">/</li>
  <li>Page</li>
</ui-breadcrumb>
```

### `<ui-pagination>`
**Purpose:** Pagination control navigation wrapper (`<nav aria-label="Pagination">`).
**Basic usage:**
```html
<ui-pagination>
  <li><button>Previous</button></li>
  <li><button aria-current="page">1</button></li>
  <li><button>Next</button></li>
</ui-pagination>
```

### `<ui-dropdown>`
**Purpose:** Accessible action dropdown.
**Basic usage:**
```html
<ui-dropdown>
  <ui-button slot="trigger">Actions</ui-button>
  <div slot="menu">
    <button>Action 1</button>
  </div>
</ui-dropdown>
```

### `<ui-popover>`
**Purpose:** Interactive contextual overlay for complex content.
**Basic usage:**
```html
<ui-popover>
  <ui-button slot="trigger">Filter</ui-button>
  <div slot="content">Form elements here</div>
</ui-popover>
```

### `<ui-toast>`
**Purpose:** Transient notification with ARIA assertive status.
**Basic usage:**
```html
<ui-toast variant="success" duration="3000">Saved successfully!</ui-toast>
```
| Attribute | Type | Default | Description |
|---|---|---|---|
| `variant` | string | `info` | Visual status (info, success, warning, error). |
| `duration` | string | `""` | Milliseconds before self-dismissal. |

### `<ui-accordion>`
**Purpose:** Expandable content blocks.
**Basic usage:**
```html
<ui-accordion>
  <div class="ui-accordion-item">
    <button class="ui-accordion-trigger" aria-expanded="false">Section 1</button>
    <div class="ui-accordion-panel">Content</div>
  </div>
</ui-accordion>
```

### `<ui-progress>`
**Purpose:** Determinate and indeterminate `<progress>` indicator.
**Basic usage:**
```html
<ui-progress value="50" max="100"></ui-progress>
```
| Attribute | Type | Default | Description |
|---|---|---|---|
| `value` | string | `""` | Current progress value. Omit for indeterminate mode. |
| `max` | string | `100` | Maximum progress boundary. |

### `<ui-skeleton>`
**Purpose:** Loading placeholder respecting `prefers-reduced-motion`.
| Attribute | Type | Default | Description |
|---|---|---|---|
| `width` | string | `""` | Explicit width style. |
| `height`| string | `""` | Explicit height style. |
| `variant`| `rect` \| `circle` | `rect` | Shape of the skeleton. |

### `<ui-container>`
**Purpose:** Responsive `max-width` content container wrapper.
| Attribute | Type | Default | Description |
|---|---|---|---|
| `size` | `sm` \| `md` \| `lg` \| `xl` | `lg` | Defines the maximum container width. |

### `<ui-section>`
**Purpose:** Reusable page-section wrapper enforcing standard vertical rhythm block spacing.
**Basic usage:**
```html
<ui-section>Content goes here</ui-section>
```

### `<ui-stack>`
**Purpose:** Flexbox layout primitive for one-dimensional alignment.
| Attribute | Type | Default | Description |
|---|---|---|---|
| `direction` | `col` \| `row` | `col` | Flex direction. |
| `gap` | `sm` \| `md` \| `lg` | `md` | Spacing between children. |
| `align` | `start` \| `center` \| `end` | `""` | `align-items` mapping. |
| `justify` | `between` \| `center` | `""` | `justify-content` mapping. |
| `wrap` | boolean | false | Applies `flex-wrap: wrap`. |

### `<ui-grid>`
**Purpose:** CSS Grid layout primitive for two-dimensional structures.
| Attribute | Type | Default | Description |
|---|---|---|---|
| `cols` | string | `1` | Number of columns on small screens. |
| `md-cols`| string | `""` | Number of columns on medium/large screens. |

### `<ui-table>`
**Purpose:** Accessible data table wrapper ensuring responsive overflow.
**Basic usage:**
```html
<ui-table>
  <table>
    <caption>Users</caption>
    <tr><th>Name</th></tr>
  </table>
</ui-table>
```

### `<ui-form-field>`
**Purpose:** Reusable form composition wrapper attaching labels and errors uniformly.
| Attribute | Type | Default | Description |
|---|---|---|---|
| `label` | string | `""` | Display label for the composed field. |
| `description`| string | `""` | Helper string. |
| `error` | string | `""` | Validation error string. |
| `required`| boolean | false | Appends required indicator to label. |

---

## Forms

Because `@uiux/core` heavily utilizes **Light DOM** components (`ui-input`, `ui-textarea`, `ui-select`, `ui-checkbox`, `ui-radio`, `ui-switch`), standard HTML elements (`<input>`, `<select>`, `<textarea>`) are physically injected as direct children of the custom elements. 

**This guarantees perfect native form integration.**
- `FormData` captures the fields natively.
- Required validation, pattern matching, and form submission work out-of-the-box.
- Live properties like `.value` and `.checked` on the custom element transparently proxy to the native internal inputs.

---

## Theming

The library is completely driven by CSS custom properties (Design Tokens). 
The architecture flows from primitive colors to semantic usage.

To override a token, simply declare it in your stylesheet:

```css
:root {
  /* Override the primary color globally */
  --ui-color-primary: #3b82f6;
  --ui-radius-md: 12px;
}
```

Do not modify the internal generated CSS. Using the `--ui-` variables is the official API.

---

## Accessibility

`@uiux/core` implements accessibility fundamentally:
- Form fields automatically generate collision-free unique IDs linking `<label>` to their internal `<input>` via `for`.
- `<ui-modal>` utilizes the native `<dialog>` element for robust focus-trapping and `Escape` key support.
- `<ui-tabs>` implements strict ARIA relationships `role="tab"`, `aria-selected`, and arrow-key active-focus management.
- `<ui-tooltip>` leverages ARIA `role="tooltip"` and listens to both mouse hover and keyboard `focusin`/`focusout`.
- `<ui-switch>` correctly manages `role="switch"` and `aria-checked` states.
- `<ui-toast>` operates securely with `role="alert"` and `aria-live="assertive"`.
- Loading elements and spinners obey `prefers-reduced-motion` media queries globally.

---

## Motion

The library includes subtle interactive animations on buttons, switches, tooltips, and checkboxes.
Complex loading indicators like `<ui-progress>` and `<ui-skeleton>` provide smooth indeterminate looping animations. All animations respect standard CSS timing functions and safely degrade when users request reduced motion.

---

## TypeScript / JSX

TypeScript types are provided out of the box (`dist/index.d.ts`). 

### JSX / TSX (React, Next.js, Solid)

`@uiux/core` exports globally injected `JSX.IntrinsicElements` augmentations perfectly compatible with Vanilla TypeScript, React 18, and React 19's strictly segregated JSX architecture. Simply installing the package provides intellisense and validation for all 34 elements (no `@ts-ignore` required!).

```tsx
import type { UiButton, UiInput } from "@uiux/core";
```

---

## Public API

The official, supported exports are:

```ts
// Behavior registration
import { registerAll } from "@uiux/core";

// Types
import type { UiButton, UiInput /* etc */ } from "@uiux/core";
```

```ts
// Styles
import "@uiux/core/styles.css";
```

---

## Package Output

Running `npm run build` generates robust isomorphic bundles via `tsup`:

```text
dist/
├── index.js                  (ESM main export)
├── index.cjs                 (CJS main export)
├── index.d.ts                (Type declarations)
├── components-[hash].js      (Dynamically loaded ESM chunks)
├── components-[hash].cjs     (Dynamically loaded CJS chunks)
└── styles.css                (Bundled semantic & primitive CSS)
```

Dynamic chunks (`components-[hash]`) guarantee the SSR-safety of `index.js`, preventing component classes from evaluating in non-browser Node.js environments.

---

## Development & Packaging

To work on `@uiux/core` locally:

```bash
npm install
npm run typecheck
npm run build
```

To test the package distribution identically to an external consumer:

```bash
npm pack
# Generates: uiux-core-1.0.0.tgz
```

---

## Versioning

The package leverages Changesets for structured SemVer releases.

---

## Troubleshooting

### Components appear as plain HTML text/nodes
You likely forgot to call the registration API in the browser environment.
**Fix:** Ensure `import { registerAll } from "@uiux/core"; registerAll();` is executed.

### Components render but have no styles (or look broken)
The CSS file is missing.
**Fix:** Add `import "@uiux/core/styles.css";` to your root application layout or import it in your HTML `<link>`.

### `ReferenceError: HTMLElement is not defined`
You are importing `@uiux/core` incorrectly during Server Side Rendering in Next.js or Astro.
**Fix:** The package is designed for safe importing, but `registerAll()` must only be *executed* on the client. In Next.js, use a `"use client"` component and execute it inside `useEffect`.

### npm dependency conflict
`@uiux/core` fundamentally utilizes modern browser standards and requires no runtime peer dependencies. Ensure you are not running obsolete node engines.
