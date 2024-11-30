import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  webServer: {
    command: 'pnpm run dev', // Start Vite server
    port: 3000,
    reuseExistingServer: true,
  },
  use: {
    baseURL: 'http://localhost:3000', // Update as needed
    browserName: 'chromium',
    trace: 'on-first-retry',
  },
});
