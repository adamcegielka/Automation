import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import { LoginPage } from '../test-pages/login.page';

test.describe('User login to Demobank', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('successful login with too short username', async ({ page }) => {
    // Arrang

    const userId = loginData.userId;
    const userPassword = loginData.userPassword;
    const expectedUserName = 'Jan Demobankowy';

    // Act // Page Object Model - POM
    const loginPage = new LoginPage(page);
    await loginPage.loginInput.fill(userId);
    await loginPage.passwordInput.fill(userPassword);
    await loginPage.loginButton.click();

    // Assert
    await expect(page.getByTestId('user-name')).toHaveText(expectedUserName);
  });

  test('unsuccessful login with too short username', async ({ page }) => {
    // Arrang
    const shortUserId = 'testy';
    const expectErrorMessage = 'identyfikator ma min. 8 znaków';

    // Act - POM
    const loginPage = new LoginPage(page);
    await loginPage.loginInput.fill(shortUserId);
    await loginPage.passwordInput.click();

    // Assert - POM
    await expect(loginPage.loginError).toHaveText(expectErrorMessage);
  });

  test('unsuccessful login with too short password', async ({ page }) => {
    // Arrang
    const userId = loginData.userId;
    const userPasswordShort = '87654';
    const expectErrorMessage = 'hasło ma min. 8 znaków';

    // Act - POM
    const loginPage = new LoginPage(page);
    await loginPage.loginInput.fill(userId);
    await loginPage.passwordInput.fill(userPasswordShort);
    await loginPage.passwordInput.blur();

    // Assert - POM
    await expect(loginPage.passwordShort).toHaveText(expectErrorMessage);
  });
});
