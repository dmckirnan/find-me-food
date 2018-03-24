const express = require('express');

const userRouter = express.Router();

userRouter.use((req, res, next) => {
  console.log('req.method: ', req.method);
  console.log('req.url: ', req.url);
  next();
});

userRouter.route('/users')
  .get((req, res) => {
    res.status(200)
      .send('User payload: ', res.body);
  })
  .post((req, res) => {
    res.status(200)
      .send('User Posted: ', req.body);
  });

userRouter.route('/users/user_id')
  .get((req, res) => {
    res.status(200)
      .send('User Info: ', res.body);
  });

module.exports = userRouter;
