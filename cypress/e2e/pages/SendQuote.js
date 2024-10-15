class SendQuote {
    fillSendQuoteForm() {
        cy.get('#email').type('dhiogobn@gmail.com');
        cy.get('#phone').type('1234567890');
        cy.get('#username').type('dhiogobn');
        cy.get('#password').type('Password123!');
        cy.get('#confirmpassword').type('Password123!');
        cy.get('#Comments').type('Please send me the quote as soon as possible.');
    }

    clickNext() {
        cy.get('#sendemail').click();
    }
}

module.exports = new SendQuote();
