const MainMenuQuestions = [
    {
        type: 'list',
        name: 'option',
        message: 'What would you like to do?',
        choices: [
            { value: 'view_departments', name: 'View all departments' },
            { value: 'view_employees', name: 'View all employees' },
            { value: 'view_roles', name: 'View all roles' },
            { value: 'add_department', name: 'Add a department' },
            { value: 'add_role', name: 'Add a role' },
            { value: 'add_employee', name: 'Add an employee' },
            { value: 'update_role', name: 'Update an employee role' },
        ],
    },
]

const AddDepartmentQuestions = [
    {
        type: 'input',
        name: 'department_name',
        message: 'What is the name of the new department?'
    },
]

const AddRoleQuestions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the new role?'
    },
    {
        type: 'number', name: 'salary', message: 'What is salary of new role? Please only enter numberic answers',
        validate: function (value) {
            const valid = !isNaN(parseInt(value));
            return valid || "please only enter numberic answers";
        }
    },
    {
        type: 'list',
        name: 'department_id',
        message: 'Please choose a department for this role',
        choices: [],
    },
]

const AddEmployeeQuestions = [
    {
        type: 'input',
        name: 'first_name',
        message: 'Please enter the new employee\'s first name'
    },
    {
        type: 'input',
        name: 'last_name',
        message: 'Please enter the new employee\'s surname',
    },
    {
        type: 'list',
        name: 'role_id',
        message: 'What is the new employee\'s role?',
        choices: [],
    },
    {
        type: 'list',
        name: 'manager_id',
        message: 'Please choose the new employee\'s manager',
        choices: [],
    },
]

const UpdateEmployeeRoleQuestions = [
    {
        type: 'list',
        name: 'employee_id',
        message: 'please choose an employee to update',
        choices: [],
    },
    {
        type: 'list',
        name: 'role_id',
        message: 'please choose emplyee\'s new role',
        choices: [],
    },
]

module.exports = { MainMenuQuestions, AddDepartmentQuestions, AddRoleQuestions, AddEmployeeQuestions, UpdateEmployeeRoleQuestions }