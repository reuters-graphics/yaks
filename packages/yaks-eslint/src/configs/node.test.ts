import { describe, it, expect } from 'vitest';
import { config as svelteConfig } from './svelte';
import { ESLint } from 'eslint';
import { loadTestCase } from '../tests/utils/load';

const linter = new ESLint({
  overrideConfigFile: true,
  overrideConfig: svelteConfig,
});

describe('Node config', () => {
  it('Should allow underscore unused vars', async () => {
    const results = await linter.lintText(
      loadTestCase('vars-exemption.ts'),
      { filePath: 'test.ts' }
    );

    const { messages } = results[0];
    expect(messages.length).toBe(0);
  });
});