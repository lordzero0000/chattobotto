'use strict';

let
  sender = require('./sender');

module.exports = {
  main: (req, res) => {
    res.send('Hello World!');
  },
  subscribe: (req, res) => {
    if (req.query["hub.verify_token"] === process.env.TOKEN) {
      res.send(req.query["hub.challenge"]);
    } else {
      res.send("Error, cannot validate token.");
    }
  },
  message: (req, res) => {
    console.log(req.body.entry);
    for (var i in req.body.entry) {
      for (var e in req.body.entry[i].messaging) {
        let msg = req.body.entry[i].messaging[e];
        console.log(msg);
        sender.sendMessage(msg.sender.id, msg.message.text)
        .then((com) => {
          console.log(com);
          res.json(com);
        }).catch((err) => {
          console.log(err.message);
          res.json(err);
        });
      }
    }
  }
};
