const express = require('express');
const router = express.Router();
const topicController = require('../controllers/TopicController'); 

router.get('/topics', topicController.getAllTopics);

router.get('/topics/:topicname', topicController.getTopicByName);


router.post('/topics', topicController.createTopic);

router.patch('/topics/:id', topicController.updateTopic);

router.delete('/topics/:id', topicController.deleteTopic);

module.exports = router;
