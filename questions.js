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
        type: 'number', name: 'salary'
    }
]