import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['node_modules'],
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
  },
});
