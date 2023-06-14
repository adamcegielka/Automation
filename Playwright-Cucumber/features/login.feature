Feature: Login action

    As a user
    I want to login into application

    Scenario: Login with valid credentials
        Given I visit a login page
        When I fill the login form with valid credentials
        Then I should see the home page

    Scenario Outline: Login with invalid credentials
        Given I visit a login page
        When I fill the login form with "<username>" and "<password>"
        Then I wait for 3 seconds

        Examples:
            | username   | password   |
            | username-1 | password-1 |
            | username-2 | password-2 |
            | username-3 | password-3 |