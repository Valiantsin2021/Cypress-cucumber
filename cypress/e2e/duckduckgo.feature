Feature: duckduckgo.com
  Scenario: visiting the frontpage
    When I visit duckduckgo.com
    Then I should see a search bar
    Then I should enter in a search DuckDuck and see suggestions
    Then I should click on Search button and see the results