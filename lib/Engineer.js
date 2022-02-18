const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    };

    getGithub() {
        return this.github
    };
    getRole() {
        return "Engineer"
    };
    getRoleLc(){
        return "engineer"
    }
    createHTML() {
        return `<a href="https://github.com/${this.getGithub()}" class="card-info-section engineer-info-section">
        <p class="card-info-section-header">Github</p>
        <p>${this.getGithub()}</p>
    </a>`
    }
}

module.exports = Engineer;
