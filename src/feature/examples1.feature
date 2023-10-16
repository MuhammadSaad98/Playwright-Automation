Feature: Example 1

    # Scenario Outline: Login Logout
    #     Given As a user I can successfully login to application using "<Username>" and "<Password>"
    #     Then As a user I can successfully logout
    #     Examples:
    #         | Username | Password             |
    #         | tomsmith | SuperSecretPassword! |


    Scenario Outline: iFrame
        Given As a user I can type "<Text>" in an iFrame with the following "<Options>"
        Examples:
            | Text                 | Options           |
            | This is the new text | Bold,Align Center |