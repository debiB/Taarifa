const express = require('express');
const router = express.Router();
const topicController = require('../controllers/TopicController'); 

router.get('/', topicController.getAllTopics);

router.get('/:topicname', topicController.getTopicByName);


router.post('/', topicController.createTopic);

router.patch('/:id', topicController.updateTopic);

router.delete('/:id', topicController.deleteTopic);

module.exports = router;
