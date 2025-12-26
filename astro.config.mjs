// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://tuusuario.github.io', // Reemplaza con tu usuario de GitHub
  base: '/Portafolio', // Nombre de tu repositorio
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'static',
});