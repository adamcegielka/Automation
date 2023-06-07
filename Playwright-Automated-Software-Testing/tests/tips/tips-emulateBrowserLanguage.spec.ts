import { test } from '@playwright/test';

test.describe('Tips & Tricks Section', () => {

  test('emulate browser language and timezone', async ({ page }) => {
    await page.goto('https://www.booking.com/');
  });
});

// npx playwright open --timezone='Europe/Rome' --lang='it-IT' booking.com