import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
export default defineConfig({
  // VITE_BASE=/Solomon_Rad/ for GitHub Pages project sites; leave unset ('/') for a custom domain or root hosting.
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
  resolve: { alias: { '@': path.resolve(__dirname, 'src') } },
  build: { chunkSizeWarningLimit: 600 },
});
