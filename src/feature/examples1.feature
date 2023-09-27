Feature: Example 1

    Scenario Outline: Login
        Given As a user I can successfully login to application using "<Username>" and "<Password>"
        Examples:
            | Username | Password             |
            | tomsmith | SuperSecretPassword! |