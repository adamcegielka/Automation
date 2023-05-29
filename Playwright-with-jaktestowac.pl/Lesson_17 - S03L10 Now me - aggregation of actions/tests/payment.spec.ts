import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import { PaymentPage } from '../test-pages/payment.page';
import { LoginPage } from '../test-pages/login.page';
import { DesktopPage } from '../test-pages/desktop.page';

test.describe('Payment testing', () => {
  let paymentPage: PaymentPage;

  test.beforeEach(async ({ page }) => {
    const userId = loginData.userId;
    const userPassword = loginData.userPassword;

    await page.goto('/');
    
    const loginPage = new LoginPage(page);
    await loginPage.login(userId, userPassword);

    const desktopPage = new DesktopPage(page);
    await desktopPage.sideMenu.paymentButton.click();

    paymentPage = new PaymentPage(page);
  });

  test('easy payment', async ({ page }) => {
    // Arrang
    const transferReceiverName = 'Smok Wawelski';
    const numerAccount = '12 3456 7891 2345 5678 9123 4567';
    const transferAmount = '102';
    const expectMessage = `Przelew wykonany! ${transferAmount},00PLN dla Smok Wawelski`;

    // Act
    await paymentPage.makeTransfer(transferReceiverName, numerAccount, transferAmount);

    // Assert
    await expect(paymentPage.messagesExpect).toHaveText(expectMessage);
  });
});
