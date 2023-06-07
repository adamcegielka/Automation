import { test } from '@playwright/test';

test.describe('Tips & Tricks Section', () => {

  // MOUSE MOVEMENT SIMULETION
  test('mouse movement simulation', async ({ page }) => {
    await page.goto('https://www.example.com/');
    await page.mouse.move(0, 0);
    await page.mouse.down();
    await page.mouse.move(0, 100);
    await page.mouse.up();
  });
});
