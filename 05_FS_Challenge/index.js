// Create a folder names RK
// Create a file named bio.txt in it and add data to it
// Append more data
// read data without getting buffered data
// rename the file to mybio.txt
// delete both the file and folder

const fs = require("fs");

fs.writeFile("bio.txt", "This is Radhakrushna Mahadik.", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Data has been added!");
  }
});

fs.appendFile("bio.txt", "I will be joining the TCS soon.", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("The data was appended");
  }
});

fs.readFile("bio.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`The data is ${data}`);
  }
});

fs.rename("bio.txt", "myBio.txt", (err) => {
  if (err) {
    console.log(`Error is ${err}`);
  }
  return;
});

fs.unlink("myBio.txt", (err) => {
  if (err) {
    console.log(err);
  }
  return;
});
