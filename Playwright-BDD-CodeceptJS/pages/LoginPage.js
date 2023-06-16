const { I } = inject();

module.exports = {

  // Set Locators
  signinButton: '#signin_button',
  loginForm: '#login_form',
  userName: '#user_login',
  password: '#user_password',
  submitButton: '.btn-primary',
  alertError: '.alert-error',

  // Create page methods
  submitLogin(userName, password) {
    I.fillField(this.userName, userName)
    I.fillField(this.password, password)
    I.click(this.submitButton)
  },

  clickSigninButton() {
    I.click(this.signinButton)
  },

  // Assertion
  assertLoginFormIsVisible() {
    I.seeElement(this.loginForm)
  },

  assertAlertError() {
    I.seeElement(this.alertError)
  },
}
