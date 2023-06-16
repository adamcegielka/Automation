Feature('Homepage');

Scenario('Verify page elements',  ({ I }) => {
    I.amOnPage('http://demo.guru99.com/v4/');
    I.see('Guru99 Bank');
    I.dontSee('Google');
    I.seeElement('h4');
    I.dontSeeElement('h1');
    I.dontSeeElement('#dontExist');
});

Scenario('Verify page elements - names UserId, Password',  ({ I }) => {
    I.amOnPage('http://demo.guru99.com/v4/');
    I.see('UserID');
    I.see('Password');
});