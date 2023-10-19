const express = require('express');
const router = express.Router();
const Resource = require('../models/Resources');

router.get('/', async (req, res) => {
  Resource.find()
    .then((resources) => {
      res.json(resources);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
    });
});

router.post('/', async (req, res) => {
  const { topicid, resourceType, resource } = req.body;
  const newResource = new Resource({ topicid, resourceType, resource });

  newResource
    .save()
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((error) => {
      res.status(400).json({ error: 'Bad request' });
    });
});

router.get('/:topicid', async (req, res) => {
  const topicId = req.params.topicid;

  Resource.find({ topicid: topicId })
    .then((resources) => {
      res.json(resources);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
    });
});

router.patch('/:id', async (req, res) => {
  const resourceId = req.params.id;
  const { topicid, resourceType, resource } = req.body;

  Resource.findByIdAndUpdate(resourceId, { topicid, resourceType, resource }, { new: true })
    .then((resource) => {
      res.json(resource);
    })
    .catch((error) => {
      res.status(400).json({ error: 'Bad request' });
    });
});

router.delete('/:id', async (req, res) => {
  const resourceId = req.params.id;

  Resource.findByIdAndRemove(resourceId)
    .then((resource) => {
      res.json(resource);
    })
    .catch((error) => {
      res.status(400).json({ error: 'Bad request' });
    });
});

module.exports = router;
