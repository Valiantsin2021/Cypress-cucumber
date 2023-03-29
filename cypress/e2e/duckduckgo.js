const { When, Then } = require('@badeball/cypress-cucumber-preprocessor')

When('I visit duckduckgo.com', () => {
  cy.visit('https://duckduckgo.com/')
})

Then('I should see a search bar', () => {
  cy.get('input')
    .should('have.attr', 'placeholder', 'Search the web without being tracked')
    .should('exist')
    .and('be.visible')
})
Then('I should enter in a search DuckDuck and see suggestions', () => {
  cy.get('#search_form_input_homepage').type('DuckDuck')
  cy.get('.search__autocomplete').should('be.visible')
})
Then('I should click on Search button and see the results', () => {
  cy.get('#search_button_homepage').click()
  cy.get('.results--main').should('exist').and('be.visible')
  cy.contains('a', 'DuckDuckGo — Privacy, simplified.')
    .should('exist')
    .and('be.visible')
})
