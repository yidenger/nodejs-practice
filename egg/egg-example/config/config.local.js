'use strict';
module.exports = {
  logger: {
    consoleLevel: 'DEBUG',
  },
  sequelize: {
    dialect: 'mysql',
    database: 'egg_demo',
    host: '45.76.216.244',
    port: '3306',
    username: 'root',
    password: '123456',
  },
  security: {
    csrf: {
      enable: false,
    },
  },
};
