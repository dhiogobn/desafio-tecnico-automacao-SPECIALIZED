class ProductDataPage {
    fillProductForm() {
        cy.get('#startdate').type('12/15/2024');
        cy.get('#insurancesum').select('5.000.000,00');
        cy.get('#meritrating').select('Bonus 1');
        cy.get('#damageinsurance').select('Full Coverage');
        cy.get('#EuroProtection').check({force: true});
        cy.get('#courtesycar').select('Yes');

    }
    clickNext() {
        cy.get('#nextselectpriceoption').click();
    }
}

module.exports = new ProductDataPage();
