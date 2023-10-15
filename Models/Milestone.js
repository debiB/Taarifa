const mongoose = require('mongoose');

const MilestoneSchema = new mongoose.Schema({
  topic: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'LearningTopic', // Reference to the Learning Topic model
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
  description: String
});

const Milestone = mongoose.model('Milestone', MilestoneSchema);
module.exports = MilestoneSchema;



