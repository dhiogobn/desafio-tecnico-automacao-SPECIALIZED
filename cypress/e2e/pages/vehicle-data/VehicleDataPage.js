import { vehicleDataElements as el } from './vehicleDataElements'
class VehicleDataPage {
    fillVehicleDataForm() {
        cy.get(el.make).select('Audi');
        cy.get(el.model).select('Scooter');
        cy.get(el.cylinderCapacity).type('35')
        cy.get(el.enginePerformance).type('1500');
        cy.get(el.dateOfManufacture).type('05/15/2022');
        cy.get(el.numberOfSeats).select('5');
        cy.get(el.rightHandDriveYes).check({force: true});
        cy.get(el.numberOfSeatsMotorcycle).select('2')
        cy.get(el.fuel).select('Petrol');
        cy.get(el.payload).type('100');
        cy.get(el.totalWeight).type('1000');
        cy.get(el.listPrice).type('30000');
        cy.get(el.licensePlateNumber).type('XYZ123');
        cy.get(el.annualMileage).type('12000');

    }
    clickNext() {
        cy.get(el.nextEnterInsurantData).click();
    }
}

module.exports = new VehicleDataPage();
