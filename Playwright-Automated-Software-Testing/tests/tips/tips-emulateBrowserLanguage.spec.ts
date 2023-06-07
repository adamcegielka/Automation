import { test } from '@playwright/test';

test.describe('Tips & Tricks Section', () => {

  test('emulate browser language and timezone', async ({ page }) => {
    await page.goto('https://www.example.com/');
  });
});

// npx playwright screenshot --device='iPhone 13 Pro' --color-scheme=dark --wait-for-timeout=3000 twitter.com screens/twitter-iphone-image.png