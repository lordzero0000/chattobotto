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
    console.log(req.body);
    res.send('Got it!');
  }
};
