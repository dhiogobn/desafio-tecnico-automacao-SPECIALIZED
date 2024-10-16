import { vehicleDataElements as el } from './vehicleDataElements'
class VehicleDataPage {
    fillVehicleDataForm() {
        // cy.get(el.make).select('Audi');
        cy.get(el.make).should('exist').and('be.visible').then((selectElement) => {
            cy.wrap(selectElement).select('Audi');
        });
        cy.get(el.model).should('exist').and('be.visible').then((selectElement) => {
            cy.wrap(selectElement).select('Scooter');
        });

        cy.get(el.cylinderCapacity).should('exist').and('be.visible').then((inputElement) => {
            cy.wrap(inputElement).type('35');
        });

        cy.get(el.enginePerformance).should('exist').and('be.visible').then((inputElement) => {
            cy.wrap(inputElement).type('1500');
        });

        cy.get(el.dateOfManufacture).should('exist').and('be.visible').then((inputElement) => {
            cy.wrap(inputElement).type('05/15/2022');
        });

        cy.get(el.numberOfSeats).should('exist').and('be.visible').then((selectElement) => {
            cy.wrap(selectElement).select('5');
        });

        cy.get(el.rightHandDriveYes).should('exist').and('be.visible').then((checkboxElement) => {
            cy.wrap(checkboxElement).check({force: true});
        });

        cy.get(el.numberOfSeatsMotorcycle).should('exist').and('be.visible').then((selectElement) => {
            cy.wrap(selectElement).select('2');
        });

        cy.get(el.fuel).should('exist').and('be.visible').then((selectElement) => {
            cy.wrap(selectElement).select('Petrol');
        });

        cy.get(el.payload).should('exist').and('be.visible').then((inputElement) => {
            cy.wrap(inputElement).type('100');
        });

        cy.get(el.totalWeight).should('exist').and('be.visible').then((inputElement) => {
            cy.wrap(inputElement).type('1000');
        });

        cy.get(el.listPrice).should('exist').and('be.visible').then((inputElement) => {
            cy.wrap(inputElement).type('30000');
        });

        cy.get(el.licensePlateNumber).should('exist').and('be.visible').then((inputElement) => {
            cy.wrap(inputElement).type('XYZ123');
        });

        cy.get(el.annualMileage).should('exist').and('be.visible').then((inputElement) => {
            cy.wrap(inputElement).type('12000');
        });

    }
    clickNext() {
        cy.get(el.nextEnterInsurantData).should('exist').and('be.visible').then((buttonElement) => {
            cy.wrap(buttonElement).click();
        });
    }
}

module.exports = new VehicleDataPage();
