const http = require('http');


const server = http.createServer((req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>W01 Assignment</title></head>');
        res.write('<h1>W01 Assignment</h2>');
        res.write('<form action = "/users" method = "POST"><input type = "text" name = "users"><button type = "submit">Submit</button></form>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/users' & method == 'POST') {

    }
});

server.listen(3000);