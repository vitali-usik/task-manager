var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
  task_name: String,
  task_desc: String,
  task_priority: Number,
  task_user_id: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Task', TaskSchema);