# How to Add New Icons

This guide explains how to add new icons to the `react-icons-cloud` library.

## 1. Adding an Icon to an Existing Cloud Package

(Example: Adding an icon to `@react-icons-cloud/aws`)

### Step 1: Prepare your SVG
Ensure you have the SVG code for the icon you want to add. You will need the `path` data (the `d` attribute) from the SVG.

### Step 2: Create the Icon Component
Create a new file in `packages/<cloud-provider>/src/icons/`.
Name the file with PascalCase, e.g., `MyNewIcon.tsx`.

**Template:**
```tsx
import { IconBase, IconBaseProps, IconType } from "@react-icons-cloud/core";
import React from "react";

export const MyNewIcon: IconType = React.forwardRef<
  SVGSVGElement,
  IconBaseProps
>((props, ref) => (
  <IconBase ref={ref} {...props}>
    {/* Paste your SVG path(s) here */}
    <path d="M..." />
  </IconBase>
));

MyNewIcon.displayName = "MyNewIcon";
```

### Step 3: Export the Icon
Open `packages/<cloud-provider>/src/index.ts` and add an export statement:

```ts
export { MyNewIcon } from "./icons/MyNewIcon";
```

### Step 4: Build and Verify
Run the build command for the package to ensure everything compiles correctly.

```bash
cd packages/<cloud-provider>
npm run build
```

---

## 2. Adding a New Cloud Provider Package

If you want to add icons for a new cloud provider (e.g., Azure, GCP), follow these steps to create a new package.

### Step 1: Create Directory Structure
Create a new folder in `packages/`:
```
packages/
  my-new-cloud/
    src/
      icons/
```

### Step 2: Initialize Configuration
Copy the configuration files from `packages/aws/` to your new folder:
- `package.json`: Update the `"name"` to `@react-icons-cloud/my-new-cloud`.
- `tsconfig.json`: Ensure `esModuleInterop` is set to `true`.
- `tsup.config.ts`: Configuration for the build tool.

### Step 3: Create Entry Point
Create `src/index.ts` in your new package. Start with an empty export or add your first icon.

```ts
// src/index.ts
// export { FirstIcon } from "./icons/FirstIcon";
```

### Step 4: Install Dependencies
Run `npm install` in the root to link the local `@react-icons-cloud/core` dependency.

### Step 5: Build
Test the new package build:
```bash
cd packages/my-new-cloud
npm run build
```
