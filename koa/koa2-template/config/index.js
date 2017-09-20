const env = require('./env')
module.exports = {
  env,
  log: {
    level: env.LOG_LEVEL || 'debug',
  },
  sessionKey: 'midea-sess',
  database: {
    minConnections: 0,
    maxConnections: 20,
    maxIdleTime: 30000,
  },
};
