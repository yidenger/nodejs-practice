const db = require('../lib/db');
const path = require('path');
const fs = require('fs');
const logger = require('../lib/logger').label('models:index');

const models = {
  sequelize: db, // db instance
  db, // alias to sequelize
};

const modelDir = __dirname;
const fileList = fs.readdirSync(modelDir);
// logger.info(fileList);
fileList.forEach((fileName) => {
  // logger.info(fileName);
  if (fileName !== 'index.js' && fileName.indexOf('.js') !== -1) {
    const modelName = fileName.split('.js')[0];
    models[modelName] = db.import(path.join(modelDir, fileName));
    // console.log(models[modelName]);
    logger.info('import model', modelName);
  }
});

module.exports = models;
