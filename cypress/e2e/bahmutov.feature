Feature: Visit https://glebbahmutov.com/blog/index.html and save the links to file
    Scenario: visit the Bahmutov page and grab the links for blogs and write them to the json file
        When I visit glebbahmutov.com
        Then I should see the page header
        When I see 100 blog links
        Then I should parse the links and write them to json file