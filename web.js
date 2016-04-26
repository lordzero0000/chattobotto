'use strict';

const
  Hapi = require('hapi'),
  config = require('./config'),
  server = new Hapi.Server(),
  internals = {
    home: (resquest, reply) => {
      return reply("Success!");
    },
    message: (res, reply) => {
      console.log(res.payload);
      return reply('hello world');
    }
  };

server.connection({
  host: process.env.HOST || "localhost",
  port: process.env.PORT || 8080
});

server.route([
  { method: 'POST', path: '/message', handler: internals.message },
  { method: 'GET', path: '/', handler: internals.home}
]);

server.start((err) => {
  if (err) {
    console.log(err);
  }
  console.log('Server running at:', server.info.uri);
});
