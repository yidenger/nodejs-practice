'use strict';

const model = require('./model');
model.sync({force: false});

const app = require('koa')();
const koa = require('koa-router')();
const test = require('./test');
const logger = require('./logger');

app.use(function* (next) {
    try {
        yield next;
    }
    catch (err) {
        logger.error('err: ', err);
    }
});

app.use(function* (next){
    // console.log('get test');
    // console.log(this.request);
    yield next;
});

koa.use('/test', test.routes());

app.use(koa.routes());

app.listen(5001);
console.log('The app is listenning port on 5000...');
console.log('You can debug it...');
