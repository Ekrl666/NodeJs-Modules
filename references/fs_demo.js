const path = require('path');
const fs = require('fs');

//create folder
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if (err) throw err;
    console.log('folder created..')
})


//create and write to file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!!', err => {//writes over
    if (err) throw err;
    console.log('File written to..');
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I love Nodejs', err => {//append text
        if (err) throw err;
        console.log('File written to..');
    });//it is a async function so we put this as callback
});

//read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

//rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), (err) => {
    if (err) throw err;
    console.log('file renamed');
});