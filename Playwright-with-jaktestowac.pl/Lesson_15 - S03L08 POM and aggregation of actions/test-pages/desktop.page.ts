import { Page } from '@playwright/test';
import { SideMenuComponent } from '../components/side-menu.component';

export class DesktopPage {
  constructor(private page: Page) {}

  sideMenu = new SideMenuComponent(this.page);

  transferReceiver = this.page.locator('#widget_1_transfer_receiver');
  transferAmount = this.page.locator('#widget_1_transfer_amount');
  transferTitle = this.page.locator('#widget_1_transfer_title');
  buttonMake = this.page.getByRole('button', { name: 'wykonaj' });
  buttonClose = this.page.getByTestId('close-button');

  messageText = this.page.locator('#show_messages');

  topupReceiver = this.page.locator('#widget_1_topup_receiver');
  topupAmount = this.page.locator('#widget_1_topup_amount');
  topupAgreement = this.page.locator('#uniform-widget_1_topup_agreement span');
  topUpPhone = this.page.getByRole('button', { name: 'doładuj telefon' });

  moneyValue = this.page.locator('#money_value');

  userName = this.page.getByTestId('user-name');
}
