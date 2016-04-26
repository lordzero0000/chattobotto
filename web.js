'use strict';

const
  Hapi = require('hapi'),
  config = require('./config'),
  server = new Hapi.Server(),
  internals = {
    home: (resquest, reply) => reply("Success!"),
    message: (res, reply) => {
      console.log(res.payload);
      return reply('hello world');
    }
  };

server.connection({
  host: config.server.host,
  port: config.server.port
});

server.route(
  { method: 'POST', path: '/message', handler: internals.message },
  { method: 'GET', path: '/', handler: internals.home}
);

server.start((err) => {
  if (err) {
    console.log(err);
  }
  console.log('Server running at:', server.info.uri);
});
