Feature('Example');

Scenario('Load example.com',  ({ I }) => {
    I.amOnPage('https://www.example.com');
    I.see('Example');
});
