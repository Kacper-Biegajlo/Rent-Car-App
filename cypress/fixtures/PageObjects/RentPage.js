class RentPage {

    NameForm() {
        return cy.get('#name')
    }
    LastNameForm() {
        return cy.get('#last_name')
    }
    CardNumberForm() {
        return cy.get('#card_number')
    }
    EmailForm() {
        return cy.get('#email')
    }
    RentBttn() {
        return cy.contains("Rent")
    }
    SuccessAlert() {
        return cy.get('.alert')
    }
    InputAlert1() {
        return cy.get('#rent_form > :nth-child(1)')
    }
    InputAlert2() {
        return cy.get('#rent_form > :nth-child(2)')
    }
    InputAlert3() {
        return cy.get('#rent_form > :nth-child(3)')
    }
    InputAlert4() {
        return cy.get('#rent_form > :nth-child(4)')
    }

}

module.exports = new RentPage();