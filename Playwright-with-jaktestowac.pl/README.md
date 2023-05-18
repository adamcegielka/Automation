[![Playwright.dev](https://img.shields.io/badge/Documentation-Playwright-45ba4b.svg?logo=playwright)](https://playwright.dev/docs/intro)
[![Playwright.dev](https://img.shields.io/badge/API%20reference-Playwright-D0422C.svg)](https://playwright.dev/docs/api/class-playwright)
[![Node.js](https://img.shields.io/badge/download-Node.js-026e00.svg?logo=node.js)](https://nodejs.org/)
[![Support badge](https://img.shields.io/badge/stackoverflow-Playwright-45ba4b.svg?logo=stackoverflow)](https://stackoverflow.com/questions/tagged/playwright) 
<br>

### [Repository Playwright](https://github.com/microsoft/playwright)

# Learning automatic tests in Playwright with jaktestowac.pl

- Course from the [jaktestowac.pl](https://jaktestowac.pl/course/playwright-wprowadzenie/)  
- Repository jaktestowac [GitHub](https://github.com/jaktestowac/playwright_automatyzacja_wprowadzenie)  
- Tested site [demo-bank](https://demo-bank.vercel.app/)  
- Software [VSCode](https://code.visualstudio.com/)  
- Programming language [TypeScript](https://www.typescriptlang.org/) 

<br>

## Tips for VSCode:
:small_orange_diamond: <kbd>ALT</kbd> + <kbd>SHIFT</kbd> + <kbd>↓/↑</kbd> -> copy line up/down  
:small_orange_diamond: <kbd>ALT</kbd> + <kbd>↓/↑</kbd> -> moving the whole line  
:small_orange_diamond: <kbd>SHIFT</kbd> + <kbd>CTRL</kbd> + <kbd>K</kbd> -> delete line  
:small_orange_diamond: <kbd>CTRL</kbd> + <kbd>F</kbd> -> find  
:small_orange_diamond: <kbd>CTRL</kbd> + <kbd>B</kbd> -> left sidebar  
:small_orange_diamond: <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>R</kbd> -> Refactor ...  
:small_orange_diamond: <kbd>SHIFT</kbd> + <kbd>ALT</kbd> + <kbd>F</kbd> -> code formatting  
:small_orange_diamond: <kbd>CTRL</kbd> + <kbd>SPACE</kbd> -> suggestions  
:small_orange_diamond: <kbd>CTRL</kbd> + <kbd>.</kbd> -> suggestion of value extraction   
:small_orange_diamond: <kbd>CTRL</kbd> + <kbd>C</kbd> -> cancelling Node process: hit twice   
:small_orange_diamond: <kbd>CTRL</kbd> + <kbd>R</kbd> -> refresh Tests     
:small_orange_diamond: <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>P</kbd> -> reloading the VSC window `Developer: Reload Window`  

## Commands Playwright

:small_orange_diamond:  check **NodeJS** version: `node -v`  
:small_orange_diamond:  new project with **Playwright**: `npm init playwright@latest`  
:small_orange_diamond:  record tests for given site: `npx playwright codegen https://demo-bank.vercel.app/`  
:small_orange_diamond:  run tests without browser GUI: `npx playwright test`  
:small_orange_diamond:  run tests with browser GUI: `npx playwright test --headed`  
:small_orange_diamond:  view report: `npx playwright show-report`   
:small_orange_diamond:  open up Trace Viewe: `npx playwright test --trace on`   
:small_orange_diamond:  open up UI mode: `npx playwright test --ui`  

## Methods
:small_orange_diamond:  Import  
```TypeScript
import { test, expect, chromium } from '@playwright/test';
```
:small_orange_diamond: Test  
```TypeScript
test('Title', async ({ page }) => {
  // ...
});
```
:small_orange_diamond: Describe  
```TypeScript
test.describe('Title two tests', () => {

  test('Title1', async ({ page }) => {
    // ...
  });

  test('Title2', async ({ page }) => {
    // ...
  });
});
```
:small_orange_diamond: test.beforeEach  
```TypeScript
test.describe('Title two tests', () => {

  test.beforeEach(async ({ page }) => {
  await page.goto('/');
  });

  test('my test', async ({ page }) => {
    // ...
  });
});
```


## Updating Playwright

:small_orange_diamond:  check if Playwright should be updated: `npm outdated @playwright/test`  
:small_orange_diamond:  update Playwright: `npm i @playwright/test`  
:small_orange_diamond:  update browsers: `npx playwright install`  
:small_orange_diamond:  verify Playwright version: `npx @playwright/test --version`   

## Chrome DevTools

:small_orange_diamond:  open DevTools <kbd>F12</kbd> or right click: `Inspect`  
:small_orange_diamond:  testing CSS selectors in Console: `$$('selector')`  