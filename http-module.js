const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello world!!!");
  }
  if (req.url === "/about") {
    res.end("Here is about page");
  }
  res.end(`<h1>Oops! We can't seem to find the page</h1>`);
});

server.listen(3000);
