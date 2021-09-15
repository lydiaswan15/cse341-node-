const http = require('http'); //Importing a file from node.js. Requrie either takes a path to another file or imports a core module

const routes = require('./routes'); //imports the routes function from routes.js

const server = http.createServer(routes); //creates a new server. When the server is opened, it will call the routes function. 

server.listen(3000); //listen starts a process where node.js will keep this running to listen for incoming requests. Will need to pass a port. 