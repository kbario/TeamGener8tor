const Employee = require('../lib/Employee')

describe('Employee', () => {
    describe('Initialisation', () => {
        // positive test
        it('should create an instance of Employee, with ', () => {
            // arrange
            const employee = new Employee();

            // act
            const email = employee.getEmail()

            // assert
            expect(employee).toHaveProperty('name');
            expect(employee).toHaveProperty('id');
            expect(employee).toHaveProperty('email');
            expect(email).toBeUndefined()
        })
    })
})