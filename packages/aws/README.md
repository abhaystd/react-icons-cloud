# @react-icons-cloud/aws

A comprehensive collection of AWS (Amazon Web Services) architecture and resource icons, exposed as optimized, easy-to-use React components.

## Installation

```bash
npm install @react-icons-cloud/aws
```

*(Note: `@react-icons-cloud/core` will be installed automatically as a peer dependency).*

## Usage

Import the specific icons you need from the package and use them directly in your React components. 

```tsx
import { ResAmazonSimpleStorageServiceS3Standard48 } from '@react-icons-cloud/aws';

function MyComponent() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <ResAmazonSimpleStorageServiceS3Standard48 size={48} />
      <span>S3 Bucket</span>
    </div>
  );
}
```

## Features
- **High Quality**: SVG icons are properly optimized for the web.
- **Native Brand Colors**: Preserves the official AWS brand and service colors by default.
- **Customizable**: You can override the native colors using the `color` prop if you want them to match your app's theme.
- **Fully Typed**: Written in TypeScript with full IntelliSense support.
- **Tree-shakeable**: Only the icons you import will be bundled in your final application.

## Documentation & Icon Search

Finding the right icon name can be tricky! Search and explore all 500+ available AWS icons on our interactive playground:

**👉 [React Icons Cloud Explorer](https://abhaystd.github.io/react-icons-cloud/)**
