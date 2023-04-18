## Tested site 
[demo-bank](https://demo-bank.vercel.app/)

## Tips for VSC
- `SHIFT + ALT + ↓/↑` -> copy line up/down 
- `ALT + ↓/↑` -> moving the whole line 
- `SHIFT + CTRL + K` -> delete line  
- `CTRL + F` -> find  
- `CTRL + B` -> left sidebar  
- `CTRL + SHIFT + R` -> Refactor ...
- `SHIFT + ALT + F` -> code formatting
- `CTRL + SPACE` -> suggestions
 
## What was done in the lesson #5 
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

### What has been refactored:
```TypeScript
    // Arrang
    const url = 'https://demo-bank.vercel.app/';
    const userId = 'testyAdi';
    const userPassword = '87654321';
    
    const receiverId = '2';
    const transferAmount = '150';
    const transferTitle = 'Zwrot kasy';
    const expectedTransferReceiver = 'Chuck Demobankowy';

    // Act
    await page.goto(url);
    await page.getByTestId('login-input').fill(userId);
    await page.getByTestId('password-input').fill(userPassword);

    await page.locator('#widget_1_transfer_receiver').selectOption(receiverId);
    await page.locator('#widget_1_transfer_amount').fill(transferAmount);
    await page.locator('#widget_1_transfer_title').fill(transferTitle);

    // Assert
    await expect(page.locator('#show_messages')).toHaveText(`Przelew wykonany! ${expectedTransferReceiver} - ${transferAmount},00PLN - ${transferTitle}`);
```

### Commands Playwright

➝  check `NodeJS` version:

```sh
 node -v 
```
➝  new project with `Playwright`:

```sh
 npm init playwright@latest
```

➝  record tests for given site:

```sh
 npx playwright codegen https://demo-bank.vercel.app/ 
```

➝  run tests without browser GUI:

```sh
 npx playwright test 
```

➝  run tests with browser GUI:

```sh
 npx playwright test --headed 
```

➝  view report:

```sh
 npx playwright show-report 
```