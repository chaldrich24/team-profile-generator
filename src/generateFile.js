const generateEmployees = (employees) => {
    if (employees.length === 0) {
        return '';
    }

    for (i=0; i < employees.length; i++) {
        const emp = employees[i];

        if (emp.getRole() === 'Engineer') {
            return `
            <div class="card mx-2 mt-2" style="width: 18rem;">
                <div class="card-body">
                    <h2 class="card-title">${emp.name}</h5>
                        <h3 class="card-subtitle mb-2 text-muted">${emp.getRole()}</h6>
                            <p class="card-text">${emp.getId()}</p>
                            <p class="card-text">Email: 
                                <span>
                                    <a href='mailto:${emp.email}'>
                                        ${emp.email}
                                    </a>
                                </span>
                            </p>
                            <p class="card-text">Github: 
                                <span>
                                    <a href='https://github.com/${emp.github}' target='_blank'>
                                        ${emp.github}
                                    </a>
                                </span>
                            </p>
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                </div>
            </div>
            `
        }
        else if (emp.getRole() === 'Intern') {
            return `
            <div class="card mx-2 mt-2" style="width: 18rem;">
                <div class="card-body">
                    <h2 class="card-title">${emp.name}</h5>
                        <h3 class="card-subtitle mb-2 text-muted">${emp.getRole()}</h6>
                            <p class="card-text">${emp.getId()}</p>
                            <p class="card-text">Email: 
                                <span>
                                    <a href='mailto:${emp.email}'>
                                        ${emp.email}
                                    </a>
                                </span>
                            </p>
                            <p class="card-text">School: ${emp.school}</p>
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                </div>
            </div>
            `
        }
    }
}


const page = (manager, engineers, interns) => {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link href='./style.css' rel='stylesheet'>
    </head>

    <body>
        <header class='bg-info'>
            <h1 class='text-white'>My Team</h1>
        </header>

        <section class='d-flex justify-content-center flex-wrap emp-container'>
            <div class="card mx-2 mt-2" style="width: 18rem;">
                <div class="card-body">
                    <h2 class="card-title">${manager.name}</h5>
                        <h3 class="card-subtitle mb-2 text-muted">${manager.getRole()}</h6>
                            <p class="card-text">${manager.getId()}</p>
                            <p class="card-text">Email: 
                                <span>
                                    <a href='mailto:${manager.email}'>
                                        ${manager.email}
                                    </a>
                                </span>
                            </p>
                            <p class="card-text">Office Number: ${manager.officeNumber}</p>
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                </div>
            </div>
            ${generateEmployees(engineers)}
            ${generateEmployees(interns)}
        </section>
    </body>

    </html>
    `
}

module.exports = page;