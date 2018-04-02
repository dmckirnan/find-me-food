const express = require('express');
const userController = require('../controllers/User');

const userRouter = express.Router();

userRouter.use((req, res, next) => {
  console.log('req.method: ', req.method);
  console.log('req.url: ', req.url);
  next();
});

userRouter.route('/')
  .get((req, res) => res.status(200).send('User payload: ', res.body))
  .post((req, res) => res.status(200).send('User Posted: ', req.body));

userRouter.route('/:user_id')
  .get((req, res) => res.status(200).send('User Info: ', res.body));

userRouter.route('/verify')
  .post(userController.verify);

userRouter.route('/create')
  .post(userController.create);

module.exports = userRouter;
