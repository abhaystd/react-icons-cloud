# Steps to Add AWS IAM Policy Icon

The goal is to generate a React component from the `aws-IAMPolicy.svg` file located in `svg-sources/aws/` and verify its inclusion in the `@react-icons-cloud/aws` package.

## Steps Taken

### 1. Prepare SVG
The SVG file `aws-IAMPolicy.svg` was added to `svg-sources/aws/`.

### 2. Generate Icon Component
The generation script was run to create the React component and update the package index:
```bash
npx ts-node scripts/generate-icons.ts aws
```
This created `packages/aws/src/icons/AwsIAMPolicy.tsx` and updated `packages/aws/src/index.ts`.

### 3. Build the Package
To finalize the addition, the package needs to be built:
```bash
cd packages/aws
npm run build
```

## Feature: Multi-Color Support

To support icons with original "color grading", we will modify the generation script to skip attribute stripping for SVGs located in a `color` subdirectory.

### Proposed Changes

#### [MODIFY] [generate-icons.ts](file:///c:/C++course/ZZPorjects/open%20react%20icons/react-icons-cloud/scripts/generate-icons.ts)
- Update the script to check if the SVG file path contains `/color/`.
- If it does, omit the `removeAttrs` plugin in SVGO or modify it to preserve `fill` and `stroke`.

### Verification Plan
1. Move `aws-IAMPolicy.svg` to `svg-sources/aws/color/aws-IAMPolicy.svg`.
2. Run `npx ts-node scripts/generate-icons.ts aws`.
3. Check `packages/aws/src/icons/AwsIAMPolicy.tsx` to ensure `fill` attributes are preserved in the path data.
4. Verify the icon renders with original colors in the site.


## Feature: Dynamic Color Overrides

For "colored" icons (in `color/` directories), we want to preserve original colors by default but allow users to override them using the `color` prop.

### Proposed Changes

#### [MODIFY] [generate-icons.ts](file:///c:/C++course/ZZPorjects/open%20react%20icons/react-icons-cloud/scripts/generate-icons.ts)
- Update `componentTemplate` to destructure `{ color, ...props }`.
- For color icons, identify `fill` and `stroke` attributes and replace their hardcoded values with `{color && color !== "currentColor" ? color : "original_hex"}`.

### Verification Plan
1. Re-generate icons.
2. Verify `AwsIAMPolicy.tsx` has `fill={color && color !== "currentColor" ? color : "#7aa116"}`.
3. Observe the icon in the site's default state (where `color` is `"currentColor"`) and ensure it shows the brand colors.
### to run script to generate icons


npx ts-node --transpile-only scripts/generate-icons.ts aws