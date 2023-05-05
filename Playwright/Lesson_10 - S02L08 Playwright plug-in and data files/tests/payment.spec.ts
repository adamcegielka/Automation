import { test, expect } from '@playwright/test';
import { loginDate } from '../test-date/login.date';

test.describe('Payment testing', () => {
  test.beforeEach(async ({ page }) => {
    const userId = loginDate.userId;
    const userPassword = loginDate.userPassword;

    await page.goto('/');
    await page.getByTestId('login-input').fill(userId);
    await page.getByTestId('password-input').fill(userPassword);
    await page.getByTestId('login-button').click();
    await page.getByRole('link', { name: 'płatności' }).click();
  });

  test('easy payment', async ({ page }) => {
    // Arrang
    const transferReceiverName = 'Smok Wawelski';
    const numerAccount = '12 3456 7891 2345 5678 9123 4567';
    const transferAmount = '102';
    const expectMessage = `Przelew wykonany! ${transferAmount},00PLN dla Smok Wawelski`;

    // Act
    await page.getByTestId('transfer_receiver').fill(transferReceiverName);
    await page.getByTestId('form_account_to').fill(numerAccount);
    await page.getByTestId('form_amount').fill(transferAmount);
    await page.getByRole('button', { name: 'wykonaj przelew' }).click();
    await page.getByTestId('close-button').click();

    // Assert
    await expect(page.locator('#show_messages')).toHaveText(expectMessage);
  });
});
