import { expect, test } from '@playwright/test';

test.describe('Home Page Tests', () => {
  test('unauthenticated user should see login page', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL('/login');
  });
});
