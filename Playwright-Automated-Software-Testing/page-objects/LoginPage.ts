import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
  // Define selectors
  readonly page: Page;
  readonly userNameInput: Locator;
  readonly userPasswordInput: Locator;
  readonly submitButton: Locator;
  readonly errorMessage: Locator;

  // Init selector using constructor
  constructor(page: Page) {
    this.page = page;
    this.userNameInput = page.locator('#user_login');
    this.userPasswordInput = page.locator('#user_password');
    this.submitButton = page.locator('text=Sign in');
    this.errorMessage = page.locator('.alert-error');
  }

  async login(userName: string, userPassword: string) {
    await this.userNameInput.type(userName);
    await this.userPasswordInput.type(userPassword);
    await this.submitButton.click();
  }

  // assertions
  async asserErrorMessage() {
    await expect(this.errorMessage).toContainText(
      'Login and/or password are wrong.'
    );
  }

  // Define login page methods
  async visit() {
    await this.page.goto('http://zero.webappsecurity.com/');
  }
}
