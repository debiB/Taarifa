const express = require('express');
const router = express.Router();
const resourceController = require('./resourceController');


router.get('/resources', resourceController.getAllResources);
router.post('/resources', resourceController.createResource);
router.get('/resources/topic/:topicId', resourceController.getResourcesByTopic);
router.put('/resources/:resourceId', resourceController.updateResource);
router.delete('/resources/:resourceId', resourceController.deleteResource);

module.exports = router;
