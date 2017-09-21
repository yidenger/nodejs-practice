const sequelize = require('sequelize');
const logger = require('../lib/logger').label('middleware');

module.exports = {
  crossOrigin: async(ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'X-Requested-With');
    ctx.set('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    await next();
  },
  requestLogger: async(ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} -- ${ms}ms`);
  },
  errorHandler: async(ctx, next) => {
    try {
      await next();
    } catch (err) {
      if (err.status && err.status < 500) {
        logger.warn(err.stack || err)
      } else {
        if (err instanceof sequelize.DatabaseError) {
          logger.error({
            original: err.original,
            parent: err.parent,
            sql: err.sql
          })
        } else {
          logger.error(err.stack || err)
        }
      }

      if (err.status) {
        if (!ctx.headerSent) {
          ctx.status = err.status || 500
          //TODO 开发中将所有错误的详细信息都传到客户端，便于调试
          // let message = ctx.status >= 500 ? 'Internal Server Error' : err.message;
          let message = err.message
          let errorBody = {
            code: ctx.status,
            message: message || 'error'
          }
          ctx.body = errorBody
        }
      } else {
        if (!ctx.headerSent) {
          ctx.status = (err && err.code) || 500
          let errorBody = {
            code: ctx.status,
            message: 'Internal Server Error'
          }
          // if (!utils.isProduction()) {
          //   errorBody.message = (err && err.message) || errorBody.message
          // }
          ctx.body = errorBody
        }
      }
    }
  },
};