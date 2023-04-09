## Commands from the lesson

➝  check `NodeJS` version:

```VSCode
 node -v 
```
➝  new project with `Playwright`:

```VSCode
 npm init playwright@latest
```

➝  record tests for given site:

```VSCode
 npx playwright codegen https://demo-bank.vercel.app/ 
```

➝  run tests without browser GUI:

```VSCode
 npx playwright test 
```

➝  run tests with browser GUI:

```VSCode
 npx playwright test --headed 
```

➝  view report:

```VSCode
 npx playwright show-report 
```

### Assertions:

```VSCode
await expect(page.getByTestId('user-name')).toHaveText('Jan Demobankowy');
```

### Modification:

- config file: `playwright.config.ts`
- disable browsers: `Safari`

```javascript
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
```