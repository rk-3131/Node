const EventEmitter = require("events");

const event = new EventEmitter();

// create the event which will have single point of calling and then showing there

event.on("singleEvent", () => {
  console.log("This event is called for the single time");
});

event.emit("singleEvent");

// creating and calling the event for the different number of times of single names

event.on("multipleEvent", () => {
  console.log(
    "This is event with multiple call and will be called for the first time"
  );
});

event.on("multipleEvent", () => {
  console.log(
    "This is event with multiple call and will be called for the second time"
  );
});

event.on("multipleEvent", () => {
  console.log(
    "This is the event with multiple call and will be called for the third time"
  );
});

event.emit("multipleEvent");

// We can even have the event with parameters

event.on("parameterized", (name, age, email) => {
  console.log(
    `My name is ${name} and my age is ${age}. You can have my email address as ${email}`
  );
});

event.emit(
  "parameterized",
  "Radhakrushna Mahadik",
  22,
  "mahdikrs512@gmail.com"
);
