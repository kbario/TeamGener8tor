const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Initialisation', () => {
        // positive test
        it('Should create an empty instance of the Manager class, with one working method returning "Manager"', () => {
            // arrange
            const manager = new Manager();
            // assert
            expect(manager.getRole()).toEqual('Manager');
            expect(manager.name).toBeUndefined();
            expect(manager.id).toBeUndefined();
            expect(manager.email).toBeUndefined();
            expect(manager.officeNumber).toBeUndefined();
        });
        it('Should an instance of the Manager class and the properties should equal that defined in initialisation', () => {
            // arrange
            const manager = new Manager('Kyle', 2, 'kyle@kbar.io', 12);
            // assert
            expect(manager.getRole()).toEqual('Manager');
            expect(manager.name).toBe('Kyle');
            expect(manager.id).toBe(2);
            expect(manager.email).toBe('kyle@kbar.io');
            expect(manager.officeNumber).toBe(12);
        })
    });
    describe('getName', () => {
        it('Should return the value of the name property of an instance of the Manager class', () => {
            // arrange
            const manager = new Manager('Kyle', 2, 'kyle@kbar.io', 12);
            // assert
            expect(manager.getName()).toBe('Kyle');
            expect(manager.getName()).not.toBe('gary');
        });
    });
    describe('getId', () => {
        it('Should return the value of the id property of the instance of the class Manager', () => {
            // arrange
            const manager = new Manager('Kyle', 2, 'kyle@kbar.io', 12);
            // assert
            expect(manager.getId()).toBe(2);
            expect(manager.getId()).not.toBe(5);
        });
    });
    describe('getEmail', () => {
        it('Should get the value of the email property of the instance of the Manager class', () => {
            // arrange
            const manager = new Manager('Kyle', 2, 'kyle@kbar.io', 12);
            // assert
            expect(manager.getEmail()).toBe('kyle@kbar.io');
            expect(manager.getEmail()).not.toBe('kylebario1@gmail.com');
        });
    });
    describe('getOfficeNumber', () => {
        it('Should get the value of the email property of the instance of the Manager class', () => {
            // arrange
            const manager = new Manager('Kyle', 2, 'kyle@kbar.io', 12);
            // assert
            expect(manager.getOfficeNumber()).toBe(12);
            expect(manager.getOfficeNumber()).not.toBe(3);
        });
    });
});
