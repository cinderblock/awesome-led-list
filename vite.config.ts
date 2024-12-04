import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import {} from 'vite-react-ssg';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite({ autoCodeSplitting: true }), react()],
  // base: '/awesome-led-list',
  build: {
    sourcemap: true,
  },
  base: './',
  mode: 'development',
});