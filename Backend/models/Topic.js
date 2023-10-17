const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  topicid: {
    type: String, 
    unique: true, 
  },
  topicname: {
    type: String,
    required: true,
  },
  // username: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true,
  // },
});

module.exports = mongoose.model('Topic', topicSchema);
