import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import { PaymentPage } from '../test-pages/payment.page';
import { LoginPage } from '../test-pages/login.page';
import { DesktopPage } from '../test-pages/desktop.page';

test.describe.only('Payment testing', () => {

  test.beforeEach(async ({ page }) => {
    const userId = loginData.userId;
    const userPassword = loginData.userPassword;

    await page.goto('/');
    // Page Object Model - POM - Change from LoginPage to PaymentPage
    const loginPage = new LoginPage(page);
    await loginPage.loginInput.fill(userId);
    await loginPage.passwordInput.fill(userPassword);
    await loginPage.loginButton.click();

    const desktopPage = new DesktopPage(page);
    await desktopPage.paymentButton.click();
  });

  test('easy payment', async ({ page }) => {
    // Arrang
    const transferReceiverName = 'Smok Wawelski';
    const numerAccount = '12 3456 7891 2345 5678 9123 4567';
    const transferAmount = '102';
    const expectMessage = `Przelew wykonany! ${transferAmount},00PLN dla Smok Wawelski`;

    // Act
    const paymentPage = new PaymentPage(page);
    await paymentPage.transferReceiver.fill(transferReceiverName);
    await paymentPage.formAccount.fill(numerAccount);
    await paymentPage.formAmount.fill(transferAmount);
    await paymentPage.makeTransfer.click();
    await paymentPage.closeButton.click();

    // Assert
    await expect(paymentPage.messagesExpect).toHaveText(expectMessage);
  });
});
