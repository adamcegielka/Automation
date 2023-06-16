Feature('Homepage');

Scenario('Verify page elements',  ({ I }) => {
    I.amOnPage('http://demo.guru99.com/v4/');
    I.see('Guru99 Bank');
    I.dontSee('Google');
    I.seeElement('h4');
    I.dontSeeElement('h1');
    I.dontSeeElement('#dontExist');
});