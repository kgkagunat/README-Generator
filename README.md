# README-generator

DESCRIPTION

For my project we needed to create a command-line application that dynamically generates a README.md file from a user's input using the Inquirer package. 
We were given an 'acceptance criteria' to fullfill for this project. Below is my guidelines for the 'acceptance criteria'.

----------------------------------------------------------------------------------------------------------------

CHALLENGES

Did not encounter that many challenges for this project. I did enjoy creating this readme project. I used my class mini-project as a reference for creating this readme file.
The mini-project already contain several blocks/lines of code, that I would need to use for this readme project. I still used W3schools and mozilla to help me create this readme.
The only real challenges I had was my 'generateMarkdown.js' file. I had the most trouble in getting the SVG for license to show and to make them work as a link in the readme.
Most of the time the SVG would not show up or I would get a 404 message everytime. I had to do extensive research on why that happened. I also had to make adjustments to the name of the license type.
The name to the website and the svg had specific naming convention for the license. Once I figured that out, my svg showed up as expected.


----------------------------------------------------------------------------------------------------------------

ACCEPTANCE CRITERIA

GIVEN a command-line application that accepts user input

WHEN I am prompted for information about my application repository

THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

WHEN I enter my project title

THEN this is displayed as the title of the README

WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions

THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

WHEN I choose a license for my application from a list of options

THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

WHEN I enter my GitHub username

THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

WHEN I enter my email address

THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

WHEN I click on the links in the Table of Contents

THEN I am taken to the corresponding section of the README

----------------------------------------------------------------------------------------------------------------

# !!! Important: Please read for testing !!!

This application DOESN'T include a test suite by defualt, but if you would like to add one, we suggest using Jest.

First, you'll need to install Jest. You can do this by running:

`npm install --save-dev jest`

Next, you'll need to modify the "scripts" section of your package.json file to include a "test" command for jest:

`"scripts": {`

  `"test": "jest"`
  
`}`

With Jest installed and package.json update, you can create test files in a test directory. 
Jest will automatically look for test files with `.test.js` in this directory.

Once you've created you test files you can run tests with the following command:

`npm test`

"NOTE: you'll need to write the test yourself based on what aspects of the application you with to test"

----------------------------------------------------------------------------------------------------------------

# Sample Screenshot

![Screen Shot 2023-05-19 at 5 51 21 PM](https://github.com/kgkagunat/README-generator/assets/127634764/a54cff93-0f10-4f01-8aa9-11dbc6fb0ed3)

