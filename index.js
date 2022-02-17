// require all needed packages
    // inquirer
const inquirer = require('inquirer'); // a npm package that allows interaction with and survey of users and returns objects containing data
const { translateDataToObj } = require('./src/infoProcess') // custom function that translates the data retrieved from inquirer to instances of custom classes
const { writeHtml } = require('./src/createHTML') // custom functions that take instances of custom classes, formats them and saves them in a html file
// const { capitalise, validateEmail } = require('./src/teamGenHelper') // custom functions

// import questions from questions src file
const { questions, initial } = require('./src/questions')

// create const to store recursive values
const output = [];

// create function that asks dynamic questions
function asks(question){
    inquirer.prompt(question)
    .then((answers) => {
        output.push(answers);
        if(answers.role){
            if(answers.role === "No. Finalise Team."){     
                const myObjs = translateDataToObj(output)
                writeHtml(myObjs)
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