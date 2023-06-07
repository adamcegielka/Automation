import { test } from '@playwright/test';

test.describe('Tips & Tricks Section', () => {

  test('generate pdf files', async ({ page }) => {
    await page.goto('https://www.example.com/');
  });
});

// npx playwright pdf https://www.example.com pdf-files/myFile.pdf
// npx playwright pdf amazon.com pdf-files/amazonPage.pdf