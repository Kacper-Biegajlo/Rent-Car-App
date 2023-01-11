import HomePage from "../fixtures/PageObjects/HomePage"



describe('template spec', () => {
  it('passes', () => {
    cy.visit(Cypress.env("baseUrl"))
    HomePage.getCountryDropdown().select("Poland")
  })
})