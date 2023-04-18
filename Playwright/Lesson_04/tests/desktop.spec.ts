import { test, expect } from '@playwright/test';

test.describe('Desktop testing', () => {
  test('quick payment with correct data', async ({ page }) => {
    await page.goto('https://demo-bank.vercel.app/');
    await page.getByTestId('login-input').fill('testyAdi');
    await page.getByTestId('password-input').fill('password');
    await page.getByTestId('login-button').click();
    await page.locator('#widget_1_transfer_receiver').selectOption('2');
    await page.locator('#widget_1_transfer_amount').fill('150');
    await page.locator('#widget_1_transfer_title').fill('Zwrot kasy');

    await page.getByRole('button', { name: 'wykonaj' }).click();
    // await page.locator('#execute_btn').click();

    await page.getByTestId('close-button').click();
    // await page.getByRole('link', { name: 'Przelew wykonany! Chuck Demobankowy - 150,00PLN - Zwrot kasy' }).click();

    await expect(page.locator('#show_messages')).toHaveText('Przelew wykonany! Chuck Demobankowy - 150,00PLN - Zwrot kasy');
  });

  test('successful mobile top-up', async ({ page }) => {
    await page.goto('https://demo-bank.vercel.app/');
    await page.getByTestId('login-input').fill('testyAdi');
    await page.getByTestId('password-input').fill('password');
    await page.getByTestId('login-button').click();

    await page.locator('#widget_1_topup_receiver').selectOption('502 xxx xxx');
    await page.locator('#widget_1_topup_amount').fill('90');
    await page.locator('#uniform-widget_1_topup_agreement span').click();
    await page.getByRole('button', { name: 'doładuj telefon' }).click();
    await page.getByTestId('close-button').click();

    await expect(page.locator('#show_messages')).toHaveText('Doładowanie wykonane! 90,00PLN na numer 502 xxx xxx');
  });
});