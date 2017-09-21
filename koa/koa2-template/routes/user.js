const router = require('koa-router')();

router.prefix('/user');

router.get('/', async (ctx) => {
  let result = null;
  if (ctx.query.name) {
    result = await ctx.app.models.user.findByName(ctx.query.name);
  } else {
    result = await ctx.app.models.user.findAll();
  }
  ctx.body = result;
});

router.get('/introduce', async (ctx) => {
  const user = await ctx.app.models.user.findByName(ctx.query.name);
  if (user.length > 0) {
    ctx.body = user[0].getUserInfo();
  } else {
    ctx.body = null;
  }
});

router.get('/search', async (ctx) => {
  ctx.body = await ctx.app.services.user.findByNameLike(ctx.query.name);
});

router.post('/', async (ctx) => {
  const result = await ctx.app.models.user.create(ctx.request.body);
  ctx.body = result;
});

module.exports = router;
