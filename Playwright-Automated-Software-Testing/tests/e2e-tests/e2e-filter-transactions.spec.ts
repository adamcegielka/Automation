import { test, expect } from '@playwright/test';
import { loginRegistrationData } from '../e2e-data/e2e-login.data';

test.describe('Filter transactions', () => {
  // Login
  test.beforeEach(async ({ page }) => {
    const url = 'http://zero.webappsecurity.com/';
    const userLogin = loginRegistrationData.userLogin;
    const userPassword = loginRegistrationData.userPassword;
    const goBack = 'http://zero.webappsecurity.com/index.html';

    await page.goto(url);
    await page.click('#signin_button');
    await page.type('#user_login', userLogin);
    await page.type('#user_password', userPassword);
    await page.click('text=Sign in');
    await page.goto(goBack);
    await page.click('#account_activity_link');
    await page.click('#transfer_funds_tab');
  });

  test('verify the results for each accont', async ({ page }) => {
    await page.click('#account_activity_tab');
    await page.selectOption('#aa_accountId', '2');
    const checkingAccount = await page.locator('#all_transactions_for_account tbody tr');
    await expect(checkingAccount).toHaveCount(3);

    await page.selectOption('#aa_accountId', '4');
    const checkingLoan = await page.locator('#all_transactions_for_account tbody tr');
    await expect(checkingLoan).toHaveCount(2);
    
    await page.selectOption('#aa_accountId', '6');
    const noResults = await page.locator('.well');
    await expect(noResults).toBeVisible();
  })
});
