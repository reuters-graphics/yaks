import { config as nodeConfig } from './base.js';

export const config = {
  ...nodeConfig,
  htmlWhitespaceSensitivity: 'css',
  svelteStrictMode: true,
  plugins: ['prettier-plugin-svelte'],
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
} as const;