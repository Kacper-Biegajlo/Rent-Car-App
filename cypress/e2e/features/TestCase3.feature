Feature: User's journey to renting a car

    User should be able to go through search function, chose a car then click rent
        then proceed through details page to rent a car page. Fill all personal data and
            complete a process.

    Scenario: Valid data
    Given I open Rent a car app page
    When I enter valid search data 
    And I click Search button
    And I confirm chosen ofer 
    And I confirm offer's details
    And I fill personal data rent form valid data and confirm
    Then User will sucessfully rent a car

    Scenario: Invalid data#1
    Given I open Rent a car app page
    When I enter valid search data 
    And I click Search button
    And I confirm chosen ofer 
    And I confirm offer's details
    And I fill personal data rent form invalid data and confirm
    Then User will be prompted about invalid data and wont be able to proceed

    Scenario: Invalid data#2
    Given I open Rent a car app page
    When I enter valid search data 
    And I click Search button
    And I confirm chosen ofer 
    And I confirm offer's details
    And I fill personal data rent form invalid data and confirm#2
    Then User will be prompted about invalid data and wont be able to proceed#2
