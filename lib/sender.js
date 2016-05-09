'use strict';

let
  fs = require('fs'),
  config = JSON.parse(fs.readFileSync('./config.json')),
  request = require('request'),
  requester = (opts) => {
    return new Promise((resolve, reject) => {
      request(opts, (error, response, body) => {
        if (error) { reject(error); }
        resolve(body);
      });
    });
  };

const
  URL = config.api || null,
  TOKEN = process.env.TOKEN || null;

module.exports = {
  sendMessage: (message, recipient) => {
    return new Promise((resolve, reject) => {
      return requester({
        method: 'POST',
        url: URL + TOKEN,
        body: {
          recipient: {
            id: recipient
          },
          message:{
            text: message
          }
        },
        json: true
      }).then((res) => {
        if (res.error) { reject(res.error); }
        resolve(res);
      });
    });
  }
};
