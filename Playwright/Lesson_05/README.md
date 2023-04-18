## Tested site 
[demo-bank](https://demo-bank.vercel.app/)

## Tips for VSC
- `SHIFT + ALT + ↓/↑` -> copy line up/down 
- `ALT + ↓/↑` -> moving the whole line 
- `SHIFT + CTRL + K` -> delete line  
- `CTRL + F` -> find  
- `CTRL + B` -> left sidebar  
- `CTRL + SHIFT + R` -> Refactor ...
- `SHIFT + ALT + F` code formatting
- `CTRL + SPACE` suggestions
 
## What was done in the lesson #4 
- Code refactoring:
-> Inserting a variable into a string `Text ${ }`   
- Project versioning with Git [Lesson](https://jaktestowac.pl/lesson/pw1sb01l05/) :  
-> Setting email for Git user `git config --global user.email "youremail@example.com"`  
-> Setting name for Git user: `git config --global user.name "your name"`  
-> Installation of the **GitLens** extension to VSC
- Updating the playwright package and browsers [Lesson](https://jaktestowac.pl/lesson/pw1sb01l02/) :  
-> Checking the current version of Playwrigth (package.json) `npx @playwright/test --version` 
-> Checking the latest version of Playwrigth `npm outdated @playwright/test`  
-> Playwright update `npm i @playwright/test`  
-> Path to the browsers directory: `%USERPROFILE%\AppData\Local\ms-playwright`  
-> Installing new versions of browsers `npx playwright install`  

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

### Commands Playwright

➝  check `NodeJS` version:

```Shell
 node -v 
```
➝  new project with `Playwright`:

```Shell
 npm init playwright@latest
```

➝  record tests for given site:

```Shell
 npx playwright codegen https://demo-bank.vercel.app/ 
```

➝  run tests without browser GUI:

```Shell
 npx playwright test 
```

➝  run tests with browser GUI:

```Shell
 npx playwright test --headed 
```

➝  view report:

```Shell
 npx playwright show-report 
```