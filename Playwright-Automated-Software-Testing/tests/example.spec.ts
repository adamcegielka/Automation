import { test, expect } from '@playwright/test';

test('First test', async ({ page }) => {
  const url = 'https://automationteststore.com/';
  await page.goto(url);
  await expect(page).toHaveURL(url);
});

test('Simple basic test', async ({ page }) => {
  await page.goto('https://www.example.com/');
  const pageTitle = await page.locator('h1');
  await expect(pageTitle).toContainText('Example Domain');
});
