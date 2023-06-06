import { test, expect } from '@playwright/test';

test.describe('Tips & Tricks Section', () => {

  test('testInfo object - all', async ({ page }, testInfo) => {
    await page.goto('https://www.example.com/');
    console.log(testInfo);
    // npx playwright test --config=playwright.config.ts --project=Chromium
  });

  test.only('testInfo object - one', async ({ page }, testInfo) => {
    await page.goto('https://www.example.com/');
    console.log(testInfo.title);
    // npx playwright test --config=playwright.config.ts --project=Chromium
  })
});
