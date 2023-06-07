import { test } from '@playwright/test';

test.describe('Tips & Tricks Section', () => {

  // PARAMETRIZED TESTS
  const people = ['Adam', 'Ewa', 'Jan', 'Ola', 'Darek'];
  for (const name of people) {
    test(`running test for ${name}`, async ({ page }) => {
        await page.goto('http://zero.webappsecurity.com/');
        await page.type('#searchTerm', `${name}`);
        await page.waitForTimeout(3000);
    });
  }
});

// npx playwright test --config=playwright.config.ts --project=Chromium --headed