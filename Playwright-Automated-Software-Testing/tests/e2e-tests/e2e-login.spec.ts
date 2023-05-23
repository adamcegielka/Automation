import { test, expect } from '@playwright/test';
import { loginRegistrationData } from '../e2e-data/e2e-login.data';

test.describe('Login and Logout Flow', () => {

  // Before Hook
  test.beforeEach(async ({ page }) => {
    const url = 'http://zero.webappsecurity.com/';
    await page.goto(url);
  });

  // Negative Login
  test('negative login', async ({ page }) => {
    const userLoginIncorrect = loginRegistrationData.userLoginIncorrect;
    const userPasswordIncorrect = loginRegistrationData.userPasswordIncorrect;
    const errorMessage = 'Login and/or password are wrong.';

    await page.click('#signin_button');
    await page.type('#user_login', userLoginIncorrect);
    await page.type('#user_password', userPasswordIncorrect);
    await page.click('text=Sign in');

    await expect(page.getByText(errorMessage)).toBeVisible();
    // or
    const message = await page.locator('.alert-error');
    await expect(message).toContainText(errorMessage);
  });

  // Positive Login and Logout
  test('positive login and logout', async ({ page }) => {
    const userLogin = loginRegistrationData.userLogin;
    const userPassword = loginRegistrationData.userPassword;
    const goBack = 'http://zero.webappsecurity.com/index.html';
    const verifyActivityMessage = 'Show Transactions';
    const verifyTitleHomePage = 'Zero - Personal Banking - Loans - Credit Cards';

    await page.click('#signin_button');
    await page.type('#user_login', userLogin);
    await page.type('#user_password', userPassword);
    await page.click('text=Sign in');
    await page.goto(goBack);
    await page.click('#account_activity_link');

    const accountActivity = await page.getByText(verifyActivityMessage);
    await expect(accountActivity).toBeVisible();

    await page.getByText('username').click();
    await page.getByRole('link', { name: 'Logout' }).click();
    await expect(page).toHaveTitle(verifyTitleHomePage);
  });
});