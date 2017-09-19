'use strict';

module.exports = app => {
  class UserController extends app.Controller {
    async index() {
      if (this.ctx.query.name) {
        return this.ctx.body = await this.ctx.service.user.findByNameLike(this.ctx.query.name);
      }
      const users = await this.ctx.model.User.findAll();
      this.ctx.body = users;
    }
    async new() {
      this.ctx.body = [];
    }
    async show() {
      this.ctx.body = 'user no: ' + this.ctx.params.id;
    }
    async create() {
      app.logger.info(this.ctx.request.body);
      await this.ctx.model.User.create(Object.assign({},this.ctx.request.body, { last_sign_in_at: new Date() }));
      this.ctx.body = {};
    }
    async update() {
      this.ctx.body = {};
    }
    async destroy() {
      this.ctx.body = {};
    }
  }
  return UserController;
};
