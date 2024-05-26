var http = require("https");

var dt = require("./date.js");

var server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  const result = dt.datetime();
  res.write("Current Date and Time: " + result);
  res.end();
});

server.listen(8080);
