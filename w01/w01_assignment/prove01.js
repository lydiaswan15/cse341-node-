const http = require('http');

const requestHandler = require('./prove01-routes');

// Create a new server
const server = http.createServer(requestHandler);

server.listen(3000);
