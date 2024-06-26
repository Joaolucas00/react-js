import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    include: ['**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    globals: true,
    environment: "jsdom",
    setupFiles: ["./setup-tests.js"],
    coverage: {
      provider: 'istanbul'
    }
  },
})