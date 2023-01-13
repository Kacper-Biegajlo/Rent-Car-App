import { Given, When, Then, } from "@badeball/cypress-cucumber-preprocessor"
import SearchPage from "../../../fixtures/PageObjects/SearchPage";
import DetailsPage from "../../../fixtures/PageObjects/DetailsPage";
import RentPage from "../../../fixtures/PageObjects/RentPage";

Given("I open Rent a car app page", () => {
    cy.visit(Cypress.env("url"))
});
When("I enter valid search data", () => {
    SearchPage.CountryDropdown().select("Poland")
    SearchPage.CityDropdown().select("Wroclaw")
    SearchPage.PickupDateForm().type("2023-01-27")
    SearchPage.DropoffDateForm().type("2024-01-27")
})
When("I click Search button", () => {
    SearchPage.SearchSubmitBttn().click()
})
When("I confirm chosen ofer", () => {
    SearchPage.OfferRentBttn().click()
})
When("I confirm offer's details", () => {
    DetailsPage.Location().should('have.text', 'Location: Poland, Wroclaw')
    DetailsPage.PickupDate().should('have.text', ' Pickup date: 2023-01-27')
    DetailsPage.DropoffDate().should('have.text', ' Dropoff date: 2024-01-27')
    DetailsPage.RentBttn().click()
})
When("I fill personal data rent form valid data and confirm", () => {
    RentPage.NameForm().type("Tivix")
    RentPage.LastNameForm().type("Cool")
    RentPage.CardNumberForm().type("123456")
    RentPage.EmailForm().type("valid@email.com")
    RentPage.RentBttn().click()
})
Then("User will sucessfully rent a car", () => {
    RentPage.SuccessAlert().should("be.visible").should('have.text', 'Sucessfully rented a car!')
})
When("I fill personal data rent form invalid data and confirm", () => {
    RentPage.NameForm().type("asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd")
    RentPage.LastNameForm().type("asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd")
    RentPage.CardNumberForm().type("1asdasdasdasdasdasdasdasdasd")
    RentPage.EmailForm().type("invalid.com")
    RentPage.RentBttn().click()
})
When("I fill personal data rent form invalid data and confirm#2", () => {
    RentPage.NameForm().type("123")
    RentPage.LastNameForm().type("123")
    RentPage.CardNumberForm().type("asd")
    RentPage.EmailForm().type("invalid@")
    RentPage.RentBttn().click()
})
Then("User will be prompted about invalid data and wont be able to proceed", () => {
    RentPage.InputAlert1()
        .should("be.visible").should('have.text', 'Name value is too long')
    RentPage.InputAlert2()
        .should("be.visible").should('have.text', 'Last name value is too long')
    RentPage.InputAlert3()
        .should("be.visible").should('have.text', 'Please provide valid email')
    RentPage.InputAlert4()
        .should("be.visible").should('have.text', 'Card number value is too long')
})
Then("User will be prompted about invalid data and wont be able to proceed#2", () => {
    RentPage.InputAlert1()
        .should("be.visible").should('have.text', 'Name contains wrong chrs')
    RentPage.InputAlert2()
        .should("be.visible").should('have.text', 'Last ontains wrong chrs')
    RentPage.InputAlert3()
        .should("be.visible").should('have.text', 'Please provide valid email')
    RentPage.InputAlert4()
        .should("be.visible").should('have.text', 'Card number ontains wrong chrs')

})    