Feature: Search page

    Search page will work depending on inputed data.

    Scenario: I enter invalid data#1
    Given I open Rent a car app page
    When I enter invalid data 
    And I click Search button
    Then User will be promted about invalid date inputs - past dates


    Scenario: I enter invalid data#2
    Given I open Rent a car app page
    When I enter invalid data
    And I click Search button
    Then Country drop down list will automatically change to proper one according to city choice
    
    
    Scenario: I enter invalid data#3
    Given I open Rent a car app page
    When I enter invalid data
    And I click Search button
    Then App wont return search results

    Scenario: I enter invalid data#4
    Given I open Rent a car app page
    When I enter no data
    And I click Search button
    Then User will be promted about invalid inputs and app wont return search results

    Scenario: I enter invalid data#5
    Given I open Rent a car app page
    When I enter invalid data where pickup date is before pickup date
    And I click Search button
    Then User will be promted about invalid dates and app wont return search results
