var Promise = require('bluebird');

Promise.delay(1)
    .delay(1)
    .delay(1)
    .then(function () {
        console.log('...done...');
    })










