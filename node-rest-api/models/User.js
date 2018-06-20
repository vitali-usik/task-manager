var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  user_name: String,
  user_pass: String,
  user_role: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);