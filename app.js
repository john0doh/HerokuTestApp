var http = require('http');
var dt = require('./module.js');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write("The date and time are: " + dt.myDateTime());
  res.end();
}).listen(5000); 