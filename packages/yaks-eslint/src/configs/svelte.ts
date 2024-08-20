import type { Linter } from 'eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintPluginSvelte from 'eslint-plugin-svelte';
import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import tsParser from '@typescript-eslint/parser';

/**
 * ESLint config object array for Svelte projects (with Typescript)
 */
export const config = [
  {
    languageOptions: {
      globals: {
        ...globals.nodeBuiltin,
        ...globals.browser,
      },
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.svelte'],
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginSvelte.configs['flat/prettier'],
  eslintPluginPrettierRecommended,
  {
    rules: {
      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          'ts-ignore': 'allow-with-description',
          'ts-expect-error': 'allow-with-description',
          'ts-nocheck': true,
          'ts-check': false,
          minimumDescriptionLength: 3,
        },
      ],
    },
  },
] as Linter.Config[];