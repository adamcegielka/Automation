import { test } from '@playwright/test';
import { getRandomNumber, getRandomString } from '../../utils/data-helpers';

test.describe('Tips & Tricks Section', () => {

  test('data helpers - get random Numbers', async ({ page }) => {
    await page.goto('https://www.example.com/');
    let newNumber = await getRandomNumber();
    console.log(newNumber);
  });

  test.only('data helpers - get random String', async ({ page }) => {
    await page.goto('https://www.example.com/');
    let newString = await getRandomString();
    console.log(newString);
  });
});