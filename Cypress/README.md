[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg?logo=cypress)](https://www.cypress.io/)
[![Node.js](https://img.shields.io/badge/download-Node.js-026e00.svg?logo=node.js)](https://nodejs.org/) 
[![Support badge](https://img.shields.io/badge/stackoverflow-Cypress-04C38E.svg?logo=stackoverflow)](https://stackoverflow.com/questions/tagged/cypress)
<br>
### [Documentation](https://docs.cypress.io/guides/getting-started/installing-cypress) | [API reference](https://docs.cypress.io/api/table-of-contents) | [Repository Cypress](https://github.com/cypress-io)
<br>

## Learning automatic tests in Cypress with udemy

- Course from the [udemy - Cypress od podstaw - Automatyzacja testów](https://www.udemy.com/course/cypress-od-podstaw/) 
- Tested site [etsydemo.knowband](https://etsydemo.knowband.com/en/) 
- Software [Visual Studio Code](https://code.visualstudio.com/) 
- Programming language [JavaScript](https://devdocs.io/javascript/)

## Configuration
- Checking node.js version
```TypeScript
node --version
```

- Installing:
```TypeScript
npm init
npm install cypress --save-dev
```

- Launching: 
```TypeScript
npx cypress open
```

- `package.json` -> Script configuration:
```TypeScript
"scripts": {
    "open": "npx cypress open"
  },

 Terminal: npm run open
```

- `cypress.json` -> Test settings

- `fixtures/example.json` -> Storage of permanent types

- `cypress.config.js` -> Configuration File:
```TypeScript
    baseUrl: 'https://etsydemo.knowband.com/en',
    includeShadowDom: true,
    chromeWebSecurity: true,
    viewportHeight: 1080,
    viewportWidth: 1920
```

- Template:
```TypeScript
/// <reference types="cypress" />

describe("Name of test section", () => {
    it("Name of test", () => {
      cy.get('').type('')
      cy.get('').click()
    })
})
```

<br>  

## Tips for Visual Studio Code:
:small_orange_diamond: `SHIFT + ALT + ↓/↑` : copy line up/down  
:small_orange_diamond: `ALT + ↓/↑` : moving the whole line  
:small_orange_diamond: `SHIFT + CTRL + K` : delete line  
:small_orange_diamond: `CTRL + F` : find  
:small_orange_diamond: `CTRL + B` : left sidebar  
:small_orange_diamond: `CTRL + SHIFT + R` : Refactor ...  
:small_orange_diamond: `SHIFT + ALT + F` : code formatting  
:small_orange_diamond: `CTRL + SPACE` : suggestions  