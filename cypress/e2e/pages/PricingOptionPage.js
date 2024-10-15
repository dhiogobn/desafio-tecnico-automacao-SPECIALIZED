class PricingOptionPage {
    fillPricingOptionForm() {
        cy.get('.choosePrice [value="Silver"]').check({force: true});
    }

    clickNext() {
        cy.get('#nextsendquote').click();
    }
}

module.exports = new PricingOptionPage();
