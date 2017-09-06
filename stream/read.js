const ToReadable = require('./readable.js');

const iterator = function (limit) {
    return {
        next: () => {
            if(limit--) {
                return  { done: false, value: limit + Math.random() }
            }
            return { done: true }
        }
    };
}

const readable = new ToReadable(iterator(10));

readable.on('data', data => process.stdout.write(data))

readable.on('end', () => process.stdout.write('DONE \n'))