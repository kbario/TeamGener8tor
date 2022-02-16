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
        validate(answers) {
            if (!/^[a-zA-Z]+$/.test(answers.name)){
                return true
            } else { return 'Only letters are accepted.'}
        },
        when(answers){
            if (answers.role){
                return answers.role !== "No. Finalise Team."
            } else {return true}
        }, 
        // filter(answers){
        //     return answers.name.capitalise().trim()
        // }
    }, {
        type: 'input',
        name: 'id',
        message: 'ID?',
        validate(answers) {
            if (!/^\d+$/.test(answers.id)){
                return 'Only numbers are accepted.'
            } else { return true }
        },
        when(answers){
            if (answers.role){
                return answers.role !== "No. Finalise Team."
            } else {return true}
        },
        // filter(answers){
        //     return parseInt(answers.officeNumber.trim())
        // }
    }, {
        type: 'input',
        name: 'email',
        message: 'Email?',
        validate(answers) {
            if(!validateEmail(answers.email)){
                return 'Not a valid email.'
            } else {return true}
        },
        when(answers){
            if (answers.role){
                return answers.role !== "No. Finalise Team."
            } else {return true}
        }, 
        // filter(answers){
        //     return answers.email.trim()
        // }
    }, {
        type: 'input',
        name: 'officeNumber',
        message: 'Office Number?',
        validate(answers) {
            if (!/^\d+$/.test(answers.officeNumber)){
                return 'Only numbers are accepted.'
            } else { return true }
        },
        when(answers){
            return !answers.role
        },
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
        validate(answers) {
            if (!/[^a-zA-Z]/.test(answers.name)){
                return 'Only letters are accepted.'
            } else { return true }
        },
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
        validate(answers) {
            if (/[^a-zA-Z]/.test(answers.name)){
                return 'Only letters are accepted.'
            } else { return true }
        },
        // filter(answers){
        //     return answers.name.capitalise().trim()
        // }
    }
];

module.exports = {
    initial,
    questions,
};