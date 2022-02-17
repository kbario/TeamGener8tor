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
        <h2 class="text-xl"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg> Manager</h2>
    </div>
    <div class="card-body">
        <div class="card-info manager-info">
            <div class="card-info-section">
                <p class="card-info-section-header">ID</p>
                <p>${this.id}</p>
            </div>
            <a href="mailto:${this.email}" class="card-info-section border-y border-y-slate-600 manager-info-section">
                <p class="card-info-section-header">Email</p>
                <p>${this.email}</p>
            </a>
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

