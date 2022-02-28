/*
 * main js file for node-team-generator
*/
const inquirer = require('inquirer');

// const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")

const { generatePage, generateCard } = require("./src/generateHTML.js")
const { writeFile } = require("./utils/fileWriter.js")

const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the engineer's name? (Required)",
        validate: (userInput) => {
            if (userInput) {
                return true;
            } else {
                console.log("Please enter the engineer's name.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is the engineer's Id? (Required)",
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
        message: "What is the engineer's email address? (Required)",
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
        validate: (userInput) => {
            if (userInput) {
                return true
            } else {
                return false;
            }
        }
    }

]


const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the intern's name? (Required)",
        validate: (userInput) => {
            if (userInput) {
                return true;
            } else {
                console.log("Please enter the intern's name.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is the intern's Id? (Required)",
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
        message: "What is the intern's email address? (Required)",
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
        validate: (userInput) => {
            if (userInput) {
                return true
            } else {
                return false;
            }
        }
    }
]

let employeeArray = []
async function questions() {
    console.log("Welcome to node-team-creator! Use Ctrl+c to quit.")
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

    // first ask for team manager
    let teamManager = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the team manager's name? (Required)",
            validate: (userInput) => {
                if (userInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is the team manager's Id? (Required)",
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
            message: "What is the team manager's email address? (Required)",
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
            message: "What is the team manager's office number? (Required)",
            validate: (userInput) => {
                if (userInput) {
                    return true
                } else {
                    return false;
                }
            }
        }
    ])

    teamManager = new Manager(teamManager.name, teamManager.id, teamManager.email, teamManager.officeNumber)

    employeeArray.push(teamManager)

    let loop = true;
    while (loop) {
        // one prompt for which type of team member
        let askRole = await inquirer.prompt(
            {
                type: "list",
                name: "role",
                message: "What type of team member would you like to add? (Required)",
                choices: ["Engineer", "Intern", "Done adding team members"]
            }
        )
        console.log(askRole.role)

        // based on role, ask
        switch (askRole.role) {
            case "Engineer":
                let engineer = await inquirer.prompt(engineerQuestions)
                employeeArray.push(new Engineer(engineer.name, engineer.id, engineer.email, engineer.gitHub))
                break;

            case "Intern":
                let intern = await inquirer.prompt(internQuestions)
                employeeArray.push(new Intern(intern.name, intern.id, intern.email, intern.school))
                break;
            default:
                loop = false;
                break;
        }
    }

    let cardHTML = []

    employeeArray.forEach(employee => {
        cardHTML.push(generateCard(employee))
    })

    let pageHTML = generatePage(cardHTML.join(""), teamName.teamName)
    writeFile(pageHTML)

}


questions()
