import { test, expect } from '@playwright/test';
import { loginRegistrationData } from '../e2e-data/e2e-login.data';

test.describe('Pay Bills - Purchase Foreign Currency', () => {
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

  test('purchase foreign currency', async ({ page }) => {
    await page.click('#pay_bills_tab');
    await page.locator('.ui-state-default.ui-corner-top').getByRole('link', { name: 'Purchase Foreign Currency' }).click();
      // or:
      // await page.click('text=Purchase Foreign Currency');

    await page.selectOption('#pc_currency', 'CHF');

    const valueChf = await page.locator('#sp_sell_rate');
    await expect(valueChf).toContainText('1 franc (CHF)');

    await page.type('#pc_amount', '2000');
    await page.click('input[name="inDollars"]');
      // or:
      // await page.click('#pc_inDollars_true');
    await page.click("#pc_calculate_costs");

    const conversionAmount = await page.locator('#pc_conversion_amount');
    await expect(conversionAmount).toContainText('2000.00 U.S. dollar (USD)');
    await page.click('#purchase_cash');

    const successfullyPurchased = await page.locator('#alert_content');
    await expect(successfullyPurchased).toBeVisible();
    await expect(successfullyPurchased).toContainText('Foreign currency cash was successfully purchased.');
  });
});
