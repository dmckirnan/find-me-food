const mongoose = require('mongoose');

const { Schema } = mongoose;

const search = new Schema({
  term: { type: String, required: true, },
  location: { type: String, required: true, },
});

const Search = mongoose.model('Search', search);
module.exports = Search;
