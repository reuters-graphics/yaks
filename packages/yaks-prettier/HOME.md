Shortcut for simple Prettier configs the way we like them at Reuters Graphics.

## Quickstart

Install.

```console
npm i -D @reuters-graphics/yaks-prettier prettier typescript
```

Create a `.prettierrc.js` or `prettier.config.js` file in the root of your project and use the module.

```typescript
// .prettierrc.js
import { base as baseConfig } from '@reuters-graphics/yaks-prettier';

/**
 * @type {import("prettier").Config}
 */
const config = {
  ...baseConfig,
  // Custom overrides...
};

export default config;
```
