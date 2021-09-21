const http = require('http'); //Importing a file from node.js. Requrie either takes a path to another file or imports a core module
const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes= require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3000); //listen starts a process where node.js will keep this running to listen for incoming requests. Will need to pass a port. 