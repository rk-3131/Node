const chalk = require("chalk");
const validator = require("validator");

console.log(chalk.red("Red"));

const res1 = validator.isEmail("mahdikrs512@gmail.com");
const res2 = validator.isEmail("RadhakrushnaMahadik");

res1
  ? console.log(chalk.green.underline.inverse("Email is valid"))
  : console.log(chalk.red.underline.inverse("Email is not valid"));

res2
  ? console.log(chalk.green.underline.inverse("Email is valid"))
  : console.log(chalk.red.underline.inverse("Email is not valid"));

// if we want to run the given code then everytime we have to use the node and then name of the js file so as to get the result
// But there is one module which we can install so that we can use it to run the js file everytime there is some changes that will occure in the node or the js file
// This module can be installed locally but it will be better if we install that module gloabally so that we can get and run every file that we want to run
// The module can be installed gloabally by using the flag -g so that it will be installed globally and it will not be limited to specific file or directory
// name of the module is nodemon
