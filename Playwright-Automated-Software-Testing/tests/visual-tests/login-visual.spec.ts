import { test } from '@playwright/test';
import { HomePage } from '../../page-objects/HomePage';
import { LoginPage } from '../../page-objects/LoginPage';

test.describe('Login Page Visual Tests', () => {
  let homePage: HomePage;
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);

    await homePage.visit();
    await homePage.clickOnSignIn();
  });

  test('login form', async ({ page }) => {
    await loginPage.snapshotLoginForm();
  });

  test('ligin error message', async ({ page }) => {
    await loginPage.login('Fail', 'some invalid password');
    await loginPage.snapchotErrorMessage();
  });
});
