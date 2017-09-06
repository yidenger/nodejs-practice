'use strict';

const f = () => console.log('now ');

(
    function () {
        return new Promise(resolve => {
            return resolve(f());
        });
    }
)();

console.log('next');