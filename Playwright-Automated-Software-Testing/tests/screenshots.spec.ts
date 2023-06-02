import { test } from '@playwright/test';

// SCREENSHOTS
// https://playwright.dev/docs/screenshots
test.describe('Screenshots', () => {

  test('full page screenshots', async ({ page }) => {
    const url = 'https://www.example.com/';
    await page.goto(url);
    await page.screenshot({ path: 'screens/screenshot.png', fullPage: true });
  });

  test('element screenshot', async ({ page }) => {
    const url = 'http://zero.webappsecurity.com/';
    await page.goto(url);
    await page.locator('.carousel-inner').screenshot({ path: 'screens/scren_carusel.png' });
  });

  test('single element screenshot', async ({ page }) => {
    const url = 'https://www.example.com/';
    await page.goto(url);
    const element = await page.locator('h1');
    await element.screenshot( { path: 'screens/scren_single_element.png' });
  });
});
