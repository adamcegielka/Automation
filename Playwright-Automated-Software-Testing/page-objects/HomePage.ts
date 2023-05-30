import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly signInButton: Locator;
  readonly searchBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInButton = page.locator('#signin_button');
    this.searchBox = page.locator('#searchTerm');
  }

  async visit() {
    await this.page.goto('http://zero.webappsecurity.com/');
  }

  async clickOnSignIn() {
    await this.signInButton.click();
  }

  // assertions
  async assertHomePage() {
    await expect(this.page).toHaveTitle('Zero - Personal Banking - Loans - Credit Cards');
  }

  async searchEngine(phrase: string) {
    await this.searchBox.type(phrase);
    await this.page.keyboard.press('Enter');
  }
}
