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
        choices: ["Manager", "Engineer", "Intern", "Done adding team members"],
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
        message: "What is the link to the engineer's github profile? (Required)",
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

    let cardHTML = []

    for (i in answerArray) {
        console.log(answerArray[i])
        switch (answerArray[i].role) {
            case "Manager":
                cardHTML.push(generateCard(answerArray[i]))
                // generatePage()



                // let manager = new Manager(answerArray[i].employeeName,
                //     answerArray[i].employeeId,
                //     answerArray[i].employeeEmail,
                //     answerArray[i].officeNumber)
                // employeeArray.push(manager)
                break;

            case "Engineer":
                cardHTML.push(generateCard(answerArray[i]))


                break;

            case "Intern":
                cardHTML.push(generateCard(answerArray[i]))

                break;

            default:
                cardHTML.push(generateCard(answerArray[i]))


                break;
        }
        // console.log(cardHTML)

    }

    console.log(cardHTML)
    let pageHTML = generatePage(cardHTML.join(""), "My Team Name")
    writeFile(pageHTML)


}

// need a promise chain that ends with the html file being generated
questions()

