'use strict';
const router = require('koa-router')();
const model = require('./model');
const co = require('co');

router.get('/', function* () {
    yield model.create({
        firstName: 'John',
        lastName: 'TJ'
    });

    this.body = 'ok';
    // console.log(this.request);
    // console.log('node.js request: ', this.req);
});

router.post('/', function* () {
    yield model.create({
        firstName: 'John',
        lastName: 'TJ'
    });

    this.body = 'ok';
    // console.log(this.request);
    // console.log('node.js request: ', this.req);
});

router.get('/settimeout', function* () {
    this.body = 'ok';
    setTimeout(() => {
        co(function *() {
            yield model.create({
                firstName: 'John1',
                lastName: 'TJ1'
            });
        });
        console.log('5s later...');
    }, 5 * 1000);
});

router.get('/bulkcreate', function* () {
    console.log('router bulkcreate...');
    const arr = [
        {firstName: 'Tony', lastName: 'James'},
        {firstName: 'Tony1', lastName: 'James1'},
        {firstName: 'Tony2', lastName: 'James2'},
        // {firstName: 'Tony3', lastName: 'James'},
        // {firstName: 'Tony4', lastName: 'James4'},
        // {firstName: 'Tony5', lastName: 'James5'},
    ];
    const result = yield model.bulkCreate(arr, {returning: true});
    this.body = result;
});


module.exports = router;
