import { test } from '@playwright/test';

test.describe('Tips & Tricks Section', () => {

  // MULTIPLE BROWSER PAGES
  test('multiple browser tabe inside one browser', async ({ browser }) => {
    const context = await browser.newContext();
    const page1 = await context.newPage();
    const page2 = await context.newPage();
    const page3 = await context.newPage();
    await page1.goto('https://www.example.com/');
    await page2.goto('https://www.example.com/');
    await page3.goto('https://www.example.com/');
    await page1.waitForTimeout(5000);
  });
});

// npx playwright test --config=playwright.config.ts --project=Chromium --headed
