'use strict';

function* foo() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
}

let f = foo();
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
