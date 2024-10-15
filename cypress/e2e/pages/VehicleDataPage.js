class VehicleDataPage {
    fillVehicleDataForm() {
        cy.get('#make').select('Audi');
        cy.get('#model').select('Scooter');
        cy.get('#cylindercapacity').type('35')
        cy.get('#engineperformance').type('1500');
        cy.get('#dateofmanufacture').type('05/15/2022');
        cy.get('#numberofseats').select('5');
        cy.get('#righthanddriveyes').check({force: true});
        cy.get('#numberofseatsmotorcycle').select('2')
        cy.get('#fuel').select('Petrol');
        cy.get('#payload').type('100');
        cy.get('#totalweight').type('1000');
        cy.get('#listprice').type('30000');
        cy.get('#licenseplatenumber').type('XYZ123');
        cy.get('#annualmileage').type('12000');

    }
    clickNext() {
        cy.get('#nextenterinsurantdata').click();
    }
}

module.exports = new VehicleDataPage();
