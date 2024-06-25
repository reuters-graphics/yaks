Shortcut for basic Typescript configs the way we like them at Reuters Graphics.

## Quickstart

Install.

```console
npm i -D @reuters-graphics/yaks-ts
```

Create a `tsconfig.json` in your project and extend one of the given configs.

```json
{
  "extends": "@reuters-graphics/yaks-ts/base",
  "include": ["src/*.ts"],
  "compilerOptions": {
    "outDir": "dist",
    "declarationDir": "dist"
  }
}
```

## Configs

### `base`

Basic Typescript config. Extend it and then customise path config variables for your project.

```json
{
  "extends": "@reuters-graphics/yaks-ts/base",
  "include": ["src/*.ts"],
  "compilerOptions": {
    "outDir": "dist",
    "declarationDir": "dist"
  }
}
```

### `typedoc`

Basic config with typedoc. Extend it and then customise a few typedoc configuration variables for your project.

> **Note:** Be sure to install `typedoc` in your project.

```json
{
  "extends": "@reuters-graphics/yaks-ts/typedoc",
  "include": ["src/*.ts"],
  "compilerOptions": {
    "outDir": "dist",
    "declarationDir": "dist"
  },
  "typedocOptions": {
    "entryPoints": ["src/index.ts"],
    "out": "docs",
    "titleLink": "https://reuters-graphics.github.io/your-project/",
    "navigationLinks": {
      "GitHub": "https://github.com/reuters-graphics/your-project/",
      "npm": "https://www.npmjs.com/package/@reuters-graphics/your-project/"
    },
    "readme": "HOME.md"
  }
}
```

Then add a build script for typedoc to your `package.json`.

```json
{
  "scripts": {
    "build:docs": "typedoc"
  }
}
```
