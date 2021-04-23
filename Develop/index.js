// TODO: Include packages needed for this application
const getReadme = require('get-package-readme')
const fs = require("fs");
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown");
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide brief description of the project',
    },
    {
        type: 'input',
        name: 'installation_instruction',
        message: 'List steps required to successfully instal application',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions on the usage of the application and examples?',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Provide the list of collaborators on this project, including credits to resources utilized ',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Itemize specific features of your project',
    },
    {
        type: 'checkbox',
        message: 'What license is your project under?',
        name: 'license',
        choices: ['MIT', 'Apache', 'BSD', 'GPL'],
      },
      {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
      },
      {
        type: 'input',
        message: 'What email address?',
        name: 'email',
      },
];

// TODO: Create a function to write README file
const writeToFile = util.promisify(fs.writeFile);
function init() {
    inquirer.prompt(questions)
    .then ((response) => {
        console.log("Generating README...");
        writeToFile('README.md', generateMarkdown(response), (err) => err? console.error(err): console.log('successfully saved to README.md!'));
    })
}
// TODO: Create a function to initialize app
// function init () {
//     inquirer.prompt(questions)
//     .then((inquirerResponse, data) => {   
//         console.log("Making ReadMe");
//         fs.writeFileSync("ReadMe.md", inquirerResponse, data);
//     })
// }
// Function call to initialize app
init();


