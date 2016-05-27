var Promise = require('bluebird');
var fs = require('fs');

var readFilePromise = function (path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, function (err, data) {
            if (err){
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
};

module.exports = readFilePromise;













