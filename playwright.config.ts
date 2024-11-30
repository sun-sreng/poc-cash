import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e-tests',
  webServer: {
    command: 'pnpm run dev', // Start Vite server
    port: 3000,
    reuseExistingServer: true,
  },
  use: {
    baseURL: 'http://localhost:3000', // Update as needed
    browserName: 'chromium',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'on',
  },
  reporter: [['html', { outputFolder: 'playwright-report' }]],
});
