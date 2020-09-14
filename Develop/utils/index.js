const inquirer = require('inquirer');
const fs = require('fs');
const generatorMarkdown = require("./generateMarkdown");
const axios = require("axios");


const questions = [
  {
    type: 'input',
    message: 'what is your GitHub username?',
    name: 'Username'
  },
  {
    type: 'input',
    message: 'what is your email address?',
    name: 'Email'
  },
  {
    type: 'input',
    message: 'What is the title for your project?',
    name: 'Title',
  },
  {
    type: 'input',
    message: 'Please write a short description of your project',
    name: 'Description',
  },
  {
    type: "input",
    message: "What necessary dependencies must be installed to run this app?",
    name: "Installation",
  },
  {
    type: "input",
    message: "What is this app used for?",
    name: "Usage",
  },
  {
    type: "list",
    message: "what kind of license should your project have?",
    choices: ['MIT', 'APACHE', 'GPL', 'None'],
    name: "License",
  },

  {
    type: "input",
    message: "Please add contributors",
    name: "Contributor",
  },
  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "Test",
  }
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      throw new Error(err);
    }
    console.log('created successfully: ' + fileName);
  })
}

function init() {
  inquirer.prompt(questions)
    .then(function (data) {
      axios.get(`https://api.github.com/users/${data.UserName}`)
        .then(function (gitData) {
          // const userData = getUser(data.userName);
          writeToFile("READMe.md", generatorMarkdown(data, gitData));
          console.log(gitData);
          console.log(data);
        })

    })
}

init();
