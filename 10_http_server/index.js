const http = require("http");
// The http module has been imported into the file for the purpose of creating the server

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("<h1>This is the home page</h1>");
  } else if (req.url == "/about") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("<h1>This is the about page</h1>");
  } else if (req.url == "/contact") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("<h1>This is the contact page</h1>");
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.write("<h1>404 page not found</h1>");
    res.end();
  }
});
// The server is being created here which takes a callback function with response and result

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to the port number 8000");
});
// The server is made to listen the request on the port number 8000 of the system
