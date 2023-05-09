import { test, expect } from '@playwright/test';

test('First test', async ({ page }) => {
  const url = 'https://automationteststore.com/';
  await page.goto(url);
  await expect(page).toHaveURL(url);
});