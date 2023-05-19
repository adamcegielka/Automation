import { test, expect } from '@playwright/test';

// MULTIPLE TESTS IN ONE
test.describe('Test suite', () => {
  // WORKING WITH INPUTS
  test.skip('working with inputs', async ({ page }) => {
    const url = 'http://zero.webappsecurity.com/';
    await page.goto(url);
    await page.click('#signin_button');
    await page.type('#user_login', 'some username');
    await page.type('#user_password', '123456');
    await page.click('text=Sign in');

    const errorMessage = await page.locator('.alert-error');
    await expect(errorMessage).toContainText('Login and/or password are wrong.');
  });

  // ASSERTION AND TAG TEST - @nameTag -- npx playwright test --grep @assert / OPPOSITE: npx playwright test --grep--invert @assert
  // https://playwright.dev/docs/test-assertions
  // https://playwright.dev/docs/test-annotations#tag-tests

  test('assertions @assert', async ({ page }) => {
    const url = 'https://www.example.com/';
    await page.goto(url);
    await expect(page).toHaveURL(url);
    await expect(page).toHaveTitle('Example Domain');

    // Checking a existent element
    const element = await page.locator('h1');
    await expect(element).toBeVisible();
    await expect(element).toHaveText('Example Domain');
    await expect(element).toHaveCount(1);

    // Checking a non-existent element
    const nonExistingElement = await page.locator('h5');
    await expect(nonExistingElement).not.toBeVisible();
  });
});