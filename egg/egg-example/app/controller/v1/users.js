'use strict';

module.exports = app => {
  class UserController extends app.Controller {
    async index() {
      const users = await this.ctx.model.User.findAll();
      this.ctx.body = users;
    }
    async new() {
      await this.ctx.model.
      this.ctx.body = {};
    }
    async show() {
      this.ctx.body = 'user no: ' + this.ctx.params.id;
    }
    async cretate() {
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
