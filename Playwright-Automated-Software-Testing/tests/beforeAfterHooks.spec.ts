// Before and After Hooks

import { test, expect } from '@playwright/test';

test.describe.only('Before and After Hooks', () => {

  // Before test
  test.beforeEach(async ({ page }) => {
    const url = 'https://automationteststore.com/';
    await page.goto(url);
  });

  //After test
  test.afterEach(async ({ page }) => {
    await page.close();
  })

  test('Test one', async ({ page }) => {
    await page.locator('#categorymenu').getByRole('link', { name: 'Apparel & accessories' }).click();
    await expect(page.locator('.maintext')).toHaveText('Apparel & accessories');
  });

  test('Test second', async ({ page }) => {
    await page.getByRole('link', { name: ' Cart' }).click();
    await expect(page.locator('.maintext')).toHaveText('Shopping Cart');
  });
});
