const fs = require('fs');
const file = fs.createWriteStream('example.txt');

file.write('hello, ');
file.end('world!\n', () => {
    console.log('success done');
});