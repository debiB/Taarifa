const express = require('express');
const router = express.Router();
const resourceController = require('./resourceController');


router.get('/', resourceController.getAllResources);
router.post('/', resourceController.createResource);
router.get('/topic/:topicId', resourceController.getResourcesByTopic);
router.put('/:resourceId', resourceController.updateResource);
router.delete('/:resourceId', resourceController.deleteResource);

module.exports = router;
