import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import { default as viteReact } from '@vitejs/plugin-react';
// import { fileURLToPath, URL } from "node:url";
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [TanStackRouterVite(), viteReact()],
  resolve: {
    alias: {
      // "@": fileURLToPath(new URL("./src", import.meta.url)),
      '@/': new URL('./src/', import.meta.url).pathname,
    },
  },
});
