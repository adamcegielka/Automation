// Custom Function - file: helpers.ts
import { test, expect } from '@playwright/test';
import { assertTitle, loadHomePage } from '../helpers';

// ASSERTIONS: test.only(), test.skip(), test.fail(), test.fixme(), test.slow()
test('Custom Helpers', async ({ page }) => {
  await loadHomePage(page);
  //   await page.pause();      // use for debagging
  await assertTitle(page);
});