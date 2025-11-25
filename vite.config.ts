import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Setting base to './' ensures assets are loaded relatively.
  // This fixes the "blank page" issue on GitHub Pages subdirectories.
  base: './',
  build: {
    outDir: 'dist',
  }
});