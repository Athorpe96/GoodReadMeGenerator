// array of questions for user
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: "Lets create a README! What is your project title?",
    },
    {
        type: 'input',
        name: 'Description',
        message: "How would you describe your project?",
    },
    {
        type: 'input',
        name: 'Installation',
        message: "What are the steps to install your project?",
    },
    {
        type: 'input',
        name: 'Usage',
        message: "Provide the instructions on how use it?",
    },
    {
        type: 'list',
        name: 'License',
        message: "Please select a license?",
        choices: [
            'MIT',
            'GNU GPLv3', , 'Boost Software License 1.0', 'Mozilla Public License 2.0', 'Apache License 2.0', 'The Unlicense'],

    },
    {
        type: 'input',
        name: 'Contributors',
        message: "Who were the contibutors?",
    },

    {
        type: 'input',
        name: 'Test',
        message: "How do you test your project?",
    },
    {
        type: 'input',
        name: 'Username',
        message: "What is your Github username?",
    },
    {
        type: 'input',
        name: 'Email',
        message: "What is your email?",
    },
    {
        type: 'input',
        name: 'Questions',
        message: "Contact info if you have any further questions??",
    },


];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            throw err;
        } else {
            console.log("finished!")
        }

    });


}
function init() {
    inquirer.prompt(questions).then((answers) => {
        const response = generateMarkdown(answers);
        console.log(answers);
        writeToFile("README.md", response)
    });


}


// function to initialize program


// function call to initialize program
init();
