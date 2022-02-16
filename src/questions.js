const { capitalise, validateEmail } = require('./teamGenHelper');

const initial = {
    type: 'list',
    name: 'role',
    message: 'Would you like to add an employee?',
    choices: ['Engineer', 'Intern', 'No. Finalise Team.'],
}

const questions = [
    { 
        type: 'input',
        name: 'name', 
        message(answers) {
            if (answers.role){
                return `\x1B[1;32m${answers.role} Information.\x1B[0m What is their:\n\x1B[0;32m?\x1B[0m Name?`
            } else {
                return '\x1B[1;32mManager Information.\x1B[0m What is their:\n\x1B[0;32m?\x1B[0m Name?'
            }
        },
        when(answers){
            if (answers.role){
                return answers.role !== "No. Finalise Team."
            } else {return true}
        }, 
        // validate(answers) {
        //     const letterRegex = /\d/
        //     if (letterRegex.test(answers.name)){
        //         return 'Only letters are accepted.'
        //     } else { return true}
        // },
        // filter(answers){
        //     return answers.name.capitalise().trim()
        // }
    }, {
        type: 'input',
        name: 'id',
        message: 'ID?',
        when(answers){
            if (answers.role){
                return answers.role !== "No. Finalise Team."
            } else {return true}
        },
        // validate(answers) {
        //     const numbersRegex = /^\d+$/
        //     if (!numbersRegex.test(answers.id)){
        //         return 'Only numbers are accepted.'
        //     } 
        //     return true
        // },
        // filter(answers){
        //     return parseInt(answers.officeNumber.trim())
        // }
    }, {
        type: 'input',
        name: 'email',
        message: 'Email?',
        when(answers){
            if (answers.role){
                return answers.role !== "No. Finalise Team."
            } else {return true}
        }, 
        // validate(answers) {
        //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        //     if(!emailRegex.test(answers.email)){
        //         return 'Not a valid email.'
        //     } else {return true}
        // },
        // filter(answers){
        //     return answers.email.trim()
        // }
    }, {
        type: 'input',
        name: 'officeNumber',
        message: 'Office Number?',
        when(answers){
            return !answers.role
        },
        // validate(answers) {
        //     const numbersRegex = /^\d+$/
        //     if (!numbersRegex.test(answers.officeNumber)){
        //         return 'Only numbers are accepted.'
        //     } 
        //     return true
        // },
        // filter(answers){
        //     return parseInt(answers.officeNumber.trim())
        // }
    }, {
        type: 'input',
        name: 'github', 
        message: 'GitHub Username?',
        when(answers) {
            if (answers.role){
                return answers.role === "Engineer"
            }
        },
        // validate(answers) {
        //     const letterRegex = /^[a-zA-Z]+$/
        //     if (!letterRegex.test(answers.github)){
        //         return 'Only letters are accepted.'
        //     }
        //     return true
        // },
        // filter(answers){
        //     return answers.github.trim()
        // }
    }, {
        type: 'input', 
        name: 'school', 
        message: 'School?',
        when(answers) {
            if (answers.role){
                return answers.role === 'Intern'
            }
        },
        // validate(answers) {
        //     const letterRegex = /^[a-zA-Z]+$/
        //     if (!letterRegex.test(answers.school)){
        //         return 'Only letters are accepted.'
        //     }
        //     return true
        // },
        // filter(answers){
        //     return answers.name.capitalise().trim()
        // }
    }
];

module.exports = {
    initial,
    questions,
};