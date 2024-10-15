import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
const vehicleDataPage = require('../../pages/VehicleDataPage');
const insurantDataPage = require('../../pages/InsurantDataPage');
const productDataPage = require('../../pages/ProductDataPage');
const pricingOptionPage = require('../../pages/PricingOptionPage');
const sendQuote = require('../../pages/SendQuote');

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Form', () => {
    describe('Successfully fill out and send insurance quote', () => {

        Given("I'm on the form page", () => {
            cy.visit('http://sampleapp.tricentis.com/101/app.php')
        })

        When("I fill out the Enter Vehicle Data form and proceed",() => {
            vehicleDataPage.fillVehicleDataForm();
            vehicleDataPage.clickNext();
        })

        And("I fill out the Enter Insurant Data form and proceed", () => {
           insurantDataPage.fillInsurantDataForm();
           insurantDataPage.clickNext();
        })

        And("I fill out the Enter Product Data form and proceed", () => {
           productDataPage.fillProductForm();
           productDataPage.clickNext();
        })

        And("I select the pricing option and proceed", () => {
            pricingOptionPage.fillPricingOptionForm();
            pricingOptionPage.clickNext();
        })

        And("I fill out the Send Quote form and send the quote", () => {
           sendQuote.fillSendQuoteForm();
           sendQuote.clickNext();
        })

        Then("the message Sending e-mail success! should be displayed", () => {
            cy.get('.sweet-alert', {timeout:  10000}).should('be.visible')
                .and('contain', 'Sending e-mail success!');
            cy.get('button.confirm').click();
        })

    })


})
