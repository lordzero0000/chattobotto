module.exports = {
  main: (req, res) => {
    res.send('Hello World!');
  },
  message: (req, res) => {
    res.json(req.body);
  }
};
