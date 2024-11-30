import { expect, test } from '@playwright/test';

test.describe('Login Page Tests', () => {
  test('unauthenticated user should see login page', async ({ page }) => {
    await page.goto('/login');

    const logo = page.getByTestId('logo');
    await expect(logo).toBeVisible();

    const logoBox = await logo.boundingBox();
    expect(logoBox).not.toBeNull();
    if (logoBox) {
      expect(logoBox.width).toBeGreaterThan(0);
      expect(logoBox.height).toBeGreaterThan(0);
    }

    const src = await logo.getAttribute('src');
    expect(src).toContain('logo.svg');
  });
});
