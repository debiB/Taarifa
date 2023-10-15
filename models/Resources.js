const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  topicid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Topic',
    required: true,
  },
  resourceType: {
    type: String,
    required: true,
  },
  resource: {
    type: String, 
    required: true,
  },
});

module.exports = mongoose.model('Resource', resourceSchema);
