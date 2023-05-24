import { test, expect } from '@playwright/test'
import { loginRegistrationData } from '../e2e-data/e2e-login.data';

test.describe('Transfer Funds and Make Payments', () => {

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
    });

    test('transfer funds - selection after the drop-down list', async ({ page }) => {
        const amount = '245';
        const description = 'Money for a trip';

        await page.click('#transfer_funds_tab');
        await page.selectOption('#tf_fromAccountId', '3');
        await page.selectOption('#tf_toAccountId', '5');
        await page.type('#tf_amount', amount);
        await page.type('#tf_description', description);
        await page.click('#btn_submit');

        // Assertion - Contains part of the text
        const boardHeader = await page.locator('h2.board-header');
        await expect(boardHeader).toContainText('Verify');

        await page.click('button[type="submit"]');   // or: await page.click('#btn_submit');
        
        // Assertion
        const verifyMessage = await page.locator('.alert.alert-success');
        await expect(verifyMessage).toContainText('You successfully submitted your transaction.');
        const verifyAmount = await page.locator('div.board-content');
        await expect(verifyAmount).toContainText(`$ ${amount}`);
    })
});