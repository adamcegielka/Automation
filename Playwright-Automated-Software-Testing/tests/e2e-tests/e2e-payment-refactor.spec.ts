import { test, expect } from '@playwright/test';
import { loginRegistrationData } from '../e2e-data/e2e-login.data';
import { HomePage } from '../../page-objects/HomePage';
import { LoginPage } from '../../page-objects/LoginPage';
import { PaymentPage } from '../../page-objects/PaymentPage';
import { Navbar } from '../../page-objects/components/Navbar';

test.describe.only('New Payment', () => {
  let homePage: HomePage;
  let loginPage: LoginPage;
  let paymentPage: PaymentPage;
  let navbar: Navbar;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    paymentPage = new PaymentPage(page);
    navbar = new Navbar(page);

    const userLogin = loginRegistrationData.userLogin;
    const userPassword = loginRegistrationData.userPassword;
    const goBack = 'http://zero.webappsecurity.com/index.html';

    await homePage.visit();
    await homePage.clickOnSignIn();
    await loginPage.login(userLogin, userPassword);

    // ERROR
    await page.goto(goBack);
    await page.click('#account_activity_link');
    await page.click('#transfer_funds_tab');
  });

  test('Should send new payment', async ({ page }) => {
    await navbar.clickOnTabe('Pay Bills');
    await paymentPage.createPayment();
    await paymentPage.assertPayment();
  });
});
