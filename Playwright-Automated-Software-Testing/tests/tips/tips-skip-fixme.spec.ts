import { test } from '@playwright/test';

test.describe('Tips & Tricks Section', () => {

  // SKIP BROWSER ANNOTATION -> browserName
  test('test skip browser', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium', 'Feature not ready in Chromium browser');
    await page.goto('https://www.example.com/');
  });

  // FIXME ANNOTATION -> browserName
  test('Test fixme annotation', async ({ page, browserName }) => {
    test.fixme(browserName === 'chromium', 'test is not stable, needs revision');
    await page.goto('https://www.example.com/');
  });
});

// npx playwright test --config=playwright.config.ts --project=Chromium