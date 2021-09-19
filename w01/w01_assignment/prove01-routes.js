const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;
    const fs = require('fs');

    // Openning page
    // Input entered into the form will submit a POST request to /create-user upon button click
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>W01 Assignment</title></head>');
        res.write('<h1>Welcome</h1>');
        res.write('<form action = "/create-user" method = "POST"><input type = "text" name = "username"><button type = "submit">Submit</button></form>');
        res.write('</html>');
        return res.end();
    }

    // List of dummy users on url /users
    if (url === '/users') {

        // let data = fs.readFileSync('usernames.txt', (err, content)=>{
        
        // });
        // const parsedUsernames = Buffer.concat(data).toString();
        //     data = parsedUsernames.split('=')[1];
        
        
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
            return res.end();

    }

    //Using request information (entered by user)
    // adding to an array
    // Using a buffer to convert array to a string
    // logging newly
    if (url === '/create-user' & method === 'POST') {
        const usernames = [];
        req.on('data', (chunk) => {
            usernames.push(chunk);
        });
        req.on('end', () => {
            const parsedUsernames = Buffer.concat(usernames).toString(); //going through the list and parsing it.
            const message = parsedUsernames.split('=')[1];
            console.log(message);
            fs.writeFile('usernames.txt', message, ()=>{});
        })
        res.statusCode = 302;
        res.setHeader('Location', '/users');
        return res.end();
    }
};

module.exports = requestHandler;