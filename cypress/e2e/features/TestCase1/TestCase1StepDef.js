import { Given, When, Then, } from "@badeball/cypress-cucumber-preprocessor"
import SearchPage from "../../../fixtures/PageObjects/SearchPage";

Given("I open Rent a car app page", () => {
    cy.visit(Cypress.env("url"))
});
When("I enter valid data", () => {
    SearchPage.CountryDropdown().select("Poland")
    SearchPage.CityDropdown().select("Wroclaw")
    SearchPage.ModelForm().type("Skoda")
    SearchPage.PickupDateForm().type("2023-01-27")
    SearchPage.DropoffDateForm().type("2024-01-27")
})
When("I click Search button", () => {
    SearchPage.SearchSubmitBttn().click()
})
Then("The Search result table is displayed with proper results", () => {
    SearchPage.SearchResultTable().should('be.visible')
    SearchPage.ModelNamesCells().each(($el, index, $list) => {
        const modelName = $el.text()
        expect(modelName).to.equal("Skoda Octavia")
    })
})

