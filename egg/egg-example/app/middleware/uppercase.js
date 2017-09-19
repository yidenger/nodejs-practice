'use strict';

module.exports = () => {
  return async (ctx, next) => {
    ctx.query.name = ctx.query.name && ctx.query.name.toUpperCase();
    await next();
  };
};
