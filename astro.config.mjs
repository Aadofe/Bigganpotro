// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://aadofe.github.io',
  base: '/Bigganpotro',

  vite: {
    plugins: [tailwindcss()]
  }
});