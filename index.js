/*
 * 
*/
const inquirer = require('inquirer');

const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")

const { generatePage, generateCard } = require("./src/generateHTML.js")
const { writeFile } = require("./utils/fileWriter.js")


// first build team manager
// then build other employees
// exit when 

// use inquirer to set up employee objects
// add employee objects into html
// write html file with fs

const employeeQuestions = [
    // name, id, email, school, github, officeNumber
    {
        type: "list",
        name: "role",
        message: "What is the employee's role? (Required)",
        choices: ["Manager", "Engineer", "Intern"],
    },
    {
        type: "input",
        name: "name",
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
        name: "id",
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
        name: "email",
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
        when: ({ role }) => {
            if (role === "Manager") {
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
        message: "What is the the engineer's github username? (Required)",
        when: ({ role }) => {
            if (role === "Engineer") {
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
        when: ({ role }) => {
            if (role === "Intern") {
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
let employeeArray = []

async function questions() {
    console.log("Welcome to node-team-creator!")
    let teamName = await inquirer.prompt({
        type: "input",
        name: "teamName",
        message: "What is your team's name?",
        // default: "the BEST team",
        validate: (userInput) => {
            if (userInput) {
                return true
            } else {
                return false;
            }
        }
    })

    let confirm = true;
    while (confirm) {
        let response = await inquirer.prompt(employeeQuestions)
        answerArray.push(response)
        confirm = await inquirer.prompt({
            type: "confirm",
            name: "confirmContinue",
            message: "Do you want to continue adding employees?"
        })
        if (!confirm.confirmContinue) {
            confirm = false;
        }
    }
    let cardHTML = []

    for (let i in answerArray) {
        switch (answerArray[i].role) {
            case "Manager":
                let manager = new Manager(answerArray[i].name,
                    answerArray[i].id,
                    answerArray[i].email,
                    answerArray[i].officeNumber)
                employeeArray.push(manager)

                cardHTML.push(generateCard(manager))

                break;

            case "Engineer":
                let engineer = new Engineer(answerArray[i].name,
                    answerArray[i].id,
                    answerArray[i].email,
                    answerArray[i].gitHub)
                employeeArray.push(engineer)

                cardHTML.push(generateCard(engineer))

                break;

            case "Intern":
                let intern = new Intern(answerArray[i].name,
                    answerArray[i].id,
                    answerArray[i].email,
                    answerArray[i].school)
                employeeArray.push(intern)

                cardHTML.push(generateCard(intern))

                break;

            default:

                let employee = new Employee(answerArray[i].name,
                    answerArray[i].id,
                    answerArray[i].email)
                employeeArray.push(employee)

                cardHTML.push(generateCard(employee))

                break;
        }
    }


    let pageHTML = generatePage(cardHTML.join(""), teamName.teamName)
    writeFile(pageHTML)

}

// need a promise chain that ends with the html file being generated
questions()

