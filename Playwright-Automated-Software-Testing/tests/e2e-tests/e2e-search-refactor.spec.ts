import { test, expect } from '@playwright/test'
import { HomePage } from '../../page-objects/HomePage';

test.describe('Search Engine', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);

    await homePage.visit();
  });

  test('bank search', async ({ page }) => {
    const searchBank = 'bank';

    await homePage.searchEngine(searchBank);
    
    const numberOfLinks = await page.locator('li > a');
    await expect(numberOfLinks).toHaveCount(2);
  });

  test('book search', async ({ page }) => {
    const searchBook = 'book';

    await homePage.searchEngine(searchBook);

    const verifyTitlePage = 'Zero - Search Tips';
    await expect(page).toHaveTitle(verifyTitlePage);

    const notFound = await page.getByText(`No results were found for the query: ${searchBook}`);
    await expect(notFound).toBeVisible();
  })
});