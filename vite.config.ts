import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  // Relative URLs keep the catalog portable under any GitHub Pages repository path.
  base: './',
  plugins: [react(), tailwindcss()],
});
