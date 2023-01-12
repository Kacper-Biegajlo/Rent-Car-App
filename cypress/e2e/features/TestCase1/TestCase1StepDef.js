import { Given, When, Then, } from "@badeball/cypress-cucumber-preprocessor"
import HomePage from "../../../fixtures/PageObjects/HomePage"

Given("I open Rent a car app page", () => {
    cy.visit(Cypress.env("url"))
});
When("I enter valid data", () => {
    HomePage.getCountryDropdown().select("Poland")
    cy.get('#city').select("Wroclaw")
    cy.get('#model').type("Skoda")
    cy.get('#pickup').type("2023-01-27")
    cy.get('#dropoff').type("2024-01-27")
})
When("I click Search button", () => {
    cy.get('.btn').click()
})
Then("The Search result table is displayed with proper results", () => {
    cy.get('#search-results').should('be.visible')
    cy.get('tr td:nth-child(3)').each(($el, index, $list) => {
        const modelName = $el.text()
        expect(modelName).to.equal("Skoda Octavia")
    })
})

