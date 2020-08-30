const initQuestions = [
  {
    type: "list",
    message: "What would you like to do?",
    name: "manageChoice",
    choices: ["View all employees by department", "View all employees by manager", "Add employee",
      "Remove employee", "Update employee role", "Update employee manager", "View all roles",
      "Add role", "Remove role", "Quit"]
  }
]

let addEmpQuestions = [
  {
    type: "input",
    message: "What is the first name of the employee to add?",
    name: "firstName"
  },  
  {
    type: "input",
    message: "What is the last name of the employee to add?",
    name: "lastName"
  },
  {
    type: "list",
    message: "What is the role of the employee?",
    name: "role",
    choices: []
  },
  {
    type: "list",
    message: "What is the department of the employee?",
    name: "department",
    choices: []
  },
  {
    type: "input",
    message: "What is the salary of the employee?",
    name: "salary"
  },
  {
    type: "confirm",
    message: "Does the employee have a manager?",
    name: "managerConfirm"
  },
  {
    type: "list",
    message: "What is the name of the manager?",
    name: "managerName",
    choices: [],
    when: (answers) => answers.managerConfirm
  }
]

let getEmployeeName = [
  // {
  //   type: "list",
  //   message: "Would you like to choose employee names from a list, or enter a name?",
  //   choices: ["Choose employees from a list of names.", "Enter the name of an employee."]
  // },
  {
    type: "input",
    message: "What is the employee's first name?"
  }
]


let updateQuestions = [
  {
    type: "list",
    message: "Which "
  }
]

module.exports = {
  initQuestions,
  addEmpQuestions,
  updateQuestions
}