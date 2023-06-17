Feature: As an API I can retrieve posts

    As an API
    I can retrieve all the posts

    Scenario: Retrieve all the posts
        Given I retrieve "posts"
        And The response was successful
        Then The response status code is 200
