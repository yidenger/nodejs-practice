var fs = require('fs');
var Promise = require('bluebird');
var readFileAsync = Promise.promisify(fs.readFile);

var path = require('path');
var pathName = __dirname + '/data/';
console.log(pathName);

/*
 * promise
 */

//嵌套,顺序执行
readFileAsync(pathName + 'a.txt', 'utf8')
    .then(function (data) {
        console.log(data);
        return readFileAsync(pathName + 'b.txt', 'utf8');
    })
    .then(function (data) {
        console.log(data);
        Promise.reject("It is a error...");
        return readFileAsync(pathName + 'c.txt', 'utf8');
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.log(err);
    })
    .finally(function () {
        console.log('...done1...');
    });

//并行,无顺序
Promise.all([
    readFileAsync(pathName + 'a.txt', 'utf8'),
    readFileAsync(pathName + 'bb.txt', 'utf8'),
    readFileAsync(pathName + 'c.txt', 'utf8')
])
    .then(function (datas) {
        console.log(datas);
    })
    .catch(function (err) {
        console.log(err);
    })
    .finally(function () {
        console.log('...done...');
    })














