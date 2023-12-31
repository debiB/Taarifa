const express = require('express');
const router = express.Router();
const Topic = require('../models/Topic');
// GET all topics
router.get('/', async (req, res) => {
  try {
    const topics = await Topic.find();
    res.json(topics);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:topicname', async (req, res) => {
    try {
      const topic = await Topic.findOne({ topicname: req.params.topicname });
  
      if (!topic) {
        return res.status(404).json({ message: 'Topic not found' });
      }
  
      res.json(topic);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

router.post('/', async (req, res) => {
  const topic = new Topic({
    topicname: req.body.topicname
    // username: req.body.username,
  });

  try {
    const newTopic = await topic.save();
    res.status(201).json(newTopic);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// UPDATE a topic
router.patch('/:id', async (req, res) => {
  try {
    const topic = await Topic.findById(req.params.id);

    if (!topic) {
      return res.status(404).json({ message: 'Topic not found' });
    }

    if (req.body.topicname) {
      topic.topicname = req.body.topicname;
    }

    // if (req.body.username) {
    //   topic.username = req.body.username;
    // }

    const updatedTopic = await topic.save();
    res.json(updatedTopic);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a topic
router.delete('/:id', async (req, res) => {
  try {
    const topic = await Topic.findById(req.params.id);

    if (!topic) {
      return res.status(404).json({ message: 'Topic not found' });
    }
    await Topic.deleteOne({ _id: req.params.id }); 
    res.json({ message: 'Topic deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
