const config = require('../config')
const winston = require('winston')
const moment = require('moment')

let level = config.log.level
const env = config.env

if (env.IS_TEST) {
  level = 'debug';
}

if (env.IS_UNIT_TEST) {
  level = 'error';
}

/**
 *
 * @param label
 * @returns {[*,*]}
 */
function getTransports(label) {
  return [
    new winston.transports.Console({
      json: false, // 在青云部署的app才开json，网易蜂巢的设置为false
      colorize: true, // 本机开发才开true，线上默认false, 本地开发用环境变量控制，叫LOG_COLOR
      label: label,
      timestamp: function () {
        return moment().utcOffset(8).format()
      }, // 输出当地时间
      level, // 环境变量控制，开发时用debug， 默认info, 用LOG_LEVEL控制
    })
  ]
}

const logger = new winston.Logger({
  transports: getTransports('')
})
const existLoggers = {}
logger.label = function (label) {
  if (!existLoggers[label]) {
    winston.loggers.add(label, {
      transports: getTransports(label)
    })
    existLoggers[label] = true
  }
  return winston.loggers.get(label)
}
module.exports = logger;
