class DetailsPage {

    Location() {
       return cy.get('.card-body > :nth-child(3)')
    }
    PickupDate() {
        return cy.get('.card-body > :nth-child(5)')
    }
    DropoffDate() {
        return cy.get('.card-body > :nth-child(6)')
    }
    RentBttn() {
        return cy.contains("Rent!")
    }

}

module.exports = new DetailsPage();