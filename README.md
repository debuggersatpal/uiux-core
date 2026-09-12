# @uiux/core

A framework-agnostic UI component library built with native Web Components, TypeScript, CSS Custom Properties, and design tokens.

**Stable Release: v1.0.0**
- 34 Web Components
- Stable public API
- Semantic versioning
- Framework-agnostic architecture
- GitHub release available

---

## Installation & Distribution

**Note:** `@uiux/core@1.0.0` is intentionally **NOT** published to the public npm registry at this time. It is distributed exclusively via GitHub Releases.

To install the stable v1.0.0 release into your project, you can install the compiled tarball directly from the GitHub Release:

```bash
npm install https://github.com/debuggersatpal/uiux-core/releases/download/v1.0.0/uiux-core-1.0.0.tgz
```

Alternatively, you can download the `.tgz` asset manually and install it locally:

```bash
npm install ./path/to/uiux-core-1.0.0.tgz
```

---

## Quick Start

Import the distributed CSS, import the registration API, and register the components in your browser environment.

```typescript
// index.ts or client entrypoint
import { registerAll } from "@uiux/core";
import "@uiux/core/styles.css";

registerAll();
```

Use the components directly in your HTML or JSX:

```html
<ui-container size="md">
  <ui-card>
    <ui-stack direction="col" gap="md">
      <h2>Create Account</h2>
      <ui-input label="Email" type="email" placeholder="you@example.com"></ui-input>
      <ui-button variant="primary">Submit</ui-button>
    </ui-stack>
  </ui-card>
</ui-container>
```

---

## Components

The library provides 34 fully verified components categorized into Core and Advanced.

### Core Components (18)

1. **`ui-button`**: Standard button. Attributes: `variant`, `size`, `disabled`, `loading`.
2. **`ui-icon-button`**: Icon-only button. Attributes: `variant`, `size`, `disabled`, `aria-label`.
3. **`ui-link`**: Anchor wrapper. Attributes: `href`, `target`, `rel`.
4. **`ui-input`**: Text input. Attributes: `label`, `placeholder`, `type`, `value`, `error`, `description`, `disabled`, `required`, `readonly`, `name`, `autocomplete`.
5. **`ui-textarea`**: Multiline input. Attributes: `label`, `placeholder`, `value`, `error`, `description`, `rows`, `disabled`, `required`, `readonly`, `name`.
6. **`ui-select`**: Native select wrapper. Attributes: `label`, `value`, `error`, `description`, `disabled`, `required`, `name`.
7. **`ui-checkbox`**: Checkbox input. Attributes: `checked`, `disabled`, `required`, `label`, `aria-label`, `aria-labelledby`.
8. **`ui-radio`**: Radio input. Attributes: `name`, `value`, `checked`, `disabled`, `label`, `aria-label`, `aria-labelledby`.
9. **`ui-switch`**: Toggle switch. Attributes: `checked`, `disabled`, `aria-label`, `aria-labelledby`.
10. **`ui-badge`**: Status indicator. Attributes: `variant`.
11. **`ui-avatar`**: User image. Attributes: `src`, `alt`.
12. **`ui-card`**: Content container. Attributes: `interactive`.
13. **`ui-divider`**: Visual separator.
14. **`ui-image`**: Image with loading states. Attributes: `src`, `alt`, `loading`, `aspect-ratio`.
15. **`ui-spinner`**: Loading indicator. Attributes: `size`.
16. **`ui-alert`**: Callout message. Attributes: `variant`.
17. **`ui-tooltip`**: Hover tooltip. Attributes: `text`.
18. **`ui-modal`**: Native `<dialog>` modal.

### Advanced Components (16)

19. **`ui-header`**: Page header container.
20. **`ui-tabs`**: Tabbed navigation wrapper.
21. **`ui-breadcrumb`**: Navigation breadcrumbs. Expected usage: wrap `<li>` or native anchors.
22. **`ui-pagination`**: Pagination controls.
23. **`ui-dropdown`**: Dropdown menu.
24. **`ui-popover`**: Popover container.
25. **`ui-toast`**: Notification toast. Attributes: `variant`, `duration`.
26. **`ui-accordion`**: Collapsible sections.
27. **`ui-progress`**: Progress bar. Attributes: `value`, `max`.
28. **`ui-skeleton`**: Loading placeholder. Attributes: `width`, `height`, `variant`.
29. **`ui-container`**: Max-width container. Attributes: `size`.
30. **`ui-section`**: Vertical padding block.
31. **`ui-stack`**: Flexbox layout block. Attributes: `direction`, `gap`, `align`, `justify`, `wrap`.
32. **`ui-grid`**: CSS Grid layout block. Attributes: `cols`, `md-cols`.
33. **`ui-table`**: Table wrapper.
34. **`ui-form-field`**: Form control wrapper (handles label/error states). Attributes: `label`, `error`, `description`, `required`.

---

## Registration

The components are distributed as native ES6 classes. They must be registered with the browser's `customElements` registry. 

```typescript
import { registerAll } from "@uiux/core";

// Safely registers all 34 components idempotently.
// In SSR environments (like Node.js), this function safely no-ops.
registerAll();
```

---

## CSS & Theming

The package exposes a bundled CSS file that must be included for the components to render correctly.

```typescript
import "@uiux/core/styles.css";
```

### Theming
The visual system is controlled entirely by CSS Custom Properties (Design Tokens), meaning you can theme the library without modifying the underlying component code. 

