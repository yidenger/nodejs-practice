'use strict';
const db = require('./db.js');
const sequelize = require('sequelize');

const User = db.define('user', {
    firstName: {
        type: sequelize.STRING,
    },
    lastName: {
        type: sequelize.STRING,
        primaryKey: true
    }
});

module.exports = User;