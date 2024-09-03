const bioData = {
  name: "Radhakrushna Shamrao Mahadik",
  age: 22,
  email: "mahdikrs512@gmail.com",
  education: "Gradudated",
};

console.log(bioData);
// This is the data in the object of the Javascript

// Lets convert that object to the JSON

const jsonData = JSON.stringify(bioData);

console.log(jsonData);

// And again this data can be converted to object using the parse method of the object

const objData = JSON.parse(jsonData);
console.log(objData);


