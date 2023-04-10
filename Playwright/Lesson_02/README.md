## Tested site 
[demo-bank](https://demo-bank.vercel.app/)

## Visual Studio Code:
- Preview: for README.md
- Autosave: File -> Auto Save
- Saved history: select the file and right-click -> Open Timeline

## Additional information
```TypeScript

// test.describe (); - test section
test.describe('Testing name', () => {

  test('name of function tested', async ({ page }) => {

  });

// test.only (); - only tests this test
  test.only('name of the second function tested', async ({ page }) => {

  });

});
```