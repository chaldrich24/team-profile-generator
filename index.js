const inquirer = require('inquirer');
const fs = require('fs');
const generateFile = require('./src/generateFile')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

class Profile {
    constructor() {
        this.manager;
        this.engineers = [];
        this.interns = [];
    }

    promptUser() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "What is your team manager's name?",
                validate: name => {
                    if (name) {
                        return true;
                    }
                    else {
                        console.log('Please enter a name!')
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerId',
                message: "What is your team manager's ID?",
                validate: id => {
                    if (id) {
                        return true;
                    }
                    else {
                        console.log('Please enter a valid number ID!')
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "What is your team manager's email?",
                validate: email => {
                    if (email) {
                        return true;
                    }
                    else {
                        console.log('Please enter an email!')
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerOffice',
                message: "What is your team manager's office number?"
            },
            {
                type: 'list',
                name: 'action',
                message: 'What would you like to do next?',
                choices: ['Add an engineer', 'Add an intern', 'Finish building team']
            }
        ])
        .then(({managerName, managerId, managerEmail, managerOffice, action}) => {
            this.manager = new Manager(managerName, managerId, managerEmail, managerOffice);
            this.addEmployees(action);
        })
    }

    addEmployees(action) {
        if (action === 'Finish building team') {
            this.generatePage();
        }
    
        else if(action === 'Add an engineer') {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'engineerName',
                    message: "What is your engineer's name?",
                    validate: name => {
                        if (name) {
                            return true;
                        }
                        else {
                            console.log('Please enter a name!')
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'engineerId',
                    message: "What is your engineer's ID?",
                    validate: id => {
                        if (id) {
                            return true;
                        }
                        else {
                            console.log('Please enter a valid ID!')
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'engineerEmail',
                    message: "What is your engineer's email?",
                    validate: email => {
                        if (email) {
                            return true;
                        }
                        else {
                            console.log('Please enter an email!')
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'github',
                    message: "What is your engineer's GitHub username?",
                    validate: github => {
                        if (github) {
                            return true;
                        }
                        else {
                            console.log('Please enter a github username!')
                            return false;
                        }
                    }
                },
                {
                    type: 'list',
                    name: 'action',
                    message: 'What would you like to do next?',
                    choices: ['Add an engineer', 'Add an intern', 'Finish building team']
                }
            ])
            .then(({engineerName, engineerId, engineerEmail, github, action}) => {
                this.engineers.push(new Engineer(engineerName, engineerId, engineerEmail, github));
                if (action === 'Finish building team') {
                    this.generatePage();
                }
                else {
                    this.addEmployees(action);
                }
            });
        }
    
        else {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'internName',
                    message: "What is your intern's name?",
                    validate: name => {
                        if (name) {
                            return true;
                        }
                        else {
                            console.log('Please enter a name!')
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'internId',
                    message: "What is your intern's ID?",
                    validate: id => {
                        if (id) {
                            return true;
                        }
                        else {
                            console.log('Please enter a valid ID!')
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'internEmail',
                    message: "What is your intern's email?",
                    validate: email => {
                        if (email) {
                            return true;
                        }
                        else {
                            console.log('Please enter an email!')
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'school',
                    message: "What is your intern's school?",
                    validate: school => {
                        if (school) {
                            return true;
                        }
                        else {
                            console.log('Please enter a school!')
                            return false;
                        }
                    }
                },
                {
                    type: 'list',
                    name: 'action',
                    message: 'What would you like to do next?',
                    choices: ['Add an engineer', 'Add an intern', 'Finish building team']
                }
            ])
            .then(({internName, internId, internEmail, school, action}) => {
                this.interns.push(new Intern(internName, internId, internEmail, school));
                if (action === 'Finish building team') {
                    this.generatePage();
                }
                else {
                    this.addEmployees(action);
                }
            });
        }
    }
    generatePage() {
        const page = generateFile(this.manager, this.engineers, this.interns);
        fs.writeFile('./dist/index.html', page, err => {
            if (err) {
                throw err;
            }
            else {
                console.log('File created!');
            }
        });
        fs.copyFile('./src/style.css','./dist/style.css',err => {
            if (err) {
                throw err;
            }
        });
    }
}

new Profile().promptUser();