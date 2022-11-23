Feature: Event - Attend this event

    As a user I’m able to edit Attend this event section.

    Background:
        Given I visit The X Place app Page
        When I enter an event as Organizer or Owner with Attend this event section uncompleted

    Scenario: Empty State
        When I scroll down
        Then I’ll see Attend this event section with its empty state “Help your attendees: explain what they need to join”

     Scenario: Hover
        Given I see Attend this event section with its placeholder
        And I move my mouse over
        Then I will see a hover with the button “Add join text”

     Scenario: Add join text button
        When I click on “Add join text” button
        Then I’ll see input text component available
        And button “Save” and “Cancel” on the right corner
        And text size capacity on the left corner

     Scenario: Input Text capacity
        Given I clicked on  “Add join text” button
        When I try to type more than 400 characters
        Then I will not be available to type the 401 character

     Scenario: Button Save
        Given I clicked on  “Add join text” button
        When I type 1 (one) character
        Then I will see the Save button available
        When I click on Save button
        Then I will see this section updated 

    Scenario: Button Cancel
        Given I clicked on  “Add join text” button
        And I type characters
        When I click on button Cancel
        Then All characters will be wiped












