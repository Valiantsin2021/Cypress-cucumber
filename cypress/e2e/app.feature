Feature: Snapshot website test scenarios
  Scenario: visiting the home page - successful search
    Given I visit the home page
    Then the header should be visible
    Then I click in the text input
    Then I type birds into the search input and press search button
    Then I should see Birds Images in header
    Then I click the Food button and see Food header and 24 images