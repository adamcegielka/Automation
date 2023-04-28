## Description
- Lesson S02L03 [jaktestowac.pl](https://jaktestowac.pl/lesson/pw1s02l03/) - Test analysis with Trace Viewer
- Formatting code with [Prettier](https://jaktestowac.pl/lesson/pw1sb01l06/)
- [REST API](https://jaktestowac.pl/api/) Testing Basics
- Tested site [demo-bank](https://demo-bank.vercel.app/)
- YouTube - Playwright's UI Mode: [Watch mode and time travel debugging](https://www.youtube.com/watch?v=d0u6XhXknzU)
 
## What was done in the lesson S02L03
- Updating the playwright package and browsers:  
    - Checking the current version of Playwrigth **package.json** : `npx @playwright/test --version`  
    - Playwright upgrade to Version 1.33.0: `npm i @playwright/test`  
    - Installing new versions of browsers: `npx playwright install` 

- Install Prettier: `npm install --save-dev --save-exact prettier` 

- exlude files in: `.prettierignore`
```TypeScript
playwright-report
package-lock.json
package.json
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

### Video reports

- Adding video to reports
    - In the `playwright.config.ts` file, add an entry in the `use` block: `video: retain-on-failure`
    ```TypeScript
    use: {
  actionTimeout: 0,
  trace: 'on-first-retry’,
  video: 'retain-on-failure',
  },
    ```
- Turn on Trace Viewer
    - In the `playwright.config.ts` file, we change the setting for trace in the `use` : `trace: 'retain-on-failure'`
    ```TypeScript
    use: {
  actionTimeout: 0,
  trace: 'retain-on-failure’,
  video: 'retain-on-failure',
  },
    ```
- Start-up on Trace Viewer `npx playwright show-trace trace.zip`
- Open up UI mode `npx playwright test --ui`
- Trace Viewer presentation on [jaktestowac.pl](https://con.jaktestowac.pl/wp-content/uploads/PW/1/S02/PW1S02L03.jpg)

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

## Commands Playwright

-  check **NodeJS** version: `node -v`  
-  new project with **Playwright**: `npm init playwright@latest`  
-  record tests for given site: `npx playwright codegen https://demo-bank.vercel.app/`  
-  run tests without browser GUI: `npx playwright test`  
-  run tests with browser GUI: `npx playwright test --headed`  
-  view report: `npx playwright show-report`  

## Updating Playwright

-  check if Playwright should be updated: `npm outdated @playwright/test`  
-  update Playwright: `npm i @playwright/test`  
-  update browsers: `npx playwright install`  
-  verify Playwright version: `npx @playwright/test --version`   

## Chrome DevTools

-  open DevTools <kbd>F12</kbd> or right click `Inspect`  
    - <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>J</kbd>  
    - <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>K</kbd> **Firefox**
-  testing CSS selectors in Console: `$$('selector')`  