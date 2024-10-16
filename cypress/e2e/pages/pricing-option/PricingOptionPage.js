import { pricingOptionElements as el} from './pricingOptionElements'
class PricingOptionPage {
    fillPricingOptionForm() {
        cy.get(el.choosePrice).check({force: true});
    }

    clickNext() {
        cy.get(el.nextSendQuote).click();
    }
}

module.exports = new PricingOptionPage();
