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
            <h2 class="text-xl"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg> Intern</h2>
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