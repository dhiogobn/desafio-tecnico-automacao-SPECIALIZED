import { visitFormElements as el } from './visitFormElements'
class VisitFormPage {
    visitForm() {
        cy.visit(el.url)
    }
}

module.exports = new VisitFormPage();
