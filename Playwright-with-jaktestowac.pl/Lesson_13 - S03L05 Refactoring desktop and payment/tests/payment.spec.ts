import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import { PaymentPage } from '../test-pages/payment.page';

test.describe('Payment testing', () => {

  test.beforeEach(async ({ page }) => {
    const userId = loginData.userId;
    const userPassword = loginData.userPassword;

    await page.goto('/');
    // Page Object Model - POM - Change from LoginPage to PaymentPage
    const paymentPage = new PaymentPage(page);
    await paymentPage.loginInput.fill(userId);
    await paymentPage.passwordInput.fill(userPassword);
    await paymentPage.loginButton.click();

    await page.getByRole('link', { name: 'płatności' }).click();
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
