import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import { LoginPage } from '../test-pages/login.page';
import { DesktopPage } from '../test-pages/desktop.page';

test.describe('Desktop testing', () => {
  let desktopPage: DesktopPage;

  test.beforeEach(async ({ page }) => {
    const userId = loginData.userId;
    const userPassword = loginData.userPassword;

    await page.goto('/');
    
    const loginPage = new LoginPage(page);
    await loginPage.login(userId, userPassword);
    
    desktopPage = new DesktopPage(page);
  });

  test('quick payment with correct data', async ({ page }) => {
    // Arrang
    const receiverId = '2';
    const transferAmount = '150';
    const transferTitle = 'Zwrot kasy';
    const expectedTransferReceiver = 'Chuck Demobankowy';

    // Act - Refactoring
    await desktopPage.quickPayment(receiverId, transferAmount, transferTitle);

    // await desktopPage.transferReceiver.selectOption(receiverId);
    // await desktopPage.transferAmount.fill(transferAmount);
    // await desktopPage.transferTitle.fill(transferTitle);
    // await desktopPage.buttonMake.click();
    // await desktopPage.buttonClose.click();

    // Assert
    await expect(desktopPage.messageText).toHaveText(`Przelew wykonany! ${expectedTransferReceiver} - ${transferAmount},00PLN - ${transferTitle}`);
  });

  test('successful mobile phone top-up', async ({ page }) => {
    // Arrang
    const phoneNumber = '502 xxx xxx';
    const topUpAmount = '90';
    const expectMessage = `Doładowanie wykonane! ${topUpAmount},00PLN na numer ${phoneNumber}`;

    // Act - Refactoring
    await desktopPage.phoneTopUp(phoneNumber, topUpAmount);

    // await desktopPage.topupReceiver.selectOption(phoneNumber);
    // await desktopPage.topupAmount.fill(topUpAmount);
    // await desktopPage.topupAgreement.click();
    // await desktopPage.topUpPhone.click();
    // await desktopPage.buttonClose.click();

    // Assert
    await expect(desktopPage.messageText).toHaveText(expectMessage);
  });

  test('correct balance after successful mobile phone top-up', async ({ page }) => {
    // Arrang
    const phoneNumber = '502 xxx xxx';
    const topUpAmount = '90';
    const initialBalance = await desktopPage.moneyValue.innerText();
    const expectBalance = Number(initialBalance) - Number(topUpAmount);

    // Act - Refactoring
    await desktopPage.phoneTopUp(phoneNumber, topUpAmount);

    // await desktopPage.topupReceiver.selectOption(phoneNumber);
    // await desktopPage.topupAmount.fill(topUpAmount);
    // await desktopPage.topupAgreement.click();
    // await desktopPage.topUpPhone.click();
    // await desktopPage.buttonClose.click();

    // Assert
    await expect(desktopPage.moneyValue).toHaveText(`${expectBalance}`);
  });
});
