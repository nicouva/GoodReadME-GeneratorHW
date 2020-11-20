const inquirer = require('inquirer')
const axios = require('axios')
const fs = require('fs')

let generateMarkdown = require('./utils/generateMarkdown.js')

// array of questions for user
const questions = [{
  type: 'input',
  name: 'title',
  message: 'What is the title of your project?'
},
{
  type: 'input',
  name: 'description',
  message: 'Please enter a description of your project.'
},
{
  type: 'input',
  name: 'contents',
  message: `Please enter a table of contents.`
},
{
  type: 'input',
  name: 'installation',
  message: 'What command should be run to install depencies?'
},
{
  type: 'input',
  name: 'usage',
  message: 'What does the user needs to know about using the repo?'
},
{
  type: 'list',
  name: 'license',
  message: 'What is the license for this project?',
  choices: ['MIT', 'MPL', 'Apache']
},
{
  type: 'input',
  name: 'contributions',
  message: 'What does the user need to know about contributing to the repo?'
},
{
  type: 'input',
  name: 'tests',
  message: 'Please enter the command to run the tests.'
},
{
  type: 'input',
  name: 'username',
  message: 'What is your GitHub username?'
},
{
  type: 'input',
  name: 'email',
  message: 'What is your email address?'
}
];

// function to write README file
function writeToFile(fileName, data) {
  const inputData = generateMarkdown(data)
  console.log(inputData)
  fs.writeFile(fileName, inputData, (err) => { console.log(err) })
}

// function to initialize program
function init() {
  inquirer.prompt(questions)
    .then((response) => { 
      console.log(response)
      writeToFile('ReadMe.md', response)
    })
    .catch((err) => { console.log(err) })
}

// function call to initialize program
init();
