# @react-icons-cloud/aws

> 500+ AWS (Amazon Web Services) architecture and resource icons as optimized, tree-shakeable React components.

[![npm version](https://img.shields.io/npm/v/@react-icons-cloud/aws?color=orange)](https://www.npmjs.com/package/@react-icons-cloud/aws)
[![npm downloads](https://img.shields.io/npm/dm/@react-icons-cloud/aws)](https://www.npmjs.com/package/@react-icons-cloud/aws)
[![license](https://img.shields.io/badge/license-MIT-green)](../../LICENSE)

---

## Installation

```bash
npm install @react-icons-cloud/aws
# or
yarn add @react-icons-cloud/aws
# or
pnpm add @react-icons-cloud/aws
```

> **Note:** `@react-icons-cloud/core` is installed automatically as a dependency.

---

## Usage

Import only the icons you need — the rest are tree-shaken away automatically.

```tsx
import { AwsEC2, AwsS3, AwsLambda } from '@react-icons-cloud/aws';

export function MyArchitecture() {
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <AwsEC2 size={48} />
      <AwsS3 size={48} />
      <AwsLambda size={48} color="#FF9900" />
    </div>
  );
}
```

### With TypeScript

Icons are fully typed and support forwarded refs:

```tsx
import { AwsEC2 } from '@react-icons-cloud/aws';
import { useRef } from 'react';

const ref = useRef<SVGSVGElement>(null);
<AwsEC2 ref={ref} size={32} />
```

---

## Props

Every icon in this package accepts the same props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `24` | Sets both `width` and `height` |
| `color` | `string` | brand color | CSS color string — overrides the icon's default brand color |
| `className` | `string` | — | CSS class name applied to the `<svg>` element |
| `style` | `React.CSSProperties` | — | Inline styles applied to the `<svg>` element |
| `ref` | `React.Ref<SVGSVGElement>` | — | Forwarded ref to the underlying `<svg>` |

---

## Features

- ✅ **500+ icons** — Full AWS architecture icon set
- ✅ **Native brand colors** — Icons render with official AWS service colors by default
- ✅ **Color override** — Pass `color` prop to apply a custom or theme color
- ✅ **Tree-shakeable** — Only the icons you import end up in your bundle
- ✅ **TypeScript** — Full type definitions and IntelliSense support
- ✅ **Forwarded refs** — Access the underlying `<svg>` element with `ref`
- ✅ **React 16.8+** — Compatible with any modern React version

---

## Icon Explorer

Finding the right icon name is easy with our interactive playground. Search, preview, and copy import statements in one click:

**🔗 [Open Icon Explorer](https://abhaystd.github.io/react-icons-cloud/)**

---

## Icon Categories

AWS icons are organized into categories including:

- **Compute** — EC2, Lambda, ECS, EKS, Fargate, Batch…
- **Storage** — S3, EBS, EFS, Glacier, FSx…
- **Database** — RDS, DynamoDB, ElastiCache, Redshift, Aurora…
- **Networking** — VPC, CloudFront, Route 53, API Gateway, ELB…
- **Security** — IAM, KMS, WAF, Shield, GuardDuty, Cognito…
- **Developer Tools** — CodeBuild, CodePipeline, CodeDeploy, Cloud9…
- **Machine Learning** — SageMaker, Rekognition, Comprehend, Textract…
- …and many more

---

## License

MIT © React Icons Cloud Team

---

## Related

- [`@react-icons-cloud/core`](https://www.npmjs.com/package/@react-icons-cloud/core) — Core utilities and types
- [GitHub Repository](https://github.com/abhaystd/react-icons-cloud)
