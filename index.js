// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
{
    type: "list",
    message: "What license is used for this project?",
    name: "license",
    choices:[
        'MIT',
        'None'
    ]
},
{
    type: "input",
    message: "What is the title of this project?",
    name: "title"
},
{
    type: "input",
    message: "What is the description of this project?",
    name: "description"
}, 
{
    type: "input",
    message: "How to install this project?",
    name: "install"
},
{
    type: "input",
    message: "How to use this project?",
    name: "usage"
},
{
    type: "input",
    message: "How to contribute to this project?",
    name: "contribute"
},
{
    type: "input",
    message: "What is your email?",
    name: "email"
},
{
    type: "input",
    message: "What is your GitHub user name?",
    name: "github"
},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFileSync(fileName, data, function(err){
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        } 
        })
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data)
    })
}

// Function call to initialize app
init();
