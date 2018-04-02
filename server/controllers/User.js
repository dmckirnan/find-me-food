const User = require('../models/User.js');

const userController = {
  verify: (req, res) => {
    User.findOne({ username: req.body.username })
      .then(result => {
        if (!result || result.password !== req.body.password) {
          return res.status(404)
            .send({ code: '404', error: 'Username or password was incorrect' });
        }
        return res.status(200).send(true);
      }).catch(err => console.error(err));
  },
  create: (req, res) => {
    User.findOne({ username: req.body.username })
      .then(result => {
        if (result) return res.status(404).send({ code: '404', error: 'Username already exists' });
        else if (req.body.username && req.body.password) {
          return User.create({ username: req.body.username, password: req.body.password },
            res.status(200).send(true));
        }
        return res.status(200).send('Create Not Successful');
      }).catch(err => console.error(err));
  },
};

module.exports = userController;
