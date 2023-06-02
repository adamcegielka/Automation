import { test } from '@playwright/test';
import { HomePage } from '../../page-objects/HomePage';
import { loginRegistrationData } from '../e2e-data/e2e-login.data';
import { FeedbackPage } from '../../page-objects/FeedbackPage';

test.describe('Feedback Form', () => {
  let homePage: HomePage;
  let feedbackPage: FeedbackPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    feedbackPage = new FeedbackPage(page);

    await homePage.visit();
    await homePage.clickOnFeedback();
  });

  // Reset feedback form
  test('completing the form and reset', async ({ page }) => {
    const userName = loginRegistrationData.userName;
    const userEmail = loginRegistrationData.userEmail;
    const subject = 'What is Lorem Ipsum?';
    const questionMessage = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry';

    await feedbackPage.fillForm(userName, userEmail, subject, questionMessage);
    await feedbackPage.resetForm();
    // Assertion
    await feedbackPage.assertReset();
  })

  // Submit feedback form
  test('completing the form and send', async ({ page }) => {
    const userName = loginRegistrationData.userName;
    const userEmail = loginRegistrationData.userEmail;
    const subject = 'What is Lorem Ipsum?';
    const questionMessage = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry';

    await feedbackPage.fillForm(userName, userEmail, subject, questionMessage);
    await feedbackPage.submitForm();
    // Assertion
    await feedbackPage.assertFormSent();
  })
});