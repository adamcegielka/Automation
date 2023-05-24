import { test, expect } from '@playwright/test'

test.describe('Search Engine', () => {

  test.beforeEach(async ({ page }) => {
    const url = 'http://zero.webappsecurity.com/';
    await page.goto(url);
  });

  test('bank search', async ({ page }) => {
    const firstSearchText = 'bonc';
    const secondSearchText = 'bank';

    await page.type('#searchTerm', firstSearchText);
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');
    await page.type('#searchTerm', secondSearchText);
    await page.keyboard.press('Enter');

    // Assertion
    const numberOfLinks = await page.locator('li > a');
    await expect(numberOfLinks).toHaveCount(2);
  });

  test('book search', async ({ page }) => {
    const searchBook = 'book';

    await page.type('#searchTerm', searchBook);
    await page.keyboard.press('Enter');

    // Assertion
    const verifyTitlePage = 'Zero - Search Tips';
    await expect(page).toHaveTitle(verifyTitlePage);
    const notFound = await page.getByText(`No results were found for the query: ${searchBook}`);
    await expect(notFound).toBeVisible();
  })
});