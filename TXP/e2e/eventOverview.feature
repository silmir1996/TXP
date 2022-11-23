Feature: Event - Overview

    As a user I’m able to edit Overview section.

    Background:
        Given I visit The X Place app Page
        When I enter an event as Organizer or Owner with Overview section uncompleted

    Scenario: Empty State
        When I scroll down
        Then I’ll see Attend this event section with its empty state “A brief overview of your event"

    Scenario: Hover
        Given I see Attend this event section with its placeholder
        And I move my mouse over
        Then I will see a hover with the button “+ Add overview”

    Scenario: Add join text button
        When I click on “+ Add overview” button
        Then I’ll see input text component available
        And button “Save” and “Cancel” on the right corner
        And text size capacity on the left corner

    Scenario:  Input Text capacity
        Given I clicked on  “+ Add overview” button
        When I try to type more than 600 characters
        Then I will not be available to type the 601 character

    Scenario:  Button Save
        Given I clicked on  “+ Add overview” button
        When I type 1 (one) character
        Then I will see the Save button available
        When I click on Save button
        Then I will see this section updated 

    Scenario: Button Cancel
        Given I clicked on  “+ Add overview” button
        And I type characters
        When I click on button Cancel
        Then All characters will be wiped












