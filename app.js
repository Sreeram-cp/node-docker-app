const http = require('http');

http.createServer((req, res) => {
  res.end("your Jenkins + Docker file is successfull.well done boy");
}).listen(3000);
