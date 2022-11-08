Feature: Search 
    
    As a user I'm able to search for events

    # Background: 
    #     Given I visit The X Place app Page
    #     When I login with "valid" Username and Password
    #     And I travel to events Page

    # Scenario: Search - Search for existing events
    #     When I click on search input box
    #     When I type a title of an existing event
    #     Then I will see the feed returning an existing event

    Scenario: Search - Search for non-existing events
        When I click on search input box
        When I type a title of an non-existing event
        Then I will see the feed empty state

    Scenario: Search - Wipe Input 
        When I click on search Input box
        When I type an event title 
        And I click on the Cross Icon inside the Input 
        Then the Input content will be wiped and it will return all events

    Scenario: Search - Search for existing events
        When I click on search input box
        When I type a title of an existing event
        Then I will see the feed returning an existing event