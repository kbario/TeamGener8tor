const Employee = require('../lib/Employee')

describe('Employee', () => {
    describe('Initialisation', () => {
        // positive test
        it('Should create an empty instance of the Employee class, with one working method returning "Employee"', () => {
            // arrange
            const employee = new Employee();
            // assert
            expect(employee.getRole()).toEqual('Employee');
            expect(employee.name).toBeUndefined();
            expect(employee.id).toBeUndefined();
            expect(employee.email).toBeUndefined();
        });
        it('Should an instance of the Employee class and the properties should equal that defined in initialisation', () => {
            // arrange
            const employee = new Employee('Kyle', 2, 'kyle@kbar.io');
            // assert
            expect(employee.getRole()).toEqual('Employee');
            expect(employee.name).toBe('Kyle');
            expect(employee.id).toBe(2);
            expect(employee.email).toBe('kyle@kbar.io');
        })
    });
    describe('getName', () => {
        it('Should return the value of the name property of an instance of the Employee class', () => {
            // arrange
            const employee = new Employee('Kyle', 2, 'kyle@kbar.io');
            // assert
            expect(employee.getName()).toBe('Kyle');
            expect(employee.getName()).not.toBe('gary');
        });
    });
    describe('getId', () => {
        it('Should return the value of the id property of the instance of the class Employee', () => {
            // arrange
            const employee = new Employee('Kyle', 2, 'kyle@kbar.io');
            // assert
            expect(employee.getId()).toBe(2);
            expect(employee.getId()).not.toBe(5);
        });
    });
    describe('getEmail', () => {
        it('Should get the value of the email property of the instance of the Employee class', () => {
            // arrange
            const employee = new Employee('Kyle', 2, 'kyle@kbar.io');
            // assert
            expect(employee.getEmail()).toBe('kyle@kbar.io');
            expect(employee.getEmail()).not.toBe('kylebario1@gmail.com');
        });
    });
});