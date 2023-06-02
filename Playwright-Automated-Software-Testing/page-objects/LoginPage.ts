import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
  // Define selectors
  readonly page: Page;
  readonly userNameInput: Locator;
  readonly userPasswordInput: Locator;
  readonly submitButton: Locator;
  readonly usernameButton: Locator;
  readonly logoutButton: Locator;
  readonly errorMessage: Locator;
  readonly loginForm: Locator; // Snapshot

  // Init selector using constructor
  constructor(page: Page) {
    this.page = page;
    this.userNameInput = page.locator('#user_login');
    this.userPasswordInput = page.locator('#user_password');
    this.submitButton = page.locator('text=Sign in');

    this.usernameButton = page.getByText('username');
    this.logoutButton = page.getByRole('link', { name: 'Logout' });

    this.errorMessage = page.locator('.alert-error');
    this.loginForm = page.locator('#login_form'); // Snapshot
  }

  async login(userName: string, userPassword: string) {
    await this.userNameInput.type(userName);
    await this.userPasswordInput.type(userPassword);
    await this.submitButton.click();
  }

  async logout() {
    await this.usernameButton.click();
    await this.logoutButton.click();
  }

  // assertions
  async asserErrorMessage() {
    await expect(this.errorMessage).toContainText(
      'Login and/or password are wrong.'
    );
  }

  // Snapshots:
  async snapshotLoginForm() {
    await expect(await this.loginForm.screenshot()).toMatchSnapshot('login-form.png');
  }

  async snapchotErrorMessage() {
    await expect(await this.errorMessage.screenshot()).toMatchSnapshot('login-error.png');
  }
}
