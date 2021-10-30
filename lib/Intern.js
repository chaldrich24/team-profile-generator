const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
    }

    getSchool() {
        return `Employee school is ${this.school}.`;
    }
}

module.exports = Intern;