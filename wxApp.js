const { createServer } = require("node:http");

const hostname = "127.0.0.1";
const port = 3000;

exports.myDateTime = function () {
  const now = new Date();
  return now.toString();
};

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("The current time is: " + myDateTime());
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
