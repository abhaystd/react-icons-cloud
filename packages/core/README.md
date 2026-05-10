# @react-icons-cloud/core

The core utility and base components for the `react-icons-cloud` library. 
This package provides the underlying SVG wrapper (`IconBase`) and TypeScript definitions used by all cloud icon provider packages.

## Installation

You typically do not need to install this package directly unless you are building your own custom cloud icon components. It is automatically installed when you use provider packages like `@react-icons-cloud/aws`.

```bash
npm install @react-icons-cloud/core
```

## Usage Example (Creating Custom Icons)

```tsx
import { IconBase, IconBaseProps, IconType } from "@react-icons-cloud/core";
import React from "react";

export const CustomIcon: IconType = React.forwardRef<
  SVGSVGElement,
  IconBaseProps
>(({ color, ...props }, ref) => (
  <IconBase ref={ref} viewBox="0 0 24 24" color={color} {...props}>
    <path d="..." fill="currentColor" />
  </IconBase>
));
```

## Documentation

For full documentation and an interactive icon playground, visit the [React Icons Cloud website](https://abhaystd.github.io/react-icons-cloud/).
