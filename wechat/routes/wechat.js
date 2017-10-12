const router = require('koa-router')();
const config = require('../config');

router.prefix('/wx');

const OAuth = require('wechat-oauth');
const client = new OAuth(config.wechat.appID, config.wechat.appsecret);

router.get('/wxLogin', async (ctx) => {
  ctx.app.logger.info('***user***');
  const url = client.getAuthorizeURL('wechat.moonweilan/wx/callback', 'state', 'snsapi_userinfo');
  ctx.app.logger.info(url);
  ctx.redirect(url);
});

router.get('/callback', async (ctx) => {
  ctx.body = 'callback page';
});

module.exports = router;
