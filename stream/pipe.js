const fs = require('fs');
const read = fs.createReadStream('./example.txt');
const write = fs.createWriteStream('./file.txt');

read.pipe(write);