import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import { LoginPage } from '../test-pages/login.page';
import { DesktopPage } from '../test-pages/desktop.page';

test.describe('User login to Demobank', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    loginPage = new LoginPage(page);
  });

  test('successful login with too short username', async ({ page }) => {
    // Arrang

    const userId = loginData.userId;
    const userPassword = loginData.userPassword;
    const expectedUserName = 'Jan Demobankowy';

    // Act
     await loginPage.login(userId, userPassword);

    // Assert
    const desktopPage = new DesktopPage(page);
    await expect(desktopPage.userName).toHaveText(expectedUserName);
  });

  test('unsuccessful login with too short username', async ({ page }) => {
    // Arrang
    const shortUserId = 'testy';
    const expectErrorMessage = 'identyfikator ma min. 8 znaków';

    // Act
    await loginPage.loginInput.fill(shortUserId);
    await loginPage.passwordInput.click();

    // Assert
    await expect(loginPage.loginError).toHaveText(expectErrorMessage);
  });

  test('unsuccessful login with too short password', async ({ page }) => {
    // Arrang
    const userId = loginData.userId;
    const userPasswordShort = '87654';
    const expectErrorMessage = 'hasło ma min. 8 znaków';

    // Act
    await loginPage.loginInput.fill(userId);
    await loginPage.passwordInput.fill(userPasswordShort);
    await loginPage.passwordInput.blur();

    // Assert
    await expect(loginPage.passwordShort).toHaveText(expectErrorMessage);
  });
});
