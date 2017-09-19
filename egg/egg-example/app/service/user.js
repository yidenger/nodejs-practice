'use strict';
module.exports = app => {
  return class User extends app.Service {
    async findByNameLike(name) {
      return await app.model.User.findAll({
        where: {
          name: { $like: `%${name}%` }
        },
      });
    }
  };
};
