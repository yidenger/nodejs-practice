module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    // First application
    {
      name: 'koa',
      script: './bin/www.js',
      watch: true,
      ignore_watch: ['node_modules', 'public'],
      env: {
        NODE_ENV: 'development',
        DB_URL: 'mysql://wangyouqian:nicaicai@45.76.216.244:7417/wechat',
        REDIS_URL: 'redis://:youhaosuda@45.76.216.244:6379/1',
        PORT: 6606,
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy: {
    production: {
      user: 'node',
      host: '212.83.163.1',
      ref: 'origin/master',
      repo: 'git@github.com:repo.git',
      path: '/var/www/production',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
    },
    dev: {
      user: 'node',
      host: '212.83.163.1',
      ref: 'origin/master',
      repo: 'git@github.com:repo.git',
      path: '/var/www/development',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env dev',
      env: {
        NODE_ENV: 'dev',
      },
    },
  },
};