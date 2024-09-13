// https://dummyjson.com/quotes

const fs = require("fs");
const http = require("http");
const requests = require("requests");

let htmlFile = fs.readFileSync("index.html", "utf-8");

const server = http.createServer((req, res) => {
  // console.log(htmlFile);
  if (req.url == "/") {
    const index = Math.floor(Math.random() * (1400 - 0 + 1) + 0);
    requests(`https://dummyjson.com/quotes/${index}`)
      .on("data", (chunk) => {
        const objData = JSON.parse(chunk);
        htmlFile = htmlFile.replace("{%quote%}", objData.quote);
        htmlFile = htmlFile.replace("{%author%}", objData.author);
        // console.log(htmlFile);
        res.write(htmlFile);
      })
      .on("end", (err) => {
        if (err) return console.log("Connections closed due to error", err);
        res.end();
      });
  } else {
    res.end("The Page does not exist");
  }
});

server.listen(8000, "127.0.0.1");
