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
    createHTML() {
        return `<article class="card">
    <div class="card-header manager-header">
        <h1 class="text-3xl">${this.name}</h1>
        <h2 class="text-xl">&#9749; Manager</h2>
    </div>
    <div class="card-body">
        <div class="card-info manager-info">
            <div class="card-info-section">
                <p class="card-info-section-header">ID</p>
                <p>${this.id}</p>
            </div>
            <div class="card-info-section border-y border-y-slate-600">
                <p class="card-info-section-header">Email</p>
                <a href="mailto:${this.email}">${this.email}</a>
            </div>
            <div class="card-info-section">
                <p class="card-info-section-header">Office Number</p>
                <p>${this.officeNumber}</p>
            </div>
        </div>
    </div>
</article>`
    }
}

module.exports = Manager;