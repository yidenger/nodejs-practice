'use strict';

function makeAsyncIterator(array) {
    var nextIndex = 0;
    return {
        next: function() {
            return new Promise((resove, reject) => {
                nextIndex < array.length ? resove({value: array[nextIndex++], done: false}) : 
                resove({value: undefined, done: true});
            });
        }
    };
}

const asyncIterable = makeAsyncIterator(['a', 'b', 'c']);
// asyncIterable.next()
//     .then(({value, done}) => {
//         console.log('then: ', value, done);
//         return asyncIterable.next();
//     })
//     .then(({value, done}) => {
//         console.log('then: ', value, done);
//     })


// (async function () {
//     console.log(await asyncIterable.next());
//     console.log(await asyncIterable.next());
//     console.log(await asyncIterable.next());
//
//     console.log(await asyncIterable.next());
//     console.log(await asyncIterable.next());
// })();

(
    async function f() {
        for (const x of asyncIterable) {
            console.log(x);
        }
    }
)();