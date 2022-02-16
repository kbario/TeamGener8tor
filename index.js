// require all needed packages
    // inquirer
const inquirer = require('inquirer');
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
                console.log(myObjs)
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
