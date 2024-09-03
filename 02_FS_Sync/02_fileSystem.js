const fs = require('fs');

fs.writeFileSync('createdFile.txt', "This data is added to the file for the very first time");

// This line just finds the file with the same name if present or it will create that file and later it will erase previous data and the new data will be added

fs.writeFileSync('createdFile.txt', "This is the data which is just added and not appended");

// as it can be seen that the data will only be added and not appended

fs.appendFileSync('createdFile.txt',"\nThis is the data which will be appended and not added as it is");

// above method is used to append the data into the file


const buffered_data = fs.readFileSync('createdFile.txt');

console.log(buffered_data);
// This will give us the data in the form of buffered files and it is in the form of numbers

// it can be converted to numbers using the function toString

console.log(buffered_data.toString());


// We can even rename the file from previous name to new name using rename method

fs.renameSync('index.js', '01_index.js');

// this has changed the name and it will show error if there is not file with the specified name there



