import { Given, When, Then, } from "@badeball/cypress-cucumber-preprocessor"
import SearchPage from "../../../fixtures/PageObjects/SearchPage"

Given("I open Rent a car app page", () => {
    cy.visit(Cypress.env("url"))
});
When("I enter invalid data", () => {
    SearchPage.CountryDropdown().select("France")
    SearchPage.CityDropdown().select("Berlin")
    SearchPage.ModelForm().type("Polonez")
    SearchPage.PickupDateForm().type("2021-01-27")
    SearchPage.DropoffDateForm().type("2021-01-29")
        
})
When("I enter invalid data where pickup date is before pickup date", () => {
    SearchPage.CountryDropdown().select("France")
    SearchPage.CityDropdown().select("Berlin")
    SearchPage.ModelForm().type("Polonez")
    SearchPage.PickupDateForm().type("2021-01-29")
    cy.get('#dropoff').type("2021-01-27")
        
})
When("I enter no data", () => {
    SearchPage.CountryDropdown()
    SearchPage.CityDropdown()
    SearchPage.ModelForm()
    SearchPage.PickupDateForm()
    SearchPage.DropoffDateForm()
        
})
When("I click Search button", () => {
    SearchPage.SearchSubmitBttn().click()
})
Then("User will be promted about invalid date inputs - past dates", () => {
    SearchPage.Alert().should("be.visible").should('have.text', 'Please enter a valid date!')
    SearchPage.SearchResultTable().should('not.exist')
})
Then("Country drop down list will automatically change to proper one according to city choice", () => {
    SearchPage.CountryDropdown().find(":selected").should("have.text", "Germany")
})
Then("App wont return search results", () => {
    SearchPage.SearchResultTable().should('not.exist')
    SearchPage.Alert().should("be.visible")
})
Then("User will be promted about invalid inputs and app wont return search results", () => {
    SearchPage.SearchResultTable().should('not.exist')
    SearchPage.Alert().should("be.visible").should('have.text', 'Please fill pickup and drop off dates')
})
Then("User will be promted about invalid dates and app wont return search results", () => {
    SearchPage.Alert().should("be.visible").should('have.text', 'Please enter a valid date!')
    SearchPage.SearchResultTable().should('not.exist')
})


