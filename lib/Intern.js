const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    };

    getSchool() {
        return this.school
    };
    getRole() {
        return "Intern"
    };
    getRoleLc(){
        return "intern"
    }
    createHTML() {
        return `<div class="card-info-section">
        <p class="card-info-section-header">School</p>
        <p>${this.getSchool()}</p>
    </div>`
    }
}

module.exports = Intern;