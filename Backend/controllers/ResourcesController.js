const express = require('express');
const router = express.Router();
const Resource = require('./Resources'); 


exports.getAllResources = (req, res) => {
  Resource.find()
    .then((resources) => {
      res.json(resources);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
    });
};


exports.createResource = (req, res) => {
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
};


exports.getResourcesByTopic = (req, res) => {
  const topicId = req.params.topicId;

  Resource.find({ topicid: topicId })
    .then((resources) => {
      res.json(resources);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
    });
};


exports.updateResource = (req, res) => {
  const resourceId = req.params.resourceId;
  const { topicid, resourceType, resource } = req.body;

  Resource.findByIdAndUpdate(resourceId, { topicid, resourceType, resource }, { new: true })
    .then((resource) => {
      res.json(resource);
    })
    .catch((error) => {
      res.status(400).json({ error: 'Bad request' });
    });
};


exports.deleteResource = (req, res) => {
  const resourceId = req.params.resourceId;

  Resource.findByIdAndRemove(resourceId)
    .then((resource) => {
      res.json(resource);
    })
    .catch((error) => {
      res.status(400).json({ error: 'Bad request' });
    });
};
