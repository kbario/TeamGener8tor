const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    };

    getOfficeNumber() {
        return this.officeNumber
    };
    getRole() {
        return "Manager"
    };
    getRoleLc(){
        return "manager"
    }
    createHTML() {
        return `<div class="card-info-section">
        <p class="card-info-section-header">School</p>
        <p>${this.getOfficeNumber()}</p>
    </div>`
    }
}

module.exports = Manager;

