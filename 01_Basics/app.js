const logger = require('./logger')
const path = require('path');
const os = require('os')
const fs = require('fs')

let fun = (name) => {
    console.log("Hello from the node", name);
}

fun("Radhakrushna");
// console.log(window)
// It will not be printed on the log as inside node there is no window Object

// console.log()  // console is global object

// setTimeout() this is used to call a function after certain time 
// clearTimeout() is used to clear the time 
// setInterval() is used to set the function to execute repeteadly after some time 
// clearInterval(); 

// in node we dont have window 
// we have global object 

// but the variables are not added to the global object
// the variables declared in the js file will be accessible to that file only and they will not be global anyways

// every file is called module in node
// export a module if we want to use it outside of the module


// console.log(module);
// this will return all the info about this file 

console.log(logger);

logger.log("Radheee");
console.log(logger.endPoint);

const pathObject = path.parse(__filename);

console.log(pathObject);


console.log(os.freemem());
console.log(os.uptime());

const files = fs.readdirSync('./')
console.log(files)

fs.readdir('./', function(err, res) {
    if (err){
        console.log(err)
    }else {
        console.log(res);
    }
})