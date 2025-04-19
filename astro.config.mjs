// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx({
      // Global components available to all MDX files
      extendMarkdownConfig: true,
      smartypants: true,
      syntaxHighlight: 'prism'
    }), 
    tailwind(), 
    react()
  ],
});
