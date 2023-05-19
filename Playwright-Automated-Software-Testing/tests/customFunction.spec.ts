// Custom Function - file: helpers.ts
import { test, expect } from '@playwright/test';
import { assertTitle, loadHomePage } from '../helpers';

test('Custom Helpers', async ({ page }) => {
  await loadHomePage(page);
  //   await page.pause();      // use for debagging
  await assertTitle(page);
});