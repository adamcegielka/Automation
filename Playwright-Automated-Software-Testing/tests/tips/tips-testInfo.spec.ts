import { test } from '@playwright/test';

test.describe('Tips & Tricks Section', () => {
  
  // TEST INFO OBJECT -> testInfo
  test('testInfo object - all', async ({ page }, testInfo) => {
    await page.goto('https://www.example.com/');
    console.log(testInfo);
  });

  test('testInfo object - one', async ({ page }, testInfo) => {
    await page.goto('https://www.example.com/');
    console.log(testInfo.title);
  });
});

// npx playwright test --config=playwright.config.ts --project=Chromium
