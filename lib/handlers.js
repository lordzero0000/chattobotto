'use strict';

let
  sender = require('./sender');

module.exports = {
  main: (req, res) => {
    res.send('Hello World!');
  },
  subscribe: (req, res) => {
    const TOKEN = process.env.TOKEN || null;
    if (req.query["hub.verify_token"] === TOKEN) {
      res.send(req.query["hub.challenge"]);
    } else {
      res.send("Error, cannot validate token.");
    }
  },
  message: (req, res) => {
    console.log(req.body);
    let msg = req.body.entry[0].messaging[0];
    console.log(msg.sender);
    /*sender.sendMessage('Hey! Listen!', msg.sender.id)
    .then((com) => {
      console.log(com);
      res.json(com);
    }).catch((err) => {
      console.log(err.message);
      res.json(err);
    });*/
  }
};
