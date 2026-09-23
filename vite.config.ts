import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, 'src'),
    },
  },
  plugins: [
    react(),
    dts({
      include: ['src'],
      outDirs: 'dist',
      bundleTypes: true,
    }),
    cssInjectedByJsPlugin(),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://dev.elitea.ai',
        changeOrigin: true,
        secure: true,
      },
      '/socket.io': {
        target: 'https://dev.elitea.ai',
        changeOrigin: true,
        secure: true,
        ws: true,
      },
    },
  },
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      name: 'EliteaAssistant',
      formats: ['es', 'cjs'],
      fileName: 'elitea-assistant',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'socket.io-client', 'mermaid', 'rehype-raw'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
        },
      },
    },
    sourcemap: true,
  },
});
