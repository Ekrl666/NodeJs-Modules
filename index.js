const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    //console.log(req.url);
    if(req.url === '/') {
        fs.readFile()
        res.writeHead(200, {'Content-type': 'text/html'})
        res.end('<h1>Home</h1>')
    }
});

const port = process.env.port || 5000;

server.listen(port, () => console.log(`Server is running at ${port} port`));
