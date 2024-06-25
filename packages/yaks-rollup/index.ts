import type { InputOption, RollupOptions, RollupOutput } from 'rollup';
import externals, { type ExternalsOptions } from 'rollup-plugin-node-externals';
import json, { type RollupJsonOptions } from '@rollup/plugin-json';
import typescript, { type RollupTypescriptOptions } from '@rollup/plugin-typescript';

const defaultOptions = {
  input: 'src/index.ts' as InputOption,
};

const getPlugins = (options: Options['plugins'] = {}) => ([
  json(options.json || undefined),
  externals(options.externals || undefined),
  typescript(options.typescript || undefined),
]);

const defaultOutput = {
  dir: 'dist',
  format: 'es',
  sourcemap: true,
};

/**
 * Get a rollup config entry. 
 * 
 * ## Examples
 * 
 * ### Default
 * ```typescript
 * // rollup.config.js
 * import { getConfig } from '@reuters-graphics/rollup-config';
 * 
 * export default [
 *   getConfig(),
 * ];
 * ```
 * 
 * ### Input options
 * 
 * ```typescript
 * // rollup.config.js
 * import { getConfig } from '@reuters-graphics/rollup-config';
 * 
 * export default [
 *   getConfig({ input: 'src/index.ts' }),
 * ];
 * ```
 * 
 * ### Output options
 * 
 * ```typescript
 * // rollup.config.js
 * import { getConfig } from '@reuters-graphics/rollup-config';
 * 
 * export default [
 *   getConfig({ output: { banner: '#!/usr/bin/env node' }}),
 * ];
 * ```
 * 
 * ### Plugin options
 * 
 * ```typescript
 * // rollup.config.js
 * import { getConfig } from '@reuters-graphics/rollup-config';
 * 
 * export default [
 *   getConfig({ plugins: { typescript: { tsconfig: './tsconfig.build.json' }}}),
 * ];
 * ```
 * 
 * @param options Input, output and plugin options
 * @returns Rollup config options object
 */
export const getConfig = (options: Options = defaultOptions) => {
  const { input, output, plugins } = { ...defaultOptions, ...options };
  return {
    input,
    output: {...defaultOutput, ...output },
    plugins: getPlugins(plugins || {}),
  } as RollupOptions
};

export type Options = {
  /**
   * Default: 
   * ```javascript
   * 'src/index.ts'
   * ```
   */
  input: InputOption,
  /**
   * Default:
   * ```javascript
   * {
   *   dir: 'dist',
   *   format: 'es',
   *   sourcemap: true,
   * }
   * ```
   */
  output?: RollupOutput,
  plugins?: {
    /**
     * Default:
     * ```javascript
     * {}
     * ```
     */
    json?: RollupJsonOptions,
    /**
     * Default:
     * ```javascript
     * { deps: true }
     * ```
     */
    externals?: ExternalsOptions,
    /**
     * Default:
     * ```javascript
     * {}
     * ```
     */
    typescript?: RollupTypescriptOptions,
  },
};