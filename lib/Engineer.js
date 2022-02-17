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
    createHTML() {
        return `<article class="card">
        <div class="card-header engineer-header">
            <h1 class="text-3xl">${this.name}</h1>
            <h2 class="text-xl"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg> Engineer</h2>
        </div>
        <div class="card-body">
            <div class="card-info engineer-info">
                <div class="card-info-section">
                    <p class="card-info-section-header">ID</p>
                    <p>${this.id}</p>
                </div>
                <a href="mailto:${this.email}" class="card-info-section engineer-info-section border-y border-y-slate-600">
                    <p class="card-info-section-header">Email</p>
                    <p>${this.email}</p>
                </a>
                <a href="http://github.com/${this.github}" target="_blank" class="card-info-section engineer-info-section">
                    <p class="card-info-section-header">GitHub</p>
                    <p>${this.github}</p>
                </a>
            </div>
        </div>
    </article>`
    }
}

module.exports = Engineer;