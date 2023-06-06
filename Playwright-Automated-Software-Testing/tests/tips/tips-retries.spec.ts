import { test } from '@playwright/test';

test.describe('Tips & Tricks Section', () => {

  // RETRIES
  test.only('Test retries', async ({ page }) => {
    await page.goto('https//www.example.com/');   // with error ":"
  });
});

// npx playwright test --config=playwright.config.ts --project=Chromium --retries=3