Shortcut for simple Rollup configs.

## Quickstart

Install.

```console
npm i -D @reuters-graphics/yaks-rollup rollup typescript
```

Create a `rollup.config.js` file in the root of your project and use the module.

```typescript
// rollup.config.js
import { getConfig } from '@reuters-graphics/yaks-rollup';

export default [
  getConfig(),
];
```

Add a build script to your `package.json`.

```javascript
// package.json
{
  "scripts": {
    "build": "rollup --config rollup.config.js"
  }
}
```
