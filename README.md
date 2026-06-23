# React Icons Cloud

> A comprehensive, tree-shakeable library of cloud provider icons as optimized React components.

[![npm](https://img.shields.io/npm/v/@react-icons-cloud/aws?label=%40react-icons-cloud%2Faws&color=blue)](https://www.npmjs.com/package/@react-icons-cloud/aws)
[![npm](https://img.shields.io/npm/v/@react-icons-cloud/core?label=%40react-icons-cloud%2Fcore&color=blue)](https://www.npmjs.com/package/@react-icons-cloud/core)
[![license](https://img.shields.io/badge/license-MIT-green)](./LICENSE)

---

## Overview

**React Icons Cloud** brings professional, production-ready cloud infrastructure icons to your React and TypeScript applications. Each icon is an individually importable component - so only the icons you use are included in your final bundle.
⭐ If you find this project useful, please consider giving it a star on GitHub - it helps support the project and makes it easier for others to discover it.

## Packages

| Package | Description | npm |
|---------|-------------|-----|
| [`@react-icons-cloud/aws`](./packages/aws) | 500+ AWS architecture & resource icons | [![npm](https://img.shields.io/npm/v/@react-icons-cloud/aws)](https://www.npmjs.com/package/@react-icons-cloud/aws) |
| [`@react-icons-cloud/core`](./packages/core) | Core `IconBase` component & TypeScript types | [![npm](https://img.shields.io/npm/v/@react-icons-cloud/core)](https://www.npmjs.com/package/@react-icons-cloud/core) |

## Quick Start

### Install the AWS icon package

```bash
npm install @react-icons-cloud/aws
```

### Use in your React component

```tsx
import { AwsEC2, AwsS3, AwsLambda } from '@react-icons-cloud/aws';

export function ArchitectureDiagram() {
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <AwsEC2 size={48} />
      <AwsS3 size={48} />
      <AwsLambda size={48} />
    </div>
  );
}
```

### Props

All icons accept the same props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `24` | Width and height of the icon |
| `color` | `string` | `undefined` | Override the icon color (uses brand color by default) |
| `className` | `string` | — | CSS class to apply to the `<svg>` element |
| `style` | `CSSProperties` | — | Inline styles for the `<svg>` element |
| `ref` | `Ref<SVGSVGElement>` | — | Forwarded ref to the underlying `<svg>` |

## Icon Explorer

Browse and search all 500+ available icons at the interactive playground:

**🔗 [react-icons-cloud.vercel.app](https://abhaystd.github.io/react-icons-cloud/)**

## Repository Structure

```
react-icons-cloud/
├── packages/
│   ├── aws/          # @react-icons-cloud/aws
│   ├── core/         # @react-icons-cloud/core
│   └── site/         # Interactive icon explorer website
├── scripts/
│   └── generate-icons.ts  # SVG → React component generator
└── svg-sources/      # Raw SVG source files per provider
```

## Contributing

Contributions are welcome! To add new icons:

1. Add the SVG source files to `svg-sources/<provider>/`
2. Run `npm run generate <provider>` to generate the components
3. Run `npm run build` to compile all packages
4. Submit a pull request

## License

MIT © React Icons Cloud Team
