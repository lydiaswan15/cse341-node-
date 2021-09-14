const http = require('http'); //Importing a file from node.js. Requrie either takes a path to another file or imports a core module


const server = http.createServer((req, res) => {
    console.log(req);
    process.exit();
});

server.listen(3000); //listen starts a process where node.js will keep this running to listen for incoming requests. Will need to pass a port. 