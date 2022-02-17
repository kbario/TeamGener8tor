const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

//  function that removes last object if role = no. finalise team.
function removeNoFinaliseTeamObj(answers) {
    return answers.filter(obj => {
        if (Object.keys(obj).includes('role')){
            return obj.role !== "No. Finalise Team."
        } else {
            return obj
        };
    }); 
};

// function that adds the role propertie to the manager object
function addManagerRole(answers){
    return answers.map((obj) => {
        if (!Object.keys(obj).includes('role')){
            const obj1 = Object.assign({role: 'Manager'}, obj)
            return obj1
        } else { return obj };
    });
};

// make a function that uses the previous and puts the info into preset objects
function translateDataToObj(answers){
    const filteredAnswers = removeNoFinaliseTeamObj(answers)
    const mappedAnswers = addManagerRole(filteredAnswers)
    const myObjs = mappedAnswers.map((obj) => {
        const keys = Object.keys(obj)
        if (!keys.includes('role')){
            throw new Error('Object to does not contain a role property');
        } else if (obj['role'] === 'Manager') {
            const objNew = new Manager(obj['name'], obj['id'], obj['email'], obj['officeNumber']);
            return objNew
        } else if (obj['role'] === 'Engineer') {
            const objNew = new Engineer(obj['name'], obj['id'], obj['email'], obj['github']);
            return objNew
        } else if (obj['role'] === 'Intern') {
            const objNew =  new Intern(obj['name'], obj['id'], obj['email'], obj['school']);
            return objNew
        }
    });
    return myObjs
};

module.exports = {
    removeNoFinaliseTeamObj,
    addManagerRole,
    translateDataToObj,
}