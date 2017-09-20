const router = require('koa-router')();

router.prefix('/user');

router.get('/', async (ctx) => {
  ctx.app.logger.info('router of user');
  ctx.body = ctx.app.constv.REDIS_KEY.MESSAGE;
});

module.exports = router;
