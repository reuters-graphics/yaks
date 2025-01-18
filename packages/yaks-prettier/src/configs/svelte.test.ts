import { describe, it, expect } from 'vitest';
import prettier from 'prettier';
import { config as sveltePrettierConfig } from './svelte.js';

describe('Svelte Prettier Config', () => {
  it('formats a basic Svelte component correctly', async () => {
    const svelteCode = `

<script lang="ts">
import Child from './Child.svelte';

interface Props {
  name: string;
}

let { name = "Jon" }: Props = $props()
</script>

<style>
  h1 { color: red }
</style>

<h1>Hello {name}</h1>


<Child name="{name}" />


    `;

    // @ts-ignore
    const formatted = await prettier.format(svelteCode, {
      ...sveltePrettierConfig,
      parser: 'svelte',
    });

    expect(formatted).toMatchInlineSnapshot(`
      "<script lang="ts">
        import Child from './Child.svelte';

        interface Props {
          name: string;
        }

        let { name = 'Jon' }: Props = $props();
      </script>

      <h1>Hello {name}</h1>

      <Child {name} />

      <style>
        h1 {
          color: red;
        }
      </style>
      "
    `);
  });

  it('formats a legacy Svelte component correctly', async () => {
    const svelteCode = `

<script>
import Child from './Child.svelte';
export let name = "Jon"
</script>

<style>
  h1 { color: red }
</style>

<h1>Hello {name}</h1>


<Child name="{name}" />


    `;

    // @ts-ignore
    const formatted = await prettier.format(svelteCode, {
      ...sveltePrettierConfig,
      parser: 'svelte',
    });

    expect(formatted).toMatchInlineSnapshot(`
      "<script>
        import Child from './Child.svelte';
        export let name = 'Jon';
      </script>

      <h1>Hello {name}</h1>
      
      <Child {name} />

      <style>
        h1 {
          color: red;
        }
      </style>
      "
    `);
  });  
});
