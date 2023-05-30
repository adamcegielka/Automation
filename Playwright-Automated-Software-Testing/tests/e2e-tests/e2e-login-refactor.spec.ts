import { test, expect } from '@playwright/test';
import { loginRegistrationData } from '../e2e-data/e2e-login.data';
import { LoginPage } from '../../page-objects/LoginPage';

test.describe.only('Login and Logout Flow', () => {
  let loginPage: LoginPage;

  // Before Hook
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.visit();
  });

  // Negative Login
  test('negative login', async ({ page }) => {
    const userLoginIncorrect = loginRegistrationData.userLoginIncorrect;
    const userPasswordIncorrect = loginRegistrationData.userPasswordIncorrect;

    await page.click('#signin_button');
    await loginPage.login(userLoginIncorrect, userPasswordIncorrect);

    await loginPage.asserErrorMessage();
  });

  // Positive Login and Logout
  test('positive login and logout', async ({ page }) => {
    const userLogin = loginRegistrationData.userLogin;
    const userPassword = loginRegistrationData.userPassword;
    const goBack = 'http://zero.webappsecurity.com/index.html';
    const verifyActivityMessage = 'Show Transactions';
    const verifyTitleHomePage = 'Zero - Personal Banking - Loans - Credit Cards';

    await page.click('#signin_button');
    await loginPage.login(userLogin, userPassword);

    // ERROR - CLICKING THE BACK BUTTON
    await page.goto(goBack);
    await page.click('#account_activity_link');

    const accountActivity = await page.locator ('.board-header');
    await expect(accountActivity).toContainText(verifyActivityMessage);

    await page.getByText('username').click();
    await page.getByRole('link', { name: 'Logout' }).click();
    await expect(page).toHaveTitle(verifyTitleHomePage);
  });
});