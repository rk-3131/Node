const fs = require('fs');

console.log("This is Async file usage");


fs.writeFile("myFile.txt","Hello, this is Radhakrushna Mahadik from the earth", (err) => {
    if (err){
        console.log("There is some error while adding the data");
    }else{
        console.log("The data has been added successfully")
    }
}
);



fs.appendFile("myFile.txt", "This is the data that has been appended", (err) => {
    if (err){
        console.log(err);
    }else {
        console.log("The data has been appended succuessfully");
    }
})

fs.readFile("myFile.txt", 'utf-8', (err, data) => {
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})



