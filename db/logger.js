"use strict";

var config = require('./config');
var bunyan = require('bunyan');

var logger = bunyan.createLogger({
    name: 'testLog',
    level: config.log.level,
    serializers: {
        err: bunyan.stdSerializers.err,
        req: bunyan.stdSerializers.req,
        res: bunyan.stdSerializers.res
    },
    src: config.log.lineNumber
});

logger.getLogger = function(option) {
    if (typeof option === 'string') {
        option = {scope: option};
    }

    return logger.child(option);
};

module.exports = logger;