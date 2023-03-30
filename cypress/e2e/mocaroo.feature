Feature: Smoke UI test of www.mockaroo.com
    Scenario: Visit www.mockaroo.com
        Given I visit the www.mockaroo.com I see the main page
        Then I click on id and type Cypress
        Then I click on first name and type Hello
        Then I click on last name and type There
        Then I should chose 3 rows for a file
        Then I click on Download button and save the csv file
