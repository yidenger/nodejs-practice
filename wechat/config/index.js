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

  wechat: {
    appID: 'wx607de728144717a4',
    appsecret: '398d791b3ef8cd988350bbbf936e3a02',
  },
};
