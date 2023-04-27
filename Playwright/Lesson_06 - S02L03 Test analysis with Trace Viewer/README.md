## Description
- Lesson S02L03 [https://jaktestowac.pl/](https://jaktestowac.pl/lesson/pw1s02l03/) - Test analysis with Trace Viewer
- Formatting code with [Prettier](https://jaktestowac.pl/lesson/pw1sb01l06/)
- [REST API](https://jaktestowac.pl/api/) Testing Basics
- Tested site [demo-bank](https://demo-bank.vercel.app/)
 
## What was done in the lesson S02L03
- Updating the playwright package and browsers:  
-> Checking the current version of Playwrigth (package.json) `npx @playwright/test --version`  
-> Playwright upgrade to Version 1.33.0 `npm i @playwright/test`  
-> Installing new versions of browsers `npx playwright install` 
- Prettier:  
-> Installation `npm install --save-dev --save-exact prettier`  
-> Starting formatting with Prettier `npx prettier --write .`  
-> Ignoring files in [Prettier](https://prettier.io/docs/en/options.html):  

.prettierignore file
```TypeScript
package-lock.json
playwright-report
```  

Adding the file to project: `.prettierrc.json`
```TypeScript
{
    "singleQuote": true
}
```

<br>

## Tips for VSC
- <kbd>ALT</kbd> + <kbd>SHIFT</kbd> + <kbd>↓/↑</kbd> -> copy line up/down 
- <kbd>ALT</kbd> + <kbd>↓/↑</kbd> -> moving the whole line 
- <kbd>SHIFT</kbd> + <kbd>CTRL</kbd> + <kbd>K</kbd> -> delete line  
- <kbd>CTRL</kbd> + <kbd>F</kbd> -> find  
- <kbd>CTRL</kbd> + <kbd>B</kbd> -> left sidebar  
- <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>R</kbd> -> Refactor ...
- <kbd>SHIFT</kbd> + <kbd>ALT</kbd> + <kbd>F</kbd> -> code formatting
- <kbd>CTRL</kbd> + <kbd>SPACE</kbd> -> suggestions

<br>

## Commands Playwright

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