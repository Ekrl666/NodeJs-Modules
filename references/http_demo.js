const http = require('http');

//create a server

http.createServer((req, res) => {
    //write a response
    res.write('Hello World');
    res.end();

})
.listen(3000, () => console.log('server Running..'));