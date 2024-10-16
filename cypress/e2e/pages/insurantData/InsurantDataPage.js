import { insurantDataElements as el } from './insurantDataElements'
class InsurantDataPage {
    fillInsurantDataForm() {
        cy.get(el.firstName).should('exist').and('be.visible').then((input) => {
            cy.wrap(input).type('Dhiogo');
        });

        cy.get(el.lastName).should('exist').and('be.visible').then((input) => {
            cy.wrap(input).type('Nobrega');
        });

        cy.get(el.birthdate).should('exist').and('be.visible').then((input) => {
            cy.wrap(input).type('10/10/1980');
        });

        cy.get(el.genderMale).should('exist').and('be.visible').then((radio) => {
            cy.wrap(radio).check({ force: true });
        });

        cy.get(el.streetAddress).should('exist').and('be.visible').then((input) => {
            cy.wrap(input).type('123 Main St');
        });

        cy.get(el.country).should('exist').and('be.visible').then((select) => {
            cy.wrap(select).select('Brazil');
        });

        cy.get(el.zipCode).should('exist').and('be.visible').then((input) => {
            cy.wrap(input).type('12345');
        });

        cy.get(el.city).should('exist').and('be.visible').then((input) => {
            cy.wrap(input).type('São Paulo');
        });

        cy.get(el.occupation).should('exist').and('be.visible').then((select) => {
            cy.wrap(select).select('Employee');
        });

        cy.get(el.speeding).should('exist').and('be.visible').then((checkbox) => {
            cy.wrap(checkbox).check({ force: true });
        });

    }

    clickNext() {
        cy.get(el.nextEnterProductData).should('exist').and('be.visible').then((button) => {
            cy.wrap(button).click();
        });
    }
}

module.exports = new InsurantDataPage();
