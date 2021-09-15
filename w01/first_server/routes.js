const fs = require('fs'); //fs is a module that allows you to work with the file system. We are importing it right here and assigning it a variable. 


const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') { //listening to requests with /
        res.write('<html>');
        res.write('<head><title>My First Page</title><head>');
        res.write('<body><form action = "/message" method = "POST"><input type = "text" name = "message"><button type = "submit">Send</button></form></body>');
        res.write('<html>'); //when send button is clicked, we sent a post request to /message
        return res.end();
    }

    if (url === '/message' && method === "POST") { //If the url is /message, then it will store the message the user entered and store it in the new file. 
        const body = [];
        req.on('data', (chunk) => { //node will keep executing this as long as there is data to add. 
            console.log(chunk);
            body.push(chunk);
        }); //goes to request and creates an event listener. on() automatically does that for us. We are listening for the data event. Data event is fired whenever a new chunk is ready to be read 
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString(); //creates a new buffer and adds all the chunks from the body array to it and then converts it to a string
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader = ('Location', '/');
                return res.end();
            });

        }); //will be fired once it's done  parsing the incoming reqest data

        res.statusCode = 302;
        res.setHeader = ('Location', '/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello From My Node.JS Server</h1></body>');
    res.write('<html>');
    res.end();

}


module.exports = requestHandler; //exports the variable with the function in it so that it can be used in other files