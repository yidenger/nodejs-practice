const Sequelize = require('sequelize');
const logger = require('./logger').label('libs:db');
const config = require('../config');

const env = config.env;

console.log(`DB_URL:||${  env.DB_URL}`);
module.exports = new Sequelize(env.DB_URL, {
  dialect: 'mysql',
  dialectOptions: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  },
  pool: {
    minConnections: config.database.minConnections,
    maxConnections: config.database.maxConnections,
    maxIdleTime: config.database.maxIdleTime,
  },
  query: {
    raw: true,
  },
  benchmark: true,
  logging: (msg, ms) => {
    logger.debug(`${msg}   (${ms}ms)`);
  },
});
