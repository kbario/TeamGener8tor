const answers = [
    { name: 'kyle', id: '6', email: 'kyle@kbar.io', officeNumber: '9' },
    {
      role: 'Engineer',
      name: 'jeff',
      id: '8',
      email: 'jeff@legend.com',
      github: 'jtwissle'
    },
    {
      role: 'Intern',
      name: 'gary',
      id: '3',
      email: 'gary@bullshit.school.edu.au',
      school: 'BullShit'
    },
    { role: 'No. Finalise Team.' }
  ];

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
            obj.role = 'Manager'
            return obj
        } else { return obj };
    });
};


const filteredAnswers = removeNoFinaliseTeamObj(answers)
const mappedAnswers = addManagerRole(filteredAnswers)

console.log(mappedAnswers)