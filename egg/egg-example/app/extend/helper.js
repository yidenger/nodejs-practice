'use strict';
const moment = require('moment');
module.exports = {
  format(date) {
    return moment(date).format('YYYY/MM/DD HH:mm:ss');
  },
};
