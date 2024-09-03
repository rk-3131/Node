// const imports = require("./exporter");

// console.log(imports);

// console.log(imports.add(10, 10));
// console.log(imports.sub(10, 10));
// console.log(imports.mul(10, 10));
// console.log(imports.div(10, 10));
// console.log(imports.name);

// The method mentioned above will be mainly used for the purpose of importing and adding the method such that they are not destructured and hence we have to access them using the name of the object that is being present there

// Now we will import the method such that  we can get the data in the form of function name directly

const { add, sub, mul, div, name } = require("./exporter");

console.log(add(10, 10));
console.log(sub(10, 10));
console.log(mul(10, 10));
console.log(div(10, 10));
console.log(name);

// Here we can access the name of the functions or the name of the methods or variables from the other files because of the concept of module wrapper function
// Here the node js file mentioned here is not what it is as we have been given there
// It has a structure of a function which has parameters such as require, exortrts, dirname, filename and one more
// Hence as these are the parameters of the function we can access them outside of the file by mentioning them as to exports or require arguments
/*
function (exports, require, module, __filename, __dirname){

    and this will be the portion where we are going to put the code that we put in the node js file
}
*/
