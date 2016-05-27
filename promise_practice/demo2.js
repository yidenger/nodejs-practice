var myReadFilePromise = require('./myReadFilePromise');
var pathName = __dirname + '/data/';

myReadFilePromise(pathName + 'a.txt')
    .then(function (data) {
        console.log(data.toString());
        return myReadFilePromise(pathName + 'bb.txt');
    })
    .then(function (data) {
        console.log(data.toString());
        return myReadFilePromise(pathName + 'c.txt');
    })
    .then(function (data) {
        console.log(data.toString());
    })
    .catch(function (err) {
        console.log(err);
    })
















