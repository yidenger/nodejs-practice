'use strict';
module.exports = (options, app) => {
  return async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      app.emit('error', err);
      ctx.body = {
        code: 500,
        message: app.config.env === 'prod' ? 'Internal Server Error' : err.message,
      };
    }
  };
};
