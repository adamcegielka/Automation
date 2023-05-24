import { test, expect } from '@playwright/test';
import { loginRegistrationData } from '../e2e-data/e2e-login.data';

test.describe('Feedback Form', () => {

  test.beforeEach(async ({ page }) => {
    const url = 'http://zero.webappsecurity.com/';
    await page.goto(url);
    await page.click('#feedback');
  });

  // Reset feedback form
  test('completing the form and reset', async ({ page }) => {
    const userName = loginRegistrationData.userName;
    const userEmail = loginRegistrationData.userEmail;
    const subject = 'What is Lorem Ipsum?';
    const questionMessage = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry';

    await page.type('#name', userName);
    await page.type('#email', userEmail);
    await page.type('#subject', subject);
    await page.type('#comment', questionMessage);
    await page.click('input[name="clear"]');

    // Assertion
    const nameInput = await page.locator('#name');
    const emailInput = await page.locator('#email');
    const subjectInput = await page.locator('#subject');
    const questionMessageInput = await page.locator('#comment');
    await expect(nameInput).toBeEmpty();
    await expect(emailInput).toBeEmpty();
    await expect(subjectInput).toBeEmpty();
    await expect(questionMessageInput).toBeEmpty();
  })

  // Submit feedback form
  test('completing the form and send', async ({ page }) => {
    const userName = loginRegistrationData.userName;
    const userEmail = loginRegistrationData.userEmail;
    const subject = 'What is Lorem Ipsum?';
    const questionMessage = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry';

    await page.type('#name', userName);
    await page.type('#email', userEmail);
    await page.type('#subject', subject);
    await page.type('#comment', questionMessage);
    await page.click('input[type="submit"]');

    // Assertion
    await page.waitForSelector('#feedback-title');
    const verifyMessage = `Thank you for your comments, ${userName}. They will be reviewed by our Customer Service staff and given the full attention that they deserve.`;
    await expect(page.getByText(verifyMessage)).toBeVisible();
  })
});