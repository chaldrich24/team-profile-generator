const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is your team manager's name?"
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is your team manager's ID?"
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is your team manager's email?"
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
    ]);
}

const addEmployees = (data, action) => {
    if (!data.employees) {
        data.employees = [];
    }

    if (action === 'Finish building team') {
        return data;
    }

    else if(action === 'Add an engineer') {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "What is your engineer's name?"
            },
            {
                type: 'input',
                name: 'engineerId',
                message: "What is your engineer's ID?"
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "What is your engineer's email?"
            },
            {
                type: 'input',
                name: 'github',
                message: "What is your engineer's github?"
            },
            {
                type: 'list',
                name: 'action',
                message: 'What would you like to do next?',
                choices: ['Add an engineer', 'Add an intern', 'Finish building team']
            }
        ])
        .then(employeeData => {
            data.employees.push(employeeData);
            if (employeeData.action === 'Finish building team') {
                return data;
            }
            else {
                return addEmployees(data, employeeData.action);
            }
        });
    }

    else {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: "What is your intern's name?"
            },
            {
                type: 'input',
                name: 'internId',
                message: "What is your intern's ID?"
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "What is your intern's email?"
            },
            {
                type: 'input',
                name: 'github',
                message: "What is your intern's school?"
            },
            {
                type: 'list',
                name: 'action',
                message: 'What would you like to do next?',
                choices: ['Add an engineer', 'Add an intern', 'Finish building team']
            }
        ])
        .then(employeeData => {
            data.employees.push(employeeData);
            if (employeeData.action === 'Finish building team') {
                return data;
            }
            else {
                return addEmployees(data, employeeData.action);
            }
        });
    }
}

promptUser()
    .then(data => addEmployees(data, data.action))
    .then(data => console.log(data));