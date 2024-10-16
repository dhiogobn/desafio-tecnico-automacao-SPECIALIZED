import { productDataElements as el } from './productDataElements'
class ProductDataPage {
    fillProductForm() {
        cy.get(el.startDate).should('exist').and('be.visible').type('12/15/2024');
        cy.get(el.insuranceSum).should('exist').and('be.visible').select('5.000.000,00');
        cy.get(el.meritRating).should('exist').and('be.visible').select('Bonus 1');
        cy.get(el.damageInsurance).should('exist').and('be.visible').select('Full Coverage');
        cy.get(el.euroProtection).should('exist').and('be.visible').check({force: true});
        cy.get(el.courtesyCar).should('exist').and('be.visible').select('Yes');


    }
    clickNext() {
        cy.get(el.nextSelectPriceOption).should('exist').and('be.visible').click();
    }
}

module.exports = new ProductDataPage();
