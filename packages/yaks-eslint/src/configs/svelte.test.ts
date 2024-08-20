import { describe, it, expect } from 'vitest';
import { config as svelteConfig } from './svelte';
import { ESLint } from 'eslint';
import { loadTestCase } from '../tests/utils/load';

const linter = new ESLint({
  overrideConfigFile: true,
  overrideConfig: svelteConfig,
});

describe('Svelte config', () => {
  it('Should allow ts', async () => {
    const results = await linter.lintText(
      loadTestCase('svelte-with-ts.svelte'),
      { filePath: 'test.svelte' }
    );

    const { messages } = results[0];
    expect(messages.length).toBe(0);
  });

  it('Should only allow ts-ignore with message', async () => {
    const results = await linter.lintText(
      loadTestCase('svelte-with-ts-ignore.svelte'),
      { filePath: 'test.svelte' }
    );

    const { messages } = results[0];
    expect(messages[0].ruleId).toBe('@typescript-eslint/ban-ts-comment');
  });
});