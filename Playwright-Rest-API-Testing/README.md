[![Playwright.dev](https://img.shields.io/badge/Documentation-Playwright-45ba4b.svg?logo=playwright)](https://playwright.dev/docs/intro)
[![Playwright.dev](https://img.shields.io/badge/API%20reference-Playwright-D0422C.svg)](https://playwright.dev/docs/api/class-playwright)
[![Support badge](https://img.shields.io/badge/stackoverflow-Playwright-45ba4b.svg?logo=stackoverflow)](https://stackoverflow.com/questions/tagged/playwright)
[![CodeceptJS](https://img.shields.io/badge/Testing%20framework-CodeceptJS-ffd700.svg)](https://codecept.io/)
<br>

# Rest API Testing with Playwright & TypeScript

- Websites used for testing:
  - [{JSON} Placeholder](https://jsonplaceholder.typicode.com/)
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

:small_orange_diamond: new project with **Playwright** `npm init`  
:small_orange_diamond: instaling Playwright in e2e (cd e2e) `npm install @playwright/test`  
:small_orange_diamond: creation of `.gitignore` file    
:small_orange_diamond: creation of `playwright.config.js` file  

## Installation Cucumber and TypeScript

:small_orange_diamond: instaling **Cucumber** `npm install @cucumber/cucumber`  
:small_orange_diamond: instaling **TypeScript** `npm install typescript`  
:small_orange_diamond: instaling **TypeScript Jason** `npx -p typescript tsc --init`    
:small_orange_diamond: instaling `npm install ts-node`    
:small_orange_diamond: creation of `features` folder  
:small_orange_diamond: creation of `step-definitions` folder  
:small_orange_diamond: creation of `setup` folder  

## Updating Playwright

:small_orange_diamond: check if Playwright should be updated: `npm outdated @playwright/test`  
:small_orange_diamond: update Playwright: `npm i @playwright/test`  
:small_orange_diamond: update browsers: `npx playwright install`  
:small_orange_diamond: verify Playwright version: `npx @playwright/test --version`

## Useful pages

### API
- [API Testing - JoanMedia - YouTube](https://www.youtube.com/watch?v=6fapvF1uYo0&list=PLYDwWPRvXB89caN5PHWDLrXJuyugu5Mg_)
- [Playwright API Testing - Kaniel Outis - YouTube](https://www.youtube.com/watch?v=S12sspgH8es&list=PL-hNDoK1-od_HpjnFwFZnjKpIs_D-lEpn)
- [Playwright API Testing - LetCode with Koushik - YouTube](https://www.youtube.com/watch?v=deEK0lHrC-w&t=1441s)

### Cucumber
- [Automation using Playwright Library with Cucumber JS.](https://www.indiumsoftware.com/blog/automation-using-playwright-library-with-cucumber-js/)  
- [Playwright - Cucumber - TS - YouTube](https://www.youtube.com/watch?v=bfWXNLqKlvA&list=PL699Xf-_ilW6KgK-S1l9ynOnBGiZl2Bsk)  
- [Cucumber and Playwright with Tally Barak](https://www.youtube.com/watch?v=PUVFmhYJNJA)

### Playwright
- [Playwright.dev - YouTube](https://www.youtube.com/@Playwrightdev)
- [Playwright - jaktestowac.pl - YouTube](https://www.youtube.com/watch?v=JqEp2cjnzAo&list=PLfKhn9AcZ-cD2TCB__K7NP5XARaCzZYn7)
- [Playwright - Zwinna Panda - YouTube](https://www.youtube.com/watch?v=1-u5JWFWPgw&list=PLvFBbkSgL1u7Bco8ewGnWeZpjRH-bHC_7)
- [Playwright framework - Typescript - YouTube](https://www.youtube.com/watch?v=orWd3b6zqHI&list=PL699Xf-_ilW4FuazWjbnRm0PPCltz25pz)
- [Playwright Test Runner - 2022 - YouTube](https://www.youtube.com/watch?v=zY-IoTYcbWs&list=PL699Xf-_ilW7EyC6lMuU4jelKemmS6KgD)  
- [Playwright Tutorial - YouTube](https://www.youtube.com/watch?v=bxvqsUKSWMk&list=PL-hNDoK1-od9MXsp90HfSXeCVMQiXYI6Z)
- [Playwright Tips & Tricks - YouTube](https://www.youtube.com/watch?v=fS-_87kmgCo&list=PLYDwWPRvXB8-Zw6wzPKs9ij1m-RMhfAx_)

### Others
- [TypeScript for Test Automation- YouTube](https://www.youtube.com/watch?v=k0hSJdTfXNM&list=PL699Xf-_ilW5VXRsJwBJLmDGrsrYxBjQT)
- [Page Object Model - Protractor - JavaScript - YouTube](https://www.youtube.com/watch?v=AdIu6LpjbsM&list=PL699Xf-_ilW6xWr1zQeD6Q29ffQE1jgrb)  
- [XPath Tutorial - YouTube](https://www.youtube.com/watch?v=ppnDfNuSjro&list=PL699Xf-_ilW4sqC76skEN5vHT0M1YNXoU)
- [XPath Tutorial - YouTube](https://www.youtube.com/watch?v=XyBxEnyBb0A&list=PLYDwWPRvXB89vqqHebPnJ3Krn5osOEr2z)
- [Software Testing Tools & Tricks - YouTube](https://www.youtube.com/watch?v=rQf-t3og_GE&list=PLYDwWPRvXB89_89g9xDIfdeUf9XmbrF-T)
