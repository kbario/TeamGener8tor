const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Initialisation', () => {
        // positive test
        it('Should create an empty instance of the Manager class, with one working method returning "Manager"', () => {
            // arrange
            const manager = new Manager();
            // assert
            expect(manager.getRole()).toEqual('Manager');
            expect(manager).toHaveProperty('name');
            expect(manager).toHaveProperty('id');
            expect(manager).toHaveProperty('email');
            expect(manager).toHaveProperty('officeNumber');
        });
        it('Should an instance of the Manager class and the properties should equal that defined in initialisation', () => {
            // arrange
            const manager = new Manager('Kyle', 2, 'kyle@kbar.io', 12);
            // assert
            expect(manager.getRole()).toEqual('Manager');
            expect(manager).toHaveProperty('name', 'Kyle');
            expect(manager).toHaveProperty('id', 2);
            expect(manager).toHaveProperty('email', 'kyle@kbar.io');
            expect(manager).toHaveProperty('officeNumber', 12);
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
            expect(manager.getOfficeNumber()).not.toBe(5);
        });
    });
});
