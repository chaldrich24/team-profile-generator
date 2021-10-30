class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return `The employee's name is ${this.name}.`;
    }

    getId() {
        return `Employee ID: ${this.id}`;
    }

    getEmail() {
        return `Employee email is ${this.email}.`;
    }

    getRole() {
        return `${this.constructor.name}`;
    }
}

module.exports = Employee;