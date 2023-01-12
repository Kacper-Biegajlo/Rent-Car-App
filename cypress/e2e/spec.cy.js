import HomePage from "../fixtures/PageObjects/HomePage"



describe('template spec', () => {
  it('passes', () => {
    cy.visit(Cypress.env("url"))
    HomePage.getCountryDropdown().select("Poland")
  })
})