'use strict';

module.exports = app => {
  app.get('/', app.controller.home.index);
  app.get('/me', app.middlewares.uppercase(), app.controller.home.me);
  app.get('/time', app.controller.home.time);
  app.resources('users', '/api/v1/users', app.controller.v1.users);
};
