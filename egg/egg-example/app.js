'use strict';

module.exports = app => {
  app.beforeStart(async () => {
    app.logger.info('app starting...');
    // 同步模型
    await app.model.sync({ force: false });
  });
};
