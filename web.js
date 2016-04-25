'use strict';

const
  Hapi = require('hapi'),
  config = require('./config'),
  server = new Hapi.Server();

server.connection({
  host: config.server.host,
  port: config.server.port
});

server.route({
  method: 'POST',
  path:'/message',
  handler: (res, reply) => {
    console.log(res.payload);
    return reply('hello world');
  }
});

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});
