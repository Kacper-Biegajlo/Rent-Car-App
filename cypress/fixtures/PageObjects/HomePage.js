class HomePage {

    getCountryDropdown() {
        return cy.get('#country')
    }
}

module.exports = new HomePage();