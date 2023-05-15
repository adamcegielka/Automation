[![Playwright.dev](https://img.shields.io/badge/Documentation-Playwright-45ba4b.svg?logo=playwright)](https://playwright.dev/docs/intro)
[![Playwright.dev](https://img.shields.io/badge/API%20reference-Playwright-D0422C.svg)](https://playwright.dev/docs/api/class-playwright)
[![Node.js](https://img.shields.io/badge/download-Node.js-026e00.svg?logo=node.js)](https://nodejs.org/)
[![Support badge](https://img.shields.io/badge/stackoverflow-Playwright-45ba4b.svg?logo=stackoverflow)](https://stackoverflow.com/questions/tagged/playwright) 
<br>

### [Repository Playwright](https://github.com/microsoft/playwright)

# Learning automatic tests in Playwright

- Websites to test:
    - [Example Domain](https://www.example.com/) 
    - [Zero - Personal Banking](http://zero.webappsecurity.com/) 
    - [Automation Test Store](https://automationteststore.com/)  
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

## installation steps performed in Playwright

:small_orange_diamond:  new project with **Playwright** `npm init`  
:small_orange_diamond:  instaling prettier `npm install prettier`   
:small_orange_diamond:  creation of `.prettierrc` file  
:small_orange_diamond:  instaling Playwright `npm install @playwright/test`  
:small_orange_diamond:  installing all the browsers `npx playwright install`  

## Updating Playwright

:small_orange_diamond:  check if Playwright should be updated: `npm outdated @playwright/test`  
:small_orange_diamond:  update Playwright: `npm i @playwright/test`  
:small_orange_diamond:  update browsers: `npx playwright install`  
:small_orange_diamond:  verify Playwright version: `npx @playwright/test --version`   

## Chrome DevTools

:small_orange_diamond:  open DevTools <kbd>F12</kbd> or right click: `Inspect`  
:small_orange_diamond:  testing CSS selectors in Console: `$$('selector')`  