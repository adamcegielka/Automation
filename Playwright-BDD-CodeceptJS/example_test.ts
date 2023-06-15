Feature('Example test')

Scenario('Should load example.com webside', ({ I }) => {
  I.amOnPage('http://www.example.com');
  // I.saveScreenshot('frontpageScreenshot.png');
  I.see('Example');
})
