// Parallel Tasts Execution

import { test, expect } from '@playwright/test';

test.describe.parallel('Parallel Tasts Execution', () => {
  
  test.beforeEach(async ({ page }) => {
    const url = 'https://automationteststore.com/';
    await page.goto(url);
  });
  
  test('Test one', async ({ page }) => {
    await page.locator('#categorymenu').getByRole('link', { name: 'Apparel & accessories' }).click();
    await expect(page.locator('.maintext')).toHaveText('Apparel & accessories');
  });

  test('Test second', async ({ page }) => {
    await page.getByRole('link', { name: ' Cart' }).click();
    await expect(page.locator('.maintext')).toHaveText('Shopping Cart');
  });

  test('Test third', async ({ page }) => {
    await page.getByRole('link', { name: ' Specials' }).click();
    await expect(page.locator('.maintext')).toHaveText('Special Offers');
  });
});