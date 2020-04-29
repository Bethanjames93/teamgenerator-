const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamArray = []

function createManager() {
    inquirer.prompt([
        {
            type: "Input",
            name: "Name",
            message: "Enter managers name: "
        },
        {
            type: "Input",
            name: "Email",
            message: "Enter managers email: "
        },
        {
            type: "Input",
            name: "id",
            message: "Enter manager ID: "
        },
        {
            type: "Input",
            name: "OfficeNumber",
            message: "Enter managers office Number: "
        }
    ]).then(answers => {
        const manager = new Manager (answers.Name, answers.Email, answers.id, answers.OfficeNumber);
        teamArray.push(manager);
        addMembers();
    })
};

function createEngineer() {
    inquirer.prompt([
        {
            type: "Input",
            name: "Name",
            message: "Enter engineers name: "
        },
        {
            type: "Input",
            name: "Email",
            message: "Enter engineers email: "
        },
        {
            type: "Input",
            name: "id",
            message: "Enter engineer ID: "
        },
        {
            type: "Input",
            name: "Githubr",
            message: "Enter engineers Github username: "
        }
    ]).then(answers => {
        const engineer = new Engineer (answers.Name, answers.Email, answers.id, answers.Github);
        teamArray.push(engineer);
        addMembers();
    })
};

function createIntern() {
    inquirer.prompt([
        {
            type: "Input",
            name: "Name",
            message: "Enter interns name: "
        },
        {
            type: "Input",
            name: "Email",
            message: "Enter interns email: "
        },
        {
            type: "Input",
            name: "id",
            message: "Enter interns ID: "
        },
        {
            type: "Input",
            name: "School",
            message: "Enter interns school: "
        }
    ]).then(answers => {
        const intern = new Intern (answers.Name, answers.Email, answers.id, answers.School);
        teamArray.push(intern);
        addMembers();
    })
};

function addMembers(){
    inquirer.prompt([
        {
            type: "list",
            message: "Add a team member",
            name: "teamMember",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "Team complete, no one else to add."
            ]
        }
    ]).then(answers => {
        console.log(answers.teamMember)

        switch(answers.teamMember){
            case "Manager":
                createManager();
                break;
            case "Engineer":
                createEngineer();
                break;
            case "Intern":
                createIntern()
                break;
            default:
                console.log(teamArray);
        }
    })
};

addMembers();
