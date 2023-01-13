class SearchPage {

    CountryDropdown() {
        return cy.get('#country')
    }
    CityDropdown() {
        return cy.get('#city')
    }
    ModelForm() {
        return cy.get('#model')
    }
    PickupDateForm() {
        return cy.get('#pickup')
    }
    DropoffDateForm() {
        return cy.get('#dropoff')
    }
    SearchSubmitBttn() {
        return cy.get('.btn')
    }
    SearchResultTable() {
        return cy.get('#search-results')
    }
    ModelNamesCells() {
        return cy.get('tr td:nth-child(3)')
    }
    Alert() {
        return cy.get('.alert')
    }
    OfferRentBttn() {
        return cy.get(':nth-child(1) > :nth-child(7) > .btn')
    }
}

module.exports = new SearchPage();