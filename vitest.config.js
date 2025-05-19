import { defineConfig } from "vitest/config";

export default defineConfig({
  root: 'tests',
  test: {
    name: 'default',
    root: '.',
    include: ['tests/**/*.test.*'],
    browser: {
      enabled: true,
      instances: [
        {
          browser: 'chromium',
        }
      ],
      provider: 'playwright',
    }
  }
})