Feature: Search 
    
    As a user I'm able to search for events

    Background: 
        Given I visit The X Place app Page and travel to events Page

    Scenario: Search - Search for existing events
        When I click on search input box
        And I type a title of an existing event
        Then I will see the feed returning an existing event

    Scenario: Search - Search for non-existing events
        When I click on search input box
        And I type a title of an non-existing event
        Then I will see the feed empty state

    Scenario: Search - Wipe Input 
        When I click on search input box
        And I type an event title 
        And I click on the Cross Icon inside the Input 
        Then Input content will be wiped and it will return all events

    Scenario: Search - Wipe Input manually
        When I click on search input box
        And I type an event title 
        And I wipe the Input manually
        Then Input content will be wiped and it will return all events
        
    Scenario: Search - Character Validation
        When I click on search input box
        And I type alphanumeric characters, special characters and spaces
        Then I will be able to search for event titles