## Commands from the lesson

➝  check `NodeJS` version:

```Shell
 node -v 
```
➝  new project with `Playwright`:

```Shell
 npm init playwright@latest
```

➝  record tests for given site:

```Shell
 npx playwright codegen https://demo-bank.vercel.app/ 
```

➝  run tests without browser GUI:

```Shell
 npx playwright test 
```

➝  run tests with browser GUI:

```Shell
 npx playwright test --headed 
```

➝  view report:

```Shell
 npx playwright show-report 
```

### Assertions:

```TypeScript
await expect(page.getByTestId('user-name')).toHaveText('Jan Demobankowy');
```

### Modification:

- config file: `playwright.config.ts`
- disable browsers: **WebKit**

```TypeScript
// {
//   name: 'webkit',
//   use: { ...devices['Desktop Safari'] },
// },
```
