Feature: Search page

    Search page will work depending on inputed data.

    Scenario: Valid Search
    Given I open Rent a car app page
    When I enter valid data
    And I click Search button
    Then The Search result table is displayed with proper results 