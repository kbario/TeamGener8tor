const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('Initialisation', () => {
        // positive test
        it('Should create an empty instance of the Engineer class, with one working method returning "Engineer"', () => {
            // arrange
            const engineer = new Engineer();
            // assert
            expect(engineer.getRole()).toEqual('Engineer');
            expect(engineer.name).toBeUndefined();
            expect(engineer.id).toBeUndefined();
            expect(engineer.email).toBeUndefined();
            expect(engineer.officeNumber).toBeUndefined();
        });
        it('Should an instance of the Engineer class and the properties should equal that defined in initialisation', () => {
            // arrange
            const engineer = new Engineer('Kyle', 2, 'kyle@kbar.io', 'kbario');
            // assert
            expect(engineer.getRole()).toEqual('Engineer');
            expect(engineer.name).toBe('Kyle');
            expect(engineer.id).toBe(2);
            expect(engineer.email).toBe('kyle@kbar.io');
            expect(engineer.github).toBe('kbario');
        })
    });
    describe('getName', () => {
        it('Should return the value of the name property of an instance of the Engineer class', () => {
            // arrange
            const engineer = new Engineer('Kyle', 2, 'kyle@kbar.io', 12);
            // assert
            expect(engineer.getName()).toBe('Kyle');
            expect(engineer.getName()).not.toBe('gary');
        });
    });
    describe('getId', () => {
        it('Should return the value of the id property of the instance of the class Engineer', () => {
            // arrange
            const engineer = new Engineer('Kyle', 2, 'kyle@kbar.io', 12);
            // assert
            expect(engineer.getId()).toBe(2);
            expect(engineer.getId()).not.toBe(5);
        });
    });
    describe('getEmail', () => {
        it('Should get the value of the email property of the instance of the Engineer class', () => {
            // arrange
            const engineer = new Engineer('Kyle', 2, 'kyle@kbar.io', 12);
            // assert
            expect(engineer.getEmail()).toBe('kyle@kbar.io');
            expect(engineer.getEmail()).not.toBe('kylebario1@gmail.com');
        });
    });
    describe('getGithub', () => {
        it('Should get the value of the email property of the instance of the Engineer class', () => {
            // arrange
            const engineer = new Engineer('Kyle', 2, 'kyle@kbar.io', 'kbario');
            // assert
            expect(engineer.getGithub()).toBe('kbario');
            expect(engineer.getGithub()).not.toBe('kylebario');
        });
    });
});
