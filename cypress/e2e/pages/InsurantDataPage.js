class InsurantDataPage {
    fillInsurantDataForm() {
        cy.get('#firstname').type('Dhiogo');
        cy.get('#lastname').type('Nobrega');
        cy.get('#birthdate').type('10/10/1980');
        cy.get('#gendermale').check({force: true});
        cy.get('#streetaddress').type('123 Main St');
        cy.get('#country').select('Brazil');
        cy.get('#zipcode').type('12345');
        cy.get('#city').type('São Paulo');
        cy.get('#occupation').select('Employee');
        cy.get('#speeding').check({force: true});

    }

    clickNext() {
        cy.get('#nextenterproductdata').click();
    }
}

module.exports = new InsurantDataPage();
