const fs = require("fs");

const bioData = {
  name: "Radhakrushna Shamrao Mahadik",
  age: 22,
  email: "mahdikrs512@gmail.com",
  education: "Gradudated",
};

// convert this to json
// add it into separate file
// read the data from file
// convert again to object
// print on the console

console.log(bioData);

const jsonData = JSON.stringify(bioData);

// fs.writeFile("jsonDataFile.json", jsonData, (err) => {
//   if (err) {
//     console.log(err);
//   }
//   return;
// });

fs.writeFileSync("jsonDataFile.json", jsonData);

const objData = fs.readFileSync("jsonDataFile.json", "utf-8");

// const data = fs.readFile("jsonDataFile.json", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     objData = data;
//   }
// });

console.log(objData);
