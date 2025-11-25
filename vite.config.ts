import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: This makes paths relative (./assets/...) instead of absolute (/assets/...)
  // This is required for GitHub Pages to find your JS and CSS files.
  base: './', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
});