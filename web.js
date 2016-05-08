'use strict';

const
  express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  handler = require('./handlers'),
  port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', handler.main);
app.get('/message', handler.message);

app.listen(port, () => {
  console.log('Example app listening on port ' + port + '!');
});
