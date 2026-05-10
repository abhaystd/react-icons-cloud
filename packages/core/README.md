# @react-icons-cloud/core

> Core utility components and TypeScript type definitions for the `react-icons-cloud` library.

[![npm version](https://img.shields.io/npm/v/@react-icons-cloud/core?color=blue)](https://www.npmjs.com/package/@react-icons-cloud/core)
[![npm downloads](https://img.shields.io/npm/dm/@react-icons-cloud/core)](https://www.npmjs.com/package/@react-icons-cloud/core)
[![license](https://img.shields.io/badge/license-MIT-green)](../../LICENSE)

---

## Overview

This package provides the foundational `IconBase` SVG wrapper component and TypeScript type definitions used by all `react-icons-cloud` provider packages (e.g., `@react-icons-cloud/aws`).

**You typically do not need to install this package directly.** It is automatically installed as a dependency when you install any provider package.

---

## Installation

```bash
npm install @react-icons-cloud/core
```

---

## API

### `IconBase`

The core SVG wrapper component. All icon components in the library render through `IconBase`.

```tsx
import { IconBase } from '@react-icons-cloud/core';
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `24` | Sets both `width` and `height` of the SVG |
| `color` | `string` | — | Color override for the icon |
| `viewBox` | `string` | `"0 0 24 24"` | SVG `viewBox` attribute |
| `className` | `string` | — | CSS class applied to the `<svg>` |
| `style` | `React.CSSProperties` | — | Inline styles for the `<svg>` |
| `children` | `React.ReactNode` | — | SVG path/shape elements |
| `ref` | `React.Ref<SVGSVGElement>` | — | Forwarded ref to the `<svg>` element |

---

### `IconType`

The TypeScript type for all icon components.

```ts
import type { IconType } from '@react-icons-cloud/core';

const MyIcon: IconType = React.forwardRef(/* ... */);
```

### `IconBaseProps`

The TypeScript interface for all icon props.

```ts
import type { IconBaseProps } from '@react-icons-cloud/core';

function MyWrapper(props: IconBaseProps) { /* ... */ }
```

---

## Usage — Creating Custom Icons

Use `IconBase` to create your own SVG icon components with the same API:

```tsx
import { IconBase, IconBaseProps, IconType } from '@react-icons-cloud/core';
import React from 'react';

export const MyCustomIcon: IconType = React.forwardRef<SVGSVGElement, IconBaseProps>(
  ({ color, ...props }, ref) => (
    <IconBase ref={ref} viewBox="0 0 24 24" color={color} {...props}>
      <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" />
      <path d="M2 17l10 5 10-5" fill="currentColor" />
    </IconBase>
  )
);

MyCustomIcon.displayName = 'MyCustomIcon';
```

---

## Related Packages

- [`@react-icons-cloud/aws`](https://www.npmjs.com/package/@react-icons-cloud/aws) — 500+ AWS icons
- [GitHub Repository](https://github.com/abhaystd/react-icons-cloud)
- [Icon Explorer](https://abhaystd.github.io/react-icons-cloud/)

---

## License

MIT © React Icons Cloud Team
