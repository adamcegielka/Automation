## Description
- Lesson #03 [https://jaktestowac.pl/](https://jaktestowac.pl/lesson/pw1s01l03/) - Development Tests and locators
- Tested site [demo-bank](https://demo-bank.vercel.app/)

## Playwrith snippets

- describe:
```TypeScript
  test.describe('Group description', () => {

  });
```

- test:
```TypeScript
  test.('test description', async ({ page }) => {

  });
```
<br>

## What was done in the lesson
-> Code refactoring  
-> Adding new tests: `desktop.spec.ts`  
-> Lokator `getByTestId()` - działa w oparciu o wartość atrybutu zlokalizowanego w kodzie strony  
-> Lokator `getByRole()` - działa w oparciu o typy elementów i ich cechy  
-> Lokator `locator()` - wykorzystuje między innymi adresy zapisane w formacie CSS  
-> Selector `('login-input')` - adres elementu  
-> search in VSC: `Ctrl + f`  
<br>

## [Comments:]()
Two different errors with the same data, and the third time the test passed 

### First test:
```TypeScript
Error: locator.click: Target closed
=========================== logs ===========================
waiting for getByTestId('close-button')
============================================================

  13 |         // await page.getByRole('button', { name: 'wykonaj' }).click();
  14 |         await page.locator('#execute_btn').click();
> 15 |         await page.getByTestId('close-button').click();
     |                                                ^
  16 |         // await page.getByRole('link', { name: 'Przelew wykonany! Chuck Demobankowy - 150,00PLN - Zwrot środków' }).click();
  17 |
  18 |         await expect(page.locator('#show_messages')).toHaveText('Przelew wykonany! Chuck Demobankowy - 150,00PLN - Zwrot środków');
```

### Second test:
```TypeScript
1) [chromium] › desktop.spec.ts:4:9 › Desktop testing › quick payment with correct data ──────────

    Error: expect(received).toHaveText(expected)

    Expected string: "Przelew wykonany! Chuck Demobankowy - 150,00PLN - Zwrot środków"
    Received string: "Przelew wykonany! Chuck Demobankowy - 150PLN - Zwrot środków"


      16 |         // await page.getByRole('link', { name: 'Przelew wykonany! Chuck Demobankowy - 150,00PLN - Zwrot środków' }).click();
      17 |
    > 18 |         await expect(page.locator('#show_messages')).toHaveText('Przelew wykonany! Chuck Demobankowy - 150,00PLN - Zwrot środków');
         |                                                      ^
      19 |       });
```

### Third test:
```TypeScript
Running 8 tests using 4 workers
  8 passed (26.3s)
```