Example customizations in your root CSS:

```css
:root {
  --ui-color-primary: #0055ff;
  --ui-color-primary-hover: #0044cc;
  --ui-radius-md: 8px;
  --ui-font-family: 'Inter', sans-serif;
}
```

---

## Framework Usage

The library is designed to be framework-agnostic.

### Vanilla / Vite
Simply import the CSS and registration function in your main entry point (e.g., `main.js` or `main.tsx`).

### Next.js
Next.js supports Web Components in the App Router, but Web Component classes cannot be evaluated in SSR Node environments. Wrap the registration inside a Client Component:

```tsx
"use client";
import { useEffect } from 'react';
import { registerAll } from "@uiux/core";
import "@uiux/core/styles.css"; // Or import globally in layout.tsx

export default function AppProvider({ children }) {
  useEffect(() => {
    registerAll();
  }, []);
  return <>{children}</>;
}
```

### Astro
Include the CSS in your layout and run the registration in a client-side script tag:

```astro
---
import "@uiux/core/styles.css";
---
<script>
  import { registerAll } from "@uiux/core";
  registerAll();
</script>
```

---

## Accessibility

Components use semantic native controls under the hood where appropriate (e.g., `<ui-button>` wraps a native `<button>`, `<ui-input>` wraps a native `<input>`).

- Focus management and keyboard interactions are built-in.
- ARIA attributes like `aria-label` and `aria-labelledby` are actively synchronized with inner native elements via `MutationObserver`.
- `<ui-modal>` leverages the native HTML5 `<dialog>` API.
- All 34 components have been rigorously verified via **Axe accessibility tests** in real Chromium browsers, passing with zero critical/serious violations in our test matrix.

### Responsive & Motion
Layout components (`ui-stack`, `ui-grid`, `ui-container`) are designed to adapt to screen sizes (e.g., using `md-cols`). Animations degrade safely for users requiring reduced motion (if configured in tokens/CSS).

---

## TypeScript

TypeScript definitions (`.d.ts`) are included. If you are using JSX (e.g., React or Next.js), `@uiux/core` automatically augments `JSX.IntrinsicElements` and `React.JSX.IntrinsicElements` to provide full IntelliSense and prop validation for all 34 custom elements out of the box.

---

## Package Architecture

```text
src/
├── components/     # Individual Web Component implementations
├── registration/   # registerAll logic
├── tokens/         # CSS Custom Properties (design tokens)
├── styles/         # Global resets and utility classes
├── jsx.ts          # JSX type augmentations for TSX environments
└── index.ts        # Main library exports
```

- Web Components provide the framework-agnostic runtime.
- TypeScript guarantees type safety.
- CSS Custom Properties manage the design system.

---

## Development & Testing

To work on `@uiux/core` locally:

```bash
# Install dependencies
npm ci

# Typecheck
npm run typecheck

# Build the package (ESM, CJS, DTS, CSS)
npm run build

# Run unit and browser tests
npm run test:all
```

The test matrix includes:
- Vitest for unit/lifecycle tests.
- Playwright for real-browser interactions and Accessibility testing (Chromium).

---

## Versioning & Releases

**Current Stable Release:** `v1.0.0` (Git Tag: `v1.0.0`)

We follow standard Semantic Versioning (`MAJOR.MINOR.PATCH`). Future releases will be tracked and distributed via GitHub Tags and GitHub Releases.

Repository: [https://github.com/debuggersatpal/uiux-core](https://github.com/debuggersatpal/uiux-core)

---

## Troubleshooting

- **Components appear as plain text / unstyled nodes:**
  You forgot to call `registerAll()` in your browser entry point.
- **Components render structurally but have no visual styling:**
  You forgot to import the CSS file (`import "@uiux/core/styles.css";`).
- **`ReferenceError: HTMLElement is not defined` (Next.js / Astro SSR):**
  Ensure you are importing and running `registerAll()` strictly on the client (e.g., inside a `useEffect` block or `<script>` tag). The module loading itself is safe, but calling the registration function requires the DOM.
- **JSX property missing errors:**
  Ensure your `tsconfig.json` includes the types or the package is correctly installed, as `@uiux/core` natively augments `IntrinsicElements`.

---

## Complete Example

```tsx
import { registerAll } from "@uiux/core";
import "@uiux/core/styles.css";

// Setup
registerAll();

// Application Code
function App() {
  return (
    <ui-container size="md">
      <ui-section>
        <ui-stack direction="col" gap="md">
          <ui-header>
            <ui-stack direction="row" justify="between" align="center">
              <ui-breadcrumb>
                <span>Home / Settings</span>
              </ui-breadcrumb>
              <ui-avatar src="/avatar.jpg" alt="User Avatar"></ui-avatar>
            </ui-stack>
          </ui-header>
          
          <ui-divider></ui-divider>

          <ui-card interactive>
            <ui-stack direction="col" gap="sm">
              <ui-alert variant="info">Update your profile information below.</ui-alert>
              
              <ui-grid cols="1" md-cols="2">
                <ui-form-field label="First Name" required>
                  <ui-input placeholder="Jane"></ui-input>
                </ui-form-field>
                
                <ui-form-field label="Last Name">
                  <ui-input placeholder="Doe"></ui-input>
                </ui-form-field>
              </ui-grid>
              
              <ui-button variant="primary">Save Changes</ui-button>
            </ui-stack>
          </ui-card>
        </ui-stack>
      </ui-section>
    </ui-container>
  );
}
```
