## Commands from the lesson

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

### Assertions:

```sh
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
