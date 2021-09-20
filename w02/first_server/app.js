const http = require('http'); //Importing a file from node.js. Requrie either takes a path to another file or imports a core module
const express = require('express');

const app = express();

app.use('/add-product', (req, res, next) =>{
    console.log("This always runs!");
    next();
});

app.use('/', (req, res, next) =>{
    console.log("IN another middle");
    res.send('<h1>Hello from Express</h1>');
});

app.listen(3000); //listen starts a process where node.js will keep this running to listen for incoming requests. Will need to pass a port. 