Shortcut for basic ESLint configs the way we like them at Reuters Graphics.

## Quickstart

Install.

```console
npm i -D @reuters-graphics/yaks-eslint eslint typescript
```

Create an `eslint.config.js` file in the root of your project. Import a config from this module and add it to an exported [ESLint config object array](https://eslint.org/docs/latest/use/configure/configuration-files). Generally, you'll want it below an object with `files` and `ignores` and above any overrides.

```javascript
// eslint.config.js
import { node } from '@reuters-graphics/yaks-eslint';

/**
 * @type {import("eslint").Linter.Config[]}
 */
export default [
  { files: ['src/**/*.{js,ts}'], ignores: ['docs/**/*'] },
  ...node, // 👈
  {
    rules: { semi: 'off' },
  },
];
```
