import { expect, Locator, Page } from '@playwright/test';

export class PaymentPage {
  readonly page: Page;
  readonly payeeSelectBox: Locator;
  readonly payeeDetalButton: Locator;
  readonly payeeDetail: Locator;
  readonly accontSelectBox: Locator;
  readonly amountInput: Locator;
  readonly dateInput: Locator;
  readonly descriptionInput: Locator;
  readonly submitPaymentButton: Locator;
  readonly assertPaymentMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.payeeSelectBox = page.locator('#sp_payee');
    this.payeeDetalButton = page.locator('#sp_get_payee_details');
    this.payeeDetail = page.locator('#sp_payee_details');
    this.accontSelectBox = page.locator('#sp_account');
    this.amountInput = page.locator('#sp_amount');
    this.dateInput = page.locator('#sp_date');
    this.descriptionInput = page.locator('#sp_description');
    this.submitPaymentButton = page.locator('#pay_saved_payees');
    this.assertPaymentMessage = page.locator('#alert_content > span');
  }

  async createPayment() {
    await this.payeeSelectBox.selectOption('apple');
    await this.payeeDetalButton.click();
    await expect(this.payeeDetail).toBeVisible();
    await this.accontSelectBox.selectOption('6');
    await this.amountInput.type('4050');
    await this.dateInput.type('2023-06-01');
    await this.descriptionInput.type('Money for holidays');
    await this.submitPaymentButton.click();
  }

  // assertions

  async assertPayment() {
    await expect(this.assertPaymentMessage).toBeVisible();
    await expect(this.assertPaymentMessage).toContainText(
      'The payment was successfully submitted.'
    );
  }
}
