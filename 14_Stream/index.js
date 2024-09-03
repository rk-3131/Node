const fs = require("fs");
const EventEmmiter = require("events");
const event = new EventEmmiter();
const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url == "/") {
//     fs.readFile("data.txt", "utf-8", (err, data) => {
//       if (err) {
//         return console.log(err);
//       }
//       res.end(data);
//     });
//   }
// });

// second way

// const server = http.createServer((req, res) => {
//   if (req.url == "/") {
//     const streamData = fs.createReadStream("data.txt");

//     streamData.on("data", (chunk) => {
//       res.write(chunk);
//     });

//     streamData.on("end", () => {
//       res.end("file not found");
//     });

//     streamData.on("error", (err) => {
//       console.log(err);
//     });
//   }
// });

// third ways
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    const streamData = fs.createReadStream("data.txt");

    streamData.pipe(res);
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening on the port number 8000");
});
