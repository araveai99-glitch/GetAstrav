import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const nonBlockingCss = () => ({
  name: 'non-blocking-css',
  enforce: 'post' as const,
  transformIndexHtml(html: string) {
    return html.replace(
      /<link rel="stylesheet" crossorigin href="(\/assets\/[^"]+\.css)">/,
      `<link rel="preload" href="$1" as="style">\n    <link rel="stylesheet" href="$1" media="print" onload="this.media='all'">\n    <noscript><link rel="stylesheet" href="$1"></noscript>`
    );
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nonBlockingCss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three')) {
              return 'three-vendor';
            }
          }
        },
      },
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
});
