'use strict';

const f = () => console.log('now');

Promise.try(f);
console.log('next');