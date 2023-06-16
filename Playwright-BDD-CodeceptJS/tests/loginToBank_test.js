Feature('Zero Bank Application');

Scenario('Login to Bank - Negative',  ({ I }) => {
    I.amOnPage('http://zero.webappsecurity.com/');
    I.click('#signin_button');
    I.see('Log in to ZeroBank');
    I.seeElement('#login_form');
    I.fillField('#user_login', 'Some User Name');
    I.fillField('user_password', 'incorrect-password');
    I.click('.btn-primary');
    I.seeElement('.alert-error');
});