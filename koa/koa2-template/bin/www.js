#!/usr/bin/env node

/**
 * Module dependencies.
 */

const app = require('../app');
const http = require('http');

const models = require('../model');
const services = require('../service');

const constv = require('../config/constv');
const logger = require('../lib/logger');

app.constv = constv;
app.logger = logger;
app.models = models;
app.services = services;

(async () => {
  const port = normalizePort(process.env.PORT || '3000');

  const server = http.createServer(app.callback());

  // init work
  initDatabase();

  server.listen(port);
  server.on('error', onError);
  server.on('listening', onListening);

  /**
   * Normalize a port into a number, string, or false.
   */

  function normalizePort(val) {
    const port = parseInt(val, 10);

    if (Number.isNaN(port)) {
      // named pipe
      return val;
    }

    if (port >= 0) {
      // port number
      return port;
    }

    return false;
  }

  /**
   * Event listener for HTTP server "error" event.
   */

  function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }

    const bind = typeof port === 'string' ?
      `Pipe ${  port}` :
      `Port ${  port}`;

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(`${bind  } requires elevated privileges`);
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(`${bind  } is already in use`);
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

  /**
   * Event listener for HTTP server "listening" event.
   */

  function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string' ?
      `pipe ${  addr}` :
      `port ${  addr.port}`;
    console.log(`Listening on ${  bind}`);
  }
})()
  .catch((err) => {
    console.log(err);
  });

function initDatabase() {
  models.db.sync({ force: false });
}