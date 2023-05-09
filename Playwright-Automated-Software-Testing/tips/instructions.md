## Selectors

- Text:  `await page.click('text=Example text')`
- CSS: 
    - `await page.click('button')`
    - `await page.click('')`
    - `await page.click('#id')`
    - `await page.click('.class')`
- Only visible CSS Selector: `await page.click('.submit-button:visible')`
- Combinations: `await page.clik('#login_form .username')`
- Xpath: `await page.click('//button')`

## Locators

- `page.getByRole()` to locate by explicit and implicit accessibility attributes.
- `page.getByText()` to locate by text content.
- `page.getByLabel()` to locate a form control by associated label's text.
- `page.getByPlaceholder()` to locate an input by placeholder.
- `page.getByAltText()` to locate an element, usually image, by its text alternative.
- `page.getByTitle()` to locate an element by its title attribute.
- `page.getByTestId()` to locate an element based on its data-testid attribute (other attributes can be configured).

## Actions

- `locator.check()`	Check the input checkbox
- `locator.click()`	Click the element
- `locator.uncheck()`	Uncheck the input checkbox
- `locator.hover()`	Hover mouse over the element
- `locator.fill()`	Fill the form field (fast)
- `locator.focus()`	Focus the element
- `locator.press()`	Press single key
- `locator.setInputFiles()`	Pick files to upload
- `locator.selectOption()`	Select option in the drop down
- `locator.type()`	Type text character by character (slow)

## Assertions

- `expect(locator).toBeChecked()`	Checkbox is checked
- `expect(locator).toBeEnabled()`	Control is enabled
- `expect(locator).toBeVisible()`	Element is visible
- `expect(locator).toContainText()`	Element contains text
- `expect(locator).toHaveAttribute()`	Element has attribute
- `expect(locator).toHaveCount()`	List of elements has given length
- `expect(locator).toHaveText()`	Element matches text
- `expect(locator).toHaveValue()`	Input element has value
- `expect(page).toHaveTitle()`	Page has title
- `expect(page).toHaveURL()`	Page has URL
- `expect(page).toHaveScreenshot()`	Page has screenshot