const inquirer = require('inquirer');
const { MainMenuQuestions, AddDepartmentQuestions, AddRoleQuestions, AddEmployeeQuestions, UpdateEmployeeRoleQuestions } = require('./questions')
const EmployeeDatabase = require('./db/EmployeeDatabase');

// create a new instance of the EmployeeDatabase class -jsn
const db = new EmployeeDatabase({
    host: 'localhost',
    user: 'root',
    password: 'Password123',
    database: 'employee_db'
});

//connect to the database -jsn
db.connect();

const doMenuQuestions = () => {

    inquirer
    .prompt(MainMenuQuestions)
    .then((response) => {
        // can use if/else statements instead of switch/case/break
        switch (response.option) {
          case 'view_departments':
            view_departments();
            break;
          case 'view_roles':
            view_roles();
            break;
          case 'view_employees':
            view_employees();
            break;
          case 'add_department':
            add_department();
            break;
          case 'add_role':
            add_role();
            break;
          case 'add_employee':
            add_employee();
            break;
          case 'update_role':
            update_role();
            break;
    }})
}

const view_departments = () => {

    //get the departments from the database-jsn
    db.getDepartments().then((results) => {

        //show the results in console-jsn
        console.table(results);

        //show the main menu again-jsn
        doMenuQuestions();
    });
}

const view_roles = () => {

    //get the departments from the database - jsn
    db.getRoles().then((results) => {

        //show the results in the console-jsn
        console.table(results);

        //show the main menu again-jsn
        doMenuQuestions();
    });
}

const view_employees = () => {

    //get the departments from the database-jsn
    db.getEmployees().then((results) => {

        //show the results in console-jsn
        console.table(results);

        //show the main menu again-jsn
        doMenuQuestions();
    });
}

const add_department = () => {
    inquirer
    .prompt(AddDepartmentQuestions)
    .then((response) => {
        db.addDepartment(response).then((results) => {
            console.log('\n', results, '\n');
            doMenuQuestions();
        });
    })
}

const add_role = () => {

    //get
}