## Description
- Lesson S03L05 [jaktestowac.pl](https://jaktestowac.pl/lesson/pw1s03l05/) - POM: task to perform
 
## What was done in the lesson S03L05
- **Page Object Model - Refactoring desktop and payment**
    - create file in test-pages folder `desktop.pages.ts`
    - create file in test-pages folder `payment.pages.ts`
<br><br>

## Tips for VSCode
- <kbd>ALT</kbd> + <kbd>SHIFT</kbd> + <kbd>↓/↑</kbd> -> copy line up/down 
- <kbd>ALT</kbd> + <kbd>↓/↑</kbd> -> moving the whole line 
- <kbd>SHIFT</kbd> + <kbd>CTRL</kbd> + <kbd>K</kbd> -> delete line  
- <kbd>CTRL</kbd> + <kbd>F</kbd> -> find  
- <kbd>CTRL</kbd> + <kbd>B</kbd> -> left sidebar  
- <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>R</kbd> -> Refactor ...
- <kbd>SHIFT</kbd> + <kbd>ALT</kbd> + <kbd>F</kbd> -> code formatting
- <kbd>CTRL</kbd> + <kbd>SPACE</kbd> -> suggestions
- <kbd>CTRL</kbd> + <kbd>C</kbd> -> cancelling Node process: hit twice
- <kbd>Ctrl</kbd> + <kbd>R</kbd> -> Refresh Tests
- <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>P</kbd> -> Reloading the VSC window `Developer: Reload Window`

## Commands Playwright

- check **NodeJS** version: `node -v`  
- new project with: **Playwright**: `npm init playwright@latest`  
- record tests for given site: `npx playwright codegen https://demo-bank.vercel.app/`  
- run tests without browser GUI: `npx playwright test`  
- run tests with browser GUI: `npx playwright test --headed`  
- view report: `npx playwright show-report` 
- start-up on Trace Viewer: `npx playwright show-trace trace.zip`
- open up Trace Viewe: `npx playwright test --trace on`
- open up UI mode: `npx playwright test --ui` 
- Running tests for a given file: `npx playwright test tests/filename.spec.ts`

## Updating Playwright

- check if Playwright should be updated: `npm outdated @playwright/test`  
- update Playwright: `npm i @playwright/test`  
- update browsers: `npx playwright install`  
- verify Playwright version: `npx @playwright/test --version`   

## Chrome DevTools

- open DevTools <kbd>F12</kbd> or right click `Inspect`  
    - <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>J</kbd>  
    - <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>K</kbd> **Firefox**
- testing CSS selectors in Console: `$$('selector')`  