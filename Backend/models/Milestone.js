const mongoose = require('mongoose');

const MilestoneSchema = new mongoose.Schema({
  topic: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Topic', // Reference to the Learning Topic model
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
  order: {
    type: Number,
    required: true,
  },
  description: String,
  resources: [
 String
      //required: true,
  ],
});

module.exports = mongoose.model('Milestone', MilestoneSchema);
