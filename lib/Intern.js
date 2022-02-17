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
    createHTML() {
        return `<article class="card">
        <div class="card-header intern-header">
            <h1 class="text-3xl">${this.name}</h1>
            <h2 class="text-xl">&#129489; Intern</h2>
        </div>
        <div class="card-body">
            <div class="card-info intern-info">
                <div class="card-info-section">
                    <p class="card-info-section-header">ID</p>
                    <p>${this.id}</p>
                </div>
                <a href="mailto:${this.email}" class="card-info-section border-y border-y-slate-600 intern-info-section">
                    <p class="card-info-section-header">Email</p>
                    <p>${this.email}</p>
                </a>
                <div class="card-info-section">
                    <p class="card-info-section-header">School</p>
                    <p>${this.school}</p>
                </div>
            </div>
        </div>
    </article>`
    }
}

module.exports = Intern;