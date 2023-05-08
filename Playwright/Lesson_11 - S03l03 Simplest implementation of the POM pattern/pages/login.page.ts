import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  loginInput = this.page.getByTestId('login-input');
  passwordInput = this.page.getByTestId('password-input');
  loginButton = this.page.getByTestId('login-button');

  // await page.getByTestId('login-input').fill(userId);
  // await page.getByTestId('password-input').fill(userPassword);
  // await page.getByTestId('login-button').click();
}
