const http = require('http');

http.createServer((req, res) => {
  res.end("Hello from Jenkins + Docker!");
}).listen(3000);
