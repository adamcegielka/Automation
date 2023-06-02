import { test, expect } from '@playwright/test';

test.describe.only('Visual Regression Testing', () => {
  test('full page snapshot', async ({ page }) => {
    await page.goto('https://www.example.com');
    expect(await page.screenshot()).toMatchSnapshot('homepage.png');
  });
});
