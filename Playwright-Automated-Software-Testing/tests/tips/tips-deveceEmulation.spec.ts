// DEVICE TESTING

// npx playwright open --device='iPhone 13 Pro' wikipedia.com
// npx playwright open --device='Galaxy Tab S4' wikipedia.com

import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 13 Pro'],
});

test.only('test', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  await page.locator('#js-link-box-pl').click();
  await page.getByRole('button', { name: 'Szukaj' }).click();
  await page.getByRole('searchbox', { name: 'Przeszukaj Wikipedię' }).fill('Playwright');
  await page.getByRole('searchbox', { name: 'Przeszukaj Wikipedię' }).press('Enter');
  expect(page.getByRole('heading', { name: 'Wyniki wyszukiwania' })).toBeVisible();
});