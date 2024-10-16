import { productDataElements as el } from './productDataElements'
class ProductDataPage {
    fillProductForm() {
        cy.get(el.startDate).type('12/15/2024');
        cy.get(el.insuranceSum).select('5.000.000,00');
        cy.get(el.meritRating).select('Bonus 1');
        cy.get(el.damageInsurance).select('Full Coverage');
        cy.get(el.euroProtection).check({force: true});
        cy.get(el.courtesyCar).select('Yes');

    }
    clickNext() {
        cy.get(el.nextSelectPriceOption).click();
    }
}

module.exports = new ProductDataPage();
