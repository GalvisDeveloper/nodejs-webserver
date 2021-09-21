const http = require("http");

http
  .createServer((req, res) => {
    // res.setHeader("Content-Disposition", "attachment; filename=lista.csv");

    // res.writeHead(200, { "Content-Type": "application/csv" });
    // res.write("404 | Page Not Found!");

    res.write("Hello world")

    res.end();
  })
  .listen(8080);

console.log("Listen on port", 8080);
