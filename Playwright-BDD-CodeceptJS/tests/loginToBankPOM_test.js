const LoginPage = require("../pages/LoginPage");

Feature('Zero Bank Application with POM');

Before(({ I }) => {
    console.log('BEFORE HOOK');
    I.amOnPage('http://zero.webappsecurity.com/');    
});

After(({ I }) => {
    console.log('AFTER HOOK');
})

Scenario('Login to Bank - Negative - POM',  ({ I, LoginPage }) => {
    LoginPage.clickSigninButton();
    LoginPage.assertLoginFormIsVisible();
    LoginPage.submitLogin('Some User Name', 'incorrect-password');
    LoginPage.assertAlertError();
    I.see('Login and/or password are wrong.');
});