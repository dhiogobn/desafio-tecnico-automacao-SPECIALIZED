import { visitFormElements as el } from './visitFormElements'
class VisitFormPage {
    visitForm() {
        cy.visit(el.url).then(() => cy.url().should('include', 'sampleapp.tricentis.com/101/app.php'));
    }
}

module.exports = new VisitFormPage();
