const http = require('http');


const server = http.createServer((req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>W01 Assignment</title></head>');
        res.write('<h1>Welcome</h1>');
        res.write('<form action = "/create-user" method = "POST"><input type = "text" name = "create-user"><button type = "submit">Submit</button></form>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>W01 Assignment</title></head>');
        res.write('<h1>Dummy Users</h1>');
        res.write('<ul>');
        res.write('<li>User 1</li>');
        res.write('<li>User 2</li>');
        res.write('<li>User 3</li>');
        res.write('<li>User 4</li>');
        res.write('<li>User 5</li>');
        res.write('</ul>');
        res.write('</html>');
    }

    if (url === '/create-user' & method === 'POST') {

        return res.end();
    }
});

server.listen(3000);