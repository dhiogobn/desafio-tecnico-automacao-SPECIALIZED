import { pricingOptionElements as el} from './pricingOptionElements'
class PricingOptionPage {
    fillPricingOptionForm() {
        cy.get(el.choosePrice).should('exist').and('be.visible').then((checkbox) => {
            cy.wrap(checkbox).check({force: true});
        });

    }

    clickNext() {
        cy.get(el.nextSendQuote).should('exist').and('be.visible').then((button) => {
            cy.wrap(button).click();
        });

    }
}

module.exports = new PricingOptionPage();
