'use strict';

module.exports = app => {
  class UserController extends app.Controller {
    async index() {
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
      await this.ctx.model.User.create(this.ctx.request.body);
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
