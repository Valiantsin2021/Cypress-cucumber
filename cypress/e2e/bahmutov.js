const { When, Then } = require('@badeball/cypress-cucumber-preprocessor')

When('I visit glebbahmutov.com', () => {
  cy.visit('https://glebbahmutov.com/blog/index.html')
})
Then('I should see the page header', () => {
  cy.contains('a', 'Better world by better software')
    .should('exist')
    .and('be.visible')
})
When('I see 100 blog links', () => {
  cy.get('[itemprop="name"] a').as('blogs').should('have.length', 100)
})
Then('I should parse the links and write them to json file', () => {
  const links = []
  cy.get('@blogs').then($links => {
    links.push(
      ...$links.toArray().map(link => {
        const obj = {
          title: link.innerHTML,
          link: `https://glebbahmutov.com/blog${link.getAttribute('href')}`
        }
        return obj
      })
    )
  })
  cy.wrap(links).then(links => {
    cy.writeFile('links.json', links)
    console.log(JSON.stringify(links, null, 2))
  })
})
