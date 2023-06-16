[![Playwright.dev](https://img.shields.io/badge/Documentation-Playwright-45ba4b.svg?logo=playwright)](https://playwright.dev/docs/intro)
[![GitHub Repository](https://img.shields.io/badge/GitHub-CodeceptJS-45ba4b.svg?logo=github)](https://github.com/codeceptjs/CodeceptJS)
[![CodeceptJS](https://img.shields.io/badge/Discourse-CodeceptJS-ffd700.svg)](https://codecept.discourse.group/)
[![CodeceptJS](https://img.shields.io/badge/Testing%20framework-CodeceptJS-ffd700.svg)](https://codecept.io/)
<br>

# BDD with CodeceptJS and Playwright

- Websites used for testing:
  - [Example Domain](https://www.example.com/)
  - [Guru99 Bank](http://demo.guru99.com/v4/)
  - [Zero - Personal Banking](http://zero.webappsecurity.com/)
- Software [VSCode](https://code.visualstudio.com/)

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

## Installation steps performed in Playwright

:small_orange_diamond: new project with **Playwright** `npm init --yes`  
:small_orange_diamond: instaling `npm install playwright codeceptjs prettier`  
:small_orange_diamond: instaling `npx codeceptjs init`    
:small_orange_diamond: creation of `.gitignore` file  
:small_orange_diamond: creation of `.prettierrc` file   
:small_orange_diamond: creation of `.prettierignore` file   
:small_orange_diamond: running formatting with Prettier `npx prettier --write .` file

## Updating CodeceptJS

:small_orange_diamond: check if CodeceptJS should be updated: `npx codeceptjs --version`  
:small_orange_diamond: update CodeceptJS: `npm update codeceptjs` or `npm update codeceptjs@latest`    
:small_orange_diamond: update Puppeteer: `npm update codeceptjs puppeteer`  

## Commands CodeceptJS

:small_orange_diamond: flag to see complete NodeJS stacktrace: `npx codeceptjs run --verbose`  

## Updating Playwright

:small_orange_diamond: check if Playwright should be updated: `npm outdated @playwright/test`  
:small_orange_diamond: update Playwright: `npm i @playwright/test`  
:small_orange_diamond: update browsers: `npx playwright install`  
:small_orange_diamond: verify Playwright version: `npx @playwright/test --version`

## Chrome DevTools

:small_orange_diamond: open DevTools <kbd>F12</kbd> or right click: `Inspect`  
:small_orange_diamond: checking the selector <kbd>CTRL</kbd> + <kbd>F</kbd>  
:small_orange_diamond: testing CSS selectors in Console: `$$('selector')`
