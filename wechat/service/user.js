module.exports = (app) => {
  return class User {
    constructor() {
      
    }
    async findByNameLike (name) {
      return await app.models.user.findAll({
        where: {
          name: { $like: `%${name}%` },
        },
        raw: false,
      });
    }
  };
};
