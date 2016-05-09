'use strict';

let
  express = require('express'),
  bodyParser = require('body-parser'),
  handler = require('./lib/handlers'),
  fs = require('fs'),
  config = JSON.parse(fs.readFileSync('./config.json')),
  app = express();

const
  PORT = process.env.PORT || 80;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', handler.main);
app.get('/message', handler.subscribe);
app.post('/message', handler.message);

app.listen(PORT, () => {
  console.log('Example app listening on port ' + PORT + '!');
});
