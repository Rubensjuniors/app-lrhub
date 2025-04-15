/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import checker from 'vite-plugin-checker'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), checker({ typescript: true })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    open: true,
    fs: {
      deny: ['.env', '/etc', '/root'],
      allow: ['src', 'public']
    }
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './config/vitest/setup.ts',
    include: ['src/**/*.@(test|spec).{ts,tsx}'],
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  }
})
