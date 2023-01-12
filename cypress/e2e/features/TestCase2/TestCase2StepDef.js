import { Given, When, Then, } from "@badeball/cypress-cucumber-preprocessor"
import HomePage from "../../../fixtures/PageObjects/HomePage"

Given("I open Rent a car app page", () => {
    cy.visit(Cypress.env("url"))
});
When("I enter invalid data", () => {
    HomePage.getCountryDropdown().select("France")
    cy.get('#city').select("Berlin")
    cy.get('#model').type("Polonez")
    cy.get('#pickup').type("2021-01-27")
    cy.get('#dropoff').type("2021-01-29")
        
})
When("I enter invalid data where pickup date is before pickup date", () => {
    HomePage.getCountryDropdown().select("France")
    cy.get('#city').select("Berlin")
    cy.get('#model').type("Polonez")
    cy.get('#pickup').type("2021-01-29")
    cy.get('#dropoff').type("2021-01-27")
        
})
When("I enter no data", () => {
    HomePage.getCountryDropdown()
    cy.get('#city')
    cy.get('#model')
    cy.get('#pickup')
    cy.get('#dropoff')
        
})
When("I click Search button", () => {
    cy.get('.btn').click()
})
Then("User will be promted about invalid date inputs - past dates", () => {
    cy.get('.alert').should("be.visible").should('have.text', 'Please enter a valid date!')
    cy.get('#search-results').should('not.exist')
})
Then("Country drop down list will automatically change to proper one according to city choice", () => {
    cy.get('#country').find(":selected").should("have.text", "Germany")
})
Then("App wont return search results", () => {
    cy.get('#search-results').should('not.exist')
    cy.get('.alert').should("be.visible")
})
Then("User will be promted about invalid inputs and app wont return search results", () => {
    cy.get('#search-results').should('not.exist')
    cy.get('.alert').should("be.visible").should('have.text', 'Please fill pickup and drop off dates')
})
Then("User will be promted about invalid dates and app wont return search results", () => {
    cy.get('.alert').should("be.visible").should('have.text', 'Please enter a valid date!')
    cy.get('#search-results').should('not.exist')
})


