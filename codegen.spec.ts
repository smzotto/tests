import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.locator('html').click();
  await page.locator('html').click();
  await page.getByText('This is just a demo of').click();
  await page.goto('https://todomvc.com/');
  await page.getByRole('link', { name: 'Blog' }).click();
  await page.getByRole('link', { name: 'Angular New' }).click();
  await page.getByRole('heading', { name: 'Todos' }).click();
  await page.getByRole('heading', { name: 'Todos' }).click();
  await page.locator('html').click();
});
