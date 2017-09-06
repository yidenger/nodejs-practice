'use strict';

function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done...');
        }, ms);
    });
}

timeout(3000).then(value => {
    console.log(value);
});