'use strict';

module.exports = app => {
  app.get('/', app.controller.home.index);
  app.get('/me', app.middlewares.uppercase(), app.controller.home.me);
  app.resources('users', '/api/v1/users', app.controller.v1.users);
};
