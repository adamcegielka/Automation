import { Page } from '@playwright/test';
import { SideMenuComponent } from '../components/side-menu.component';

export class PaymentPage {
  constructor(private page: Page) {}

  sideMenu = new SideMenuComponent(this.page);

  loginInput = this.page.getByTestId('login-input');
  passwordInput = this.page.getByTestId('password-input');
  loginButton = this.page.getByTestId('login-button');

  transferReceiver = this.page.getByTestId('transfer_receiver');
  formAccount = this.page.getByTestId('form_account_to');
  formAmount = this.page.getByTestId('form_amount');
  makeTransfer = this.page.getByRole('button', { name: 'wykonaj przelew' });
  closeButton = this.page.getByTestId('close-button');

  messagesExpect = this.page.locator('#show_messages');
}
