## Tested site 
[demo-bank](https://demo-bank.vercel.app/)

## Tips for VSC
> SHIFT + ALT + ↓/↑ -> copy line up/down  
> SHIFT + CTRL + K -> delete line  
> CTRL + F -> find
> CTRL + B -> left sidebar

## What was done in the lesson #4
-> Adding a new test to desktop.spec.ts  
-> Call tasty: `successful mobile phone top-ip`  
-> Paste in the recorded code  
-> Adding assertions for messages  
-> Removal of excessive code  
-> Start test with option: `only`  
-> Running all tests at once  
-> Deliberately remove asertion and run tests  
-> Fix asertion, run all tests  

<br>

### Code test:
```TypeScript
test.only('successful mobile phone top-up', async ({ page }) => {
          await page.goto('https://demo-bank.vercel.app/');
          await page.getByTestId('login-input').fill('testyAdi');
          await page.getByTestId('password-input').fill('password');
          await page.getByTestId('login-button').click();

          await page.locator('#widget_1_topup_receiver').selectOption('502 xxx xxx');
          await page.locator('#widget_1_topup_amount').fill('90');
          await page.locator('#uniform-widget_1_topup_agreement span').click();
          await page.getByRole('button', { name: 'doładuj telefon' }).click();
          await page.getByTestId('close-button').click();
          // await page.getByRole('link', { name: 'Doładowanie wykonane! 90,00PLN na numer 502 xxx xxx' }).click();
  
          await expect(page.locator('#show_messages')).toHaveText('Doładowanie wykonane! 90,00PLN na numer 502 xxx xxx');
        });
```

### Test result:
```TypeScript
Running 2 tests using 2 workers
  2 passed (12.0s)
```
