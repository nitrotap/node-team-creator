/*
 * 
*/
const inquirer = require('inquirer');

const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")



// first build team manager
// then build other employees
// exit when 


const employeeQuestions = [
    // name, id, email, school, github, officeNumber
    {
        type: "list",
        name: "employeeRole",
        message: "What is the employee's role? (Required)",
        choices: ["Manager", "Engineer", "Intern", "Done adding team members"],
    },
    {
        type: "input",
        name: "employeeName",
        message: "What is the employee's name? (Required)",
        validate: (userInput) => {
            if (userInput) {
                return true;
            } else {
                console.log("Please enter the employee's name.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "employeeId",
        message: "What is the employee's Id? (Required)",
        validate: (userInput) => {
            if (userInput) {
                return true
            } else {
                return false;
            }
        }
    },
    {
        type: "input",
        name: "employeeEmail",
        message: "What is the employee's email address? (Required)",
        validate: (userInput) => {
            if (userInput) {
                return true
            } else {
                return false;
            }
        }
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number? (Required)",
        when: ({ employeeRole }) => {
            if (employeeRole === "Manager") {
                return true
            } else {
                return false
            }
        },
        validate: (userInput) => {
            if (userInput) {
                return true
            } else {
                return false;
            }
        }
    },
    {
        type: "input",
        name: "gitHub",
        message: "What is the link to the engineer's github profile? (Required)",
        when: ({ employeeRole }) => {
            if (employeeRole === "Engineer") {
                return true
            } else {
                return false
            }
        },
        validate: (userInput) => {
            if (userInput) {
                return true
            } else {
                return false;
            }
        }

    },
    {
        type: "input",
        name: "school",
        message: "What is the current school the intern is attending? (Required)",
        when: ({ employeeRole }) => {
            if (employeeRole === "Intern") {
                return true
            } else {
                return false
            }
        },
        validate: (userInput) => {
            if (userInput) {
                return true
            } else {
                return false;
            }
        }
    }

]

let answerArray = []

// 
async function questions() {
    let count = await inquirer.prompt([{
        type: "number",
        name: "employeeCount",
        message: "How many employees are you going to enter?",
        default: 3
    }])
    console.log(count.employeeCount)
    for (let i = 0; i < count.employeeCount; i++) {
        let response = await inquirer.prompt(employeeQuestions)
        answerArray.push(response)
    }
    // console.log(response)
    // answerArray.push(response)
    // var response = await inquirer.prompt(employeeQuestions)
    // answerArray.push(response)

    console.log(answerArray)
    console.log(answerArray.length)

    for (employee in answerArray) {

    }

}

// need a promise chain that ends with the html file being generated
questions()

