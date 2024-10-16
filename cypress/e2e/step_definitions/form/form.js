import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
const vehicleDataPage = require('../../pages/vehicle-data/VehicleDataPage');
const insurantDataPage = require('../../pages/insurantData/InsurantDataPage');
const productDataPage = require('../../pages/product-data/ProductDataPage');
const pricingOptionPage = require('../../pages/pricing-option/PricingOptionPage');
const sendQuotePage = require('../../pages/SendQuote/SendQuotePage');
const visitFormPage = require('../../pages/visit-form/VisitFormPage')

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Form', () => {
    describe('Successfully fill out and send insurance quote', () => {

        Given("I'm on the form page", () => {
            visitFormPage.visitForm();
        })

        When("I fill out the Enter Vehicle Data form and proceed",() => {
            if (vehicleDataPage) {
                vehicleDataPage.fillVehicleDataForm();
                vehicleDataPage.clickNext();
            }

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
           sendQuotePage.fillSendQuoteForm();
           sendQuotePage.clickNext();
        })

        Then("the message Sending e-mail success! should be displayed", () => {
            sendQuotePage.verifySuccessMessage();
        })

    })


})
