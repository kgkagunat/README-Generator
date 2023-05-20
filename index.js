const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')


//================================================================================================================================


const questionsPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Please enter the title of your project',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub username',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select a license for your project',
            choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause', 'None'],
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions for your project',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage instructions for your project',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please provide contributing guidelines for your project',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide test instructions for your project',
        },
    ]);
};



//================================================================================================================================


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => error ? console.log(error) : console.log('Success!!!'));
};



//================================================================================================================================


const init = () => {
    questionsPrompt()
        .then((answers) => writeToFile('README.md', generateMarkdown(answers)))
        .then(() => console.log('Successfully created a README.md'))
        .catch((error) => console.error('An ERROR has occurred. Please view the error details.',error));
};
    


//================================================================================================================================


init();
