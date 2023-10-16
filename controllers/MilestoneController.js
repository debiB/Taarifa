const express = require('express');
const router = express.Router();
const Milestone = require('../models/Milestone'); 


//get all milestones
router.get('/', async (req, res) => {
  try {
    const milestones = await Milestone.find().sort({order : 1});
    res.json(milestones);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//get mile stone by specific topic
router.get('/:topicId', async (req, res) => {
    try {
      const milestone = await Milestone.find({ topic: req.params.topicId });
  
      if (milestone.length == 0) {
        return res.json({ message: 'milestones not found' });
      }
  
      res.json(milestone);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

// post a single milestone
router.post('/', async (req, res) => {
  const milestone = new Milestone({
    topic: req.body.topic,
    order:  req.body.order,
    description: req.body.description
  });

  try {
    const newMilestone = await milestone.save();
    res.status(201).json(newMilestone);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//update each milestone
router.patch('/:id', async (req, res) => {
  try {
    const milestone = await Milestone.findById(req.params.id);
    if (!milestone) {
      return res.status(404).json({ message: 'Milestone not found' });
    }
    milestone.done = true;

    const updatedMilestone = await milestone.save();
    res.json(updatedMilestone);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// delete milestones by specific topic id
router.delete('/:topicId', async (req, res) => {
  try {
    const milestones = await Milestone.deleteMany({topic : req.params.topicId});

    if (milestones.deletedCount == 0) {
      return res.status(404).json({ message: 'Milestones not found' });
    }

    res.json({ message: 'Milestones deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
