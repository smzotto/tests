import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.experian.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Experian/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://www.experian.com/');

  // Click the sign in link.
  await page.getByRole('link', { name: 'Sign In' }).click();

  // Expects page to have a heading with the name of Member Sign In.
  await expect(page.getByRole('heading', { name: 'Member Sign In' })).toBeVisible();
});
