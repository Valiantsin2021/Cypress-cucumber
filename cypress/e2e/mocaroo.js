import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
// import neatCSV from 'neat-csv'

Given('I visit the www.mockaroo.com I see the main page', () => {
  cy.visit('https://www.mockaroo.com/')
  cy.contains('mockaroo').should('exist').and('be.visible')
})
Then('I click on id and type Cypress', () => {
  cy.get('[value="id"]').as('id').should('exist').and('be.visible')
  cy.get('@id').type('Cypress')
})
Then('I click on first name and type Hello', () => {
  cy.get('[value="first_name"]').as('fn').should('exist').and('be.visible')
  cy.get('@fn').type('Hello')
})
Then('I click on last name and type There', () => {
  cy.get('[value="last_name"]').as('ln').should('exist').and('be.visible')
  cy.get('@ln').type('There')
})
Then('I should chose 3 rows for a file', () => {
  cy.get('[value="1000"]').clear().type(3)
})
Then('I click on Download button and save the csv file', () => {
  cy.contains('Download').click()
  cy.fixture('../downloads/MOCK_DATA.csv')
    // .then(neatCSV) // converts text into list of objects
    .then(data => {
      expect(data.toString()).to.include('Cypress,Hello,There')
    })
})
