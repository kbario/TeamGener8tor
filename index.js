// require all needed packages
    // inquirer
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
    // custom processing functions
const { translateDataToObj } = require('./src/infoProcess') 
    // custom helper
// const { capitalise, validateEmail } = require('./src/teamGenHelper')

// import questions from questions src file
const { questions, initial } = require('./src/questions')

// create var to store recursive values
const output = [];

// create function that asks dynamic questions
function asks(question){
    inquirer.prompt(question)
    .then((answers) => {
        output.push(answers);
        if(answers.role){
            if(answers.role === "No. Finalise Team."){     
                const myObjs = translateDataToObj(output)
                
                return 
            } else {
                questions.unshift(initial)
                asks(questions);
            };
        } else {
            questions.unshift(initial)
            asks(questions);
        };
    });
};

// run said function
asks(questions)


const obj4 = new Manager('asdf', 'asdf', 'asdf', 'asdf')

