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

    //get the departments from the database, this is for the choices list when adding the new role -jsn
    db.getDepartments().then((results) => {

        const departmentQuestion = AddRoleQuestions[2];
        results.forEach((department) => {
            departmentQuestion.choices.push({
                value: department.id,
                name: department.name
            });
        });

        inquirer
        .prompt(AddRoleQuestions)
        .then((response) => {
            db.addRole(response).then((results) => {
                console.log('\n', results, '\n');
                doMenuQuestions();
            });
        })
    });
}

const add_employee = () => {
    data.query('SELECT * FROM roles').then(([results]) => {
      const roleChoices = results.map((role) => ({
        value: role.id,
        name: role.title,
      }));
  
      data.query('SELECT * FROM employees').then(([results]) => {
        const managerChoices = results.map((employee) => ({
          value: employee.id,
          name: `${employee.first_name} ${employee.last_name}`,
        }));
  
        managerChoices.unshift({ value: null, name: 'None' });
  
        inquirer
          .createPromptModule([
            {
              type: 'input',
              name: 'first_name',
              message: 'Enter the first name of the employee:',
            },
            {
              type: 'input',
              name: 'last_name',
              message: 'Enter the last name of the employee:',
            },
            {
              type: 'list',
              name: 'role_id',
              message: 'Enter the role of the employee:',
              choices: roleChoices,
            },
            {
              type: 'list',
              name: 'manager_id',
              message: 'Enter the manager of the employee:',
              choices: managerChoices,
            },
          ])
          .then((response) => {
            data
              .query(
                'INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
                [response.first_name, response.last_name, response.role_id, response.manager_id]
              )
              .then(([results]) => {
                console.log('\n', results, '\n');
                MainMenuQuestions();
              });
          });
      });
    });
  };
  
  const update_role = () => {
    data.query('SELECT * FROM employees').then(([results]) => {
      const employeeChoices = results.map((employee) => ({
        value: employee.id,
        name: `${employee.first_name} ${employee.last_name}`,
      }));
  
      data.query('SELECT * FROM roles').then(([results]) => {
        const roleChoices = results.map((role) => ({
          value: role.id,
          name: role.title,
        }));
  
        inquirer
          .createPromptModule([
            {
              type: 'list',
              name: 'employee_id',
              message: 'Select which employee to update below:',
              choices: employeeChoices,
            },
            {
              type: 'list',
              name: 'role_id',
              message: 'Select the employee\'s new role below:',
              choices: roleChoices,
            },
          ])
          .then((response) => {
            data
              .query('UPDATE employees SET role_id = ? WHERE id = ?', [response.role_id, response.employee_id])
              .then(([results]) => {
                console.log('\n', results, '\n');
                doMenuQuestions();
              });
          });
      });
    });
  };
  
  doMenuQuestions();