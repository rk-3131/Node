// Create a folder names RK
// Create a file named bio.txt in it and add data to it
// Append more data
// read data without getting buffered data
// rename the file to mybio.txt 
// delete both the file and folder

const fs = require('fs');

fs.mkdirSync("RK");

fs.writeFileSync('RK/bio.txt', "This is the bio of great Radakrushna Mahadik");

fs.appendFileSync('RK/bio.txt', "\nHe is going to be joining TCS soon");

const buffered_data = fs.readFileSync("RK/bio.txt");

console.log(buffered_data.toString());

fs.renameSync('RK/bio.txt', 'RK/mybio.txt');

// removing the file and directory which was added

fs.unlink('RK/mybio.txt', (err) => {
    if (err){
        console.log(err);
    }
    return;
},
console.log("file has been deleted successfully")
);

fs.rmdirSync('RK');
// This can only delete the empty directories and if we want to delete the non empty directory then we have to delete the internal files which were present there already so that we can delete the directory

