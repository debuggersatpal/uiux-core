# @uiux/core

A framework-agnostic UI component library built with native Web Components, TypeScript, CSS Custom Properties, and design tokens.

**Stable Release: v1.1.0**
- 34 Web Components
- Stable public API
- Semantic versioning
- Framework-agnostic architecture
- GitHub release available

---

## Tailwind CSS v4.3 Integration (Optional)

`@uiux/core` is strictly framework-agnostic and does **not** require Tailwind. However, if you use Tailwind CSS in your project, we provide a production-ready **Tailwind v4.3 CSS-first integration**: `@uiux/tailwind`.

This package natively maps `@uiux/core`'s semantic design tokens directly into Tailwind's `@theme` configuration, allowing you to use utility classes (`bg-ui-canvas`, `text-ui-primary`, `rounded-ui-md`) that perfectly match the component library's visual system.

### Installation

```bash
# @uiux/tailwind is currently available via GitHub Releases
npm install https://github.com/debuggersatpal/uiux-core/releases/download/v1.1.0/uiux-tailwind-1.1.0.tgz
```

### Configuration (CSS-First)

Because Tailwind v4 is strictly CSS-first, you no longer need `tailwind.config.js`. Simply import the integration directly in your root CSS file:

```css
@import "tailwindcss";
@import "@uiux/tailwind/theme.css";
```

### Usage

Since `@uiux/core` uses **Light DOM**, you can apply Tailwind utility classes directly to the custom elements to control layout, spacing, typography, and responsive behavior.

```tsx
<ui-container class="px-4 lg:px-8 max-w-7xl mx-auto">
  <ui-card class="p-ui-6 shadow-ui-lg rounded-ui-lg bg-ui-canvas-soft">
    <div class="flex flex-col md:flex-row gap-ui-4 items-center">
      <ui-badge class="mb-ui-2 md:mb-0" variant="success">Active</ui-badge>
      
      {/* Width overrides and responsive adjustments */}
      <ui-input class="w-full md:w-64" placeholder="Search..."></ui-input>
      
      <ui-button class="w-full sm:w-auto" variant="primary">Submit</ui-button>
    </div>
  </ui-card>
</ui-container>
```

#### Supported Theme Tokens
The `@uiux/tailwind/theme.css` file extends your Tailwind theme with the `ui-` namespace for `@uiux/core` semantics:
- **Colors**: `bg-ui-canvas`, `text-ui-primary`, `border-ui-line`, `bg-ui-success`, `dark:bg-ui-canvas-soft`, etc.
- **Spacing**: `p-ui-4`, `m-ui-2`, `gap-ui-6`, `w-ui-8`, etc.
- **Border Radius**: `rounded-ui-md`, `rounded-ui-full`
- **Shadows**: `shadow-ui-sm`, `shadow-ui-md`

#### Styling Precedence and Boundaries
1. **Component Baseline**: Structural styling inside components.
2. **Semantic Tokens**: Standard variables mapped (e.g., `var(--ui-color-primary)`).
3. **Tailwind Utilities**: Host-level overrides (`class="w-full"`).

**Note:** Tailwind utilities apply to the host element or the explicitly exposed Light DOM slots. Internal native controls (like the `<input>` inside `<ui-input>`) correctly encapsulate their own styles while adhering to host variables, preserving structural and accessible integrity without cascade collisions.

---

## Quick Start (Vanilla/Vite/Next.js/Astro)

Import the core CSS, run the registration, and use components anywhere.

```typescript
// Client entrypoint (main.js, _app.tsx, layout.tsx, etc.)
import { registerAll } from "@uiux/core";
import "@uiux/core/styles.css";

// In SSR frameworks like Next.js or Astro, ensure this runs ONLY on the client.
registerAll();
```

---

## Next.js v14+ and Tailwind v4

For Next.js App Router, ensure you install `@tailwindcss/postcss` and configure `postcss.config.js`:

```js
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {}
  }
}
```

In your `app/globals.css`:
```css
@import "tailwindcss";
@import "@uiux/tailwind/theme.css";
@import "@uiux/core/styles.css";
```

Wrap registration in a Client Component (`"use client"`) `useEffect` to guarantee SSR safety.

## Vite and Tailwind v4

Use `@tailwindcss/vite` in your `vite.config.ts`:

```ts
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
  plugins: [tailwindcss()],
})
```

Import CSS similarly in your `src/index.css`.

---

## Accessibility

- Semantic controls used internally.
- MutationObserver syncs `aria-*` across Shadow/Light boundaries.
- Native HTML5 `<dialog>`.
- Verified via Axe in Chromium browsers.

## Troubleshooting

- **Tailwind `bg-ui-canvas` doesn't work:** Ensure you use `@import "@uiux/tailwind/theme.css";` after `@import "tailwindcss";`.
- **HTMLElement is not defined:** `registerAll()` is running on the server. Move it to a client-side execution block.

