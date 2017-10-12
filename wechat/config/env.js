const needEnvs = [];
const processEnv = process.env;
const config = {
  DB_URL: processEnv.DB_URL || 'mysql://root:123456@45.76.216.244:3306/wechat',
  REDIS_URL: processEnv.REDIS_URL || 'redis://127.0.0.1:6379/0',
  PORT: processEnv.PORT,
  LOG_LEVEL: processEnv.LOG_LEVEL,
  // 运行环境的环境变量
  IS_TEST: !!processEnv.IS_TEST,
  IS_UNIT_TEST: !!processEnv.IS_UNIT_TEST,
};

for (const envName of needEnvs) {
  if (!processEnv[envName]) {
    console.error(`环境变量 ${envName} 缺失, 退出app`);
    process.exit(1);
  }
  config[envName] = processEnv[envName];
}

module.exports = config;
