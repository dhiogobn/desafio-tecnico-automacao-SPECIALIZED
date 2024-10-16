import { sendQuoteElements as el} from './sendQuoteElements'
class SendQuotePage {
    fillSendQuoteForm() {
        cy.get(el.email).should('exist').and('be.visible').type('dhiogobn@gmail.com');
        cy.get(el.phone).should('exist').and('be.visible').type('1234567890');
        cy.get(el.username).should('exist').and('be.visible').type('dhiogobn');
        cy.get(el.password).should('exist').and('be.visible').type('Password123!');
        cy.get(el.confirmPassword).should('exist').and('be.visible').type('Password123!');
        cy.get(el.comments).should('exist').and('be.visible').type('Please send me the quote as soon as possible.');

    }

    clickNext() {
        cy.get(el.sendEmail).should('exist').and('be.visible').click();

    }

    verifySuccessMessage() {
        cy.get(el.sweetAlert, {timeout: 10000}).should('exist').and('be.visible').and('contain', 'Sending e-mail success!');
        cy.get(el.buttonConfirm).should('be.visible').click();

    }


}

module.exports = new SendQuotePage();
