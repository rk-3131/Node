const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Enter the route");
  } else if (req.url == "/names") {
    fs.readFile(`${__dirname}/API/data.json`, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        const objData = JSON.parse(data);
        const arr = objData.users;
        res.end(arr[0].firstName);
      }
    });
  } else if (req.url == "/age") {
    res.end("Age");
  } else if (req.url == "/gender") {
    res.end("gender");
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("404 page not found");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening on the port number 8000");
});
