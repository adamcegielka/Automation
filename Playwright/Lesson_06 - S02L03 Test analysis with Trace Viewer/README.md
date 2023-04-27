## Description
- Lesson S02L03 [https://jaktestowac.pl/](https://jaktestowac.pl/lesson/pw1s02l03/) - Test analysis with Trace Viewer
- Formatting code with [Prettier](https://jaktestowac.pl/lesson/pw1sb01l06/)
- [REST API](https://jaktestowac.pl/api/) Testing Basics
- Tested site [demo-bank](https://demo-bank.vercel.app/)
 
## What was done in the lesson S02L03
- Updating the playwright package and browsers:  
-> Checking the current version of Playwrigth (package.json): `npx @playwright/test --version`  
-> Playwright upgrade to Version 1.33.0: `npm i @playwright/test`  
-> Installing new versions of browsers: `npx playwright install` 

- Install Prettier: `npm install --save-dev --save-exact prettier` 

- exlude files in: `.prettierignore`
```TypeScript
package-lock.json
package.json
playwright-report
README.md
```  

- set rules in: `.prettierrc.json`
```TypeScript
{
    "singleQuote": true
}
```  
- run Prettier: `npx prettier --write .`  

- More about the format options [Prettier](https://prettier.io/docs/en/options.html)

<br>

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

<br>

## Commands Playwright

➝  check **NodeJS** version: `node -v`  
➝  new project with **Playwright**: `npm init playwright@latest`  
➝  record tests for given site: `npx playwright codegen https://demo-bank.vercel.app/`  
➝  run tests without browser GUI: `npx playwright test`  
➝  run tests with browser GUI: `npx playwright test --headed`  
➝  view report: `npx playwright show-report`  

## Updating Playwright

➝  check if Playwright should be updated: `npm outdated @playwright/test`  
➝  update Playwright: `npm i @playwright/test`  
➝  update browsers: `npx playwright install`  
➝  verify Playwright version: `npx @playwright/test --version`   

## Chrome DevTools

➝  open DevTools <kbd>F12</kbd> or right click: `Inspect`  
➝  testing CSS selectors in Console: `$$('selector')`  