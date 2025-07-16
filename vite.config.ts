import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import paths from 'vite-tsconfig-paths'

// https://vite.dev/config/
/// <reference types="vitest/config" />
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    plugins: [
      react(),
      tailwindcss(),
      paths(),
    ],
    build: {
      target: 'esnext',
      minify: isProduction ? 'esbuild' : false,
      sourcemap: !isProduction,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor'
            }
          },
        },
      },
    },
    server: {
      open: true,
    },
    test: {
      globals: true,
      environment: 'jsdom',
      reporters: ['default', 'html'],
      css: true,
      coverage: {
        provider: 'v8',
        reporter: ['text', 'json', 'html'],
        exclude: [
          'node_modules/**',
          'src/App.tsx',
          'src/main.tsx',
          'src/views/**',
          'src/data/**',
          'src/@types/**',
          'src/utils/env.config.ts',
          'src/utils/constants.ts',
          'src/variants/**',
          'dist/**',
          'coverage/**',
          'test/**',
          'html/**',
          '*config.*',
          'src/vite-env.d.ts',
        ],
        all: true,
        threshold: {
          statements: 90,
          branches: 90,
          functions: 90,
          lines: 90,
        }
      },
    },
  }
})