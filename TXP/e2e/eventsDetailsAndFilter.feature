Feature: Events Details and Filter 
    
    As a user I'm able to see event details from feed and also when entering an event. 
    I’m also able to filter events.

    Background: 
        Given I visit The X Place and travel to events Page

    Scenario: Filters - Check all filters
        When I click on Adjustments button
        And I click on Add filters
        Then I will see dropdown menu with 3 types of filters

    Scenario: Filters - Add  filter
        Given I click on Add filters
        And I click on Event Type filter from dropdown menu 
        Then I will see the feed updated with that filter applied

     Scenario: Event Details 
        Given I see event details of an event from the feed
        When I click on the event and get redirected to it
        Then I will see event details with proper placement


