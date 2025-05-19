import {storybookTest} from "@storybook/addon-vitest/vitest-plugin";
import {defineConfig} from "vitest/config";
import path from 'node:path';

export default defineConfig({
  plugins: [
    storybookTest({
      configDir: './.storybook',
      storybookScript: "storybook:start --ci",
    })
  ],
  test: {
    name: 'storybook',
    browser: {
      enabled: true,
      headless: true,
      instances: [
        {
          browser: 'chromium',
        }
      ],
      provider: 'playwright'
    },
    setupFiles: [path.join(import.meta.dirname, 'vitest.setup.js')],
  }
})