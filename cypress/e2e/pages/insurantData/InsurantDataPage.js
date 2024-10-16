import { insurantDataElements as el } from './insurantDataElements'
class InsurantDataPage {
    fillInsurantDataForm() {
        cy.get(el.firstName).type('Dhiogo');
        cy.get(el.lastName).type('Nobrega');
        cy.get(el.birthdate).type('10/10/1980');
        cy.get(el.genderMale).check({force: true});
        cy.get(el.streetAddress).type('123 Main St');
        cy.get(el.country).select('Brazil');
        cy.get(el.zipCode).type('12345');
        cy.get(el.city).type('São Paulo');
        cy.get(el.occupation).select('Employee');
        cy.get(el.speeding).check({force: true});

    }

    clickNext() {
        cy.get('#nextenterproductdata').click();
    }
}

module.exports = new InsurantDataPage();
