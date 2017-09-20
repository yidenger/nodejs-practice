const Koa = require('koa');

const app = new Koa();
const koaBody = require('koa-body');
const json = require('koa-json');
const load = require('./lib/load');
const middleware = require('./middleware');
const constv = require('./config/constv');
const logger = require('./lib/logger');

app.constv = constv;
app.logger = logger;

app.use(require('koa-static')(`${__dirname  }/public`));
app.use(middleware.crossOrigin);
app.use(middleware.errorHandler);
app.use(middleware.requestLogger);

app.use(koaBody({
  files: true,
  multipart: true,
  fields: true,
  formidable: { uploadDir: `${__dirname  }/public/upload` },
}));
app.use(json());

load(app, `${__dirname}/routes`);
module.exports = app;
