const koa = require('koa');
const http = require('http');
const app = new koa();

app.use(async ctx => {
    ctx.throw(400, 'BadRequest', { user: 'xiaoming' })
    ctx.body = 'Hello World';
});

http.createServer(app.callback()).listen(3003);
