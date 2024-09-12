const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("I am server and I am live");
});

const start = async () => {
  try {
    console.log("Operation successfull");
  } catch (error) {
    console.log("There was some error");
  }
};
