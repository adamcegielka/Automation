## Tested site 
[demo-bank](https://demo-bank.vercel.app/)
<br>
 
## Tips for VSC
- `SHIFT + ALT + ↓/↑` -> copy line up/down 
- `ALT + ↓/↑` -> moving the whole line 
- `SHIFT + CTRL + K` -> delete line  
- `CTRL + F` -> find  
- `CTRL + B` -> left sidebar 
<br>

## Homework
- Phone top-up   
<br>

### Commands Playwright

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