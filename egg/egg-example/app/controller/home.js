'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    async index() {
      this.ctx.logger.debug('debug info');
      this.ctx.logger.info('info info');
      this.ctx.logger.warn('warn info');
      this.ctx.logger.info('env: ', app.config.env);
      this.ctx.body = 'hi, egg.js ' + new Date().toISOString();
    }
    async me() {
      this.ctx.body = `my name is ${this.ctx.query.name}`;
    }
  }
  return HomeController;
};
