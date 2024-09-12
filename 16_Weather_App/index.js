const http = require("http");
const fs = require("fs");
var requests = require("requests");

const homeFile = fs.readFileSync("home.html", "utf-8");

const replaceVal = (tempVal, orgVal) => {
  let temp = orgVal.main.temp - 273.15;
  let temprature = tempVal.replace("{%temp%}", temp.toFixed(2));
  temp = orgVal.main.temp_min - 273.15;
  temprature = temprature.replace("{%mintemp%}", temp.toFixed(2));
  temp = orgVal.main.temp_max - 273.15;
  temprature = temprature.replace("{%maxtemp%}", temp.toFixed(2));
  temprature = temprature.replace("{%location%}", orgVal.name);
  temprature = temprature.replace("{%country%}", orgVal.sys.country);
  temprature = temprature.replace("{%tempStatus%}", orgVal.weather[0].main);

  return temprature;
};

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    requests(
      "https://api.openweathermap.org/data/2.5/weather?q=pune&appid=ce01ebf2067c5fdeda9ec64142038e2d"
    )
      .on("data", (chunk) => {
        const objData = JSON.parse(chunk);
        const arrData = [objData];
        const realtimeData = arrData
          .map((val) => replaceVal(homeFile, val))
          .join("");
        // console.log(realtimeData);
        res.write(realtimeData);
      })
      .on("end", (err) => {
        if (err) return console.log("Connections closed due to error", err);
        res.end();
      });
  } else {
    res.end("file not found");
  }
});

server.listen(8000, "127.0.0.1");
