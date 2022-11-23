Feature: Join event

    As a user I’m able to join event.

    Background:
        Given I visit The X Place app Page

    Scenario: Join event as a user not registered
        Given I visit The X Place app Page as not registered user
        When I click on Attend this event button
        Then I’ll be redirected to login/register page

    Scenario: Join event as registered user
        Given I visit The X Place app Page as registered user
        When I click on Attend this event button
        Then I’ll see loading Lottie 
	    And I’ll see “You are going!” Text with Checkmark and “…” button

    Scenario: Decline attend event as registered user
        Given I clicked on Attend this event 
        When I click on “…” button next to “You are going!”
        Then I’ll see a dropdown with “Won’t go!” Button
        When I click “Won’t go!” Button
        Then I’ll see loading Lottie and Attend this event button
 
    Scenario: Join event as owner
        When I visit The X Place app Page as owner of the published event
        Then I will only see “Share” button
