const fs = require('fs');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const { translateDataToObj } = require('./infoProcess') 

  const objects = translateDataToObj(answers)
console.log(objects)
// function that takes an obj and dynamically inputs info into html element
function createHtmlCard(){

}

function createHtmlContent() {
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>TeamGener8tor</title>
    
        <meta name="description" content="the rendered html page from the cli application TeamGener8tor created by kbario">
    
        <!-- custom css -->
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <header>
            
        </header>
    </body>
    </html>`
}



// function that writes the html file
fs.writeFile('./.html', htmlContent, (error) => { /* handle error */ });


