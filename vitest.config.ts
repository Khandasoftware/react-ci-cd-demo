import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // enable global test functions (describe, it, expect)
    environment: 'jsdom', // simulates browser environment for React
    setupFiles: './vitest.setup.ts', // optional: global setup for tests
    coverage: {
      reporter: ['text', 'lcov'],
      exclude: ['node_modules/', 'vite.config.ts']
    }
  }
})
