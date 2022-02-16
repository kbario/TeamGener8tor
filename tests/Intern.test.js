const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Initialisation', () => {
        // positive test
        it('Should create an empty instance of the Intern class, with one working method returning "Intern"', () => {
            // arrange
            const intern = new Intern();
            // assert
            expect(intern.getRole()).toEqual('Intern');
            expect(intern).toHaveProperty('name');
            expect(intern).toHaveProperty('id');
            expect(intern).toHaveProperty('email');
            expect(intern).toHaveProperty('school');
        });
        it('Should an instance of the Intern class and the properties should equal that defined in initialisation', () => {
            // arrange
            const intern = new Intern('Kyle', 2, 'kyle@kbar.io', 'St. John\'s');
            // assert
            expect(intern.getRole()).toEqual('Intern');
            expect(intern).toHaveProperty('name', 'Kyle');
            expect(intern).toHaveProperty('id', 2);
            expect(intern).toHaveProperty('email', 'kyle@kbar.io');
            expect(intern).toHaveProperty('school', 'St. John\'s');
        })
    });
    describe('getName', () => {
        it('Should return the value of the name property of an instance of the Intern class', () => {
            // arrange
            const intern = new Intern('Kyle', 2, 'kyle@kbar.io', 'St. John\'s');
            // assert
            expect(intern.getName()).toBe('Kyle');
            expect(intern.getName()).not.toBe('gary');
        });
    });
    describe('getId', () => {
        it('Should return the value of the id property of the instance of the class Intern', () => {
            // arrange
            const intern = new Intern('Kyle', 2, 'kyle@kbar.io', 'St. John\'s');
            // assert
            expect(intern.getId()).toBe(2);
            expect(intern.getId()).not.toBe(5);
        });
    });
    describe('getEmail', () => {
        it('Should get the value of the email property of the instance of the Intern class', () => {
            // arrange
            const intern = new Intern('Kyle', 2, 'kyle@kbar.io', 'St. John\'s');
            // assert
            expect(intern.getEmail()).toBe('kyle@kbar.io');
            expect(intern.getEmail()).not.toBe('kylebario1@gmail.com');
        });
    });
    describe('getSchool', () => {
        it('Should get the value of the email property of the instance of the Intern class', () => {
            // arrange
            const intern = new Intern('Kyle', 2, 'kyle@kbar.io', 'St. John\'s');
            // assert
            expect(intern.getSchool()).toBe('St. John\'s');
            expect(intern.getSchool()).not.toBe('Curtin');
        });
    });
});
