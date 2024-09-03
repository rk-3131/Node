let url = 'http://mylogger.io/log'


function log(message) {
    console.log("I  am from the logger ",message);
}

module.exports.log = log;
module.exports.endPoint = url;

console.log(module);

// node does not invoke the module all as it is but it wraps all the module inside of a function which we can see if the code is made to have a sytactical error on the very first line

