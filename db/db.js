'use strict';

const sequelize = require('sequelize');
const config = require('./config.js');
const logger = require('./logger');

module.exports = new sequelize(config.dbname, config.username, config.password, {
    host: config.host,
    dialect: 'postgres',
    logging: function (str) {
        logger.trace(str);
    }
});