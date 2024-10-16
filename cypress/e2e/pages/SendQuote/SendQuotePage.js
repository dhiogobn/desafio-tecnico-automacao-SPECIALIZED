import { sendQuoteElements as el} from './sendQuoteElements'
class SendQuotePage {
    fillSendQuoteForm() {
        cy.get(el.email).type('dhiogobn@gmail.com');
        cy.get(el.phone).type('1234567890');
        cy.get(el.username).type('dhiogobn');
        cy.get(el.password).type('Password123!');
        cy.get(el.confirmPassword).type('Password123!');
        cy.get(el.comments).type('Please send me the quote as soon as possible.');
    }

    clickNext() {
        cy.get(el.sendEmail).click();
    }

    verifySuccessMessage() {
        cy.get(el.sweetAlert, {timeout:  10000}).should('be.visible')
            .and('contain', 'Sending e-mail success!');
        cy.get(el.buttonConfirm).click();
    }


}

module.exports = new SendQuotePage();
