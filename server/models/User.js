const mongoose = require('mongoose');

const { Schema } = mongoose;

mongoose.connect('mongodb://darrick:123@ds231229.mlab.com:31229/find-me-food')
  .then(() => console.log('DB Connected'))
  .catch((err) => console.error(err));

const user = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, },
});

const User = mongoose.model('User', user);
module.exports = User;
