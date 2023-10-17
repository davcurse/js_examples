// var http = require('http');

import * as http from 'http';

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Hello shamir");
  res.end();
}).listen(8080);