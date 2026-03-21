import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './__test__/setup.tsx',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        '__test__/',
        '*.config.ts',
        '*.config.js',
        '.next/',
        'types/',
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '@/components': path.resolve(__dirname, './components'),
      '@/hooks': path.resolve(__dirname, './hooks'),
      '@/types': path.resolve(__dirname, './types'),
      '@/constants': path.resolve(__dirname, './constants'),
      '@/styles': path.resolve(__dirname, './styles'),
      '@/lib': path.resolve(__dirname, './lib'),
    },
  },
});
