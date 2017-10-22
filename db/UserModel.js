'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema ({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  articles: {type: Array, default: []},
  avatar: {type: String}
});

let User = mongoose.model('User', userSchema);

module.exports = {
  User: User
}