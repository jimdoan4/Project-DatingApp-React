const express = require('express');
const router = express.Router();
const appController = require('../controllers/appController.js');
const eventController = require('../controllers/eventController');
const userController = require('../controllers/userController');
const commentController = require('../controllers/commentController');

router.get('/users', userController.index);
router.post('/users', userController.create);
router.get('/users/:userId', userController.show);
router.put('/users/:userId', userController.update);
router.delete('/users/:userId', userController.delete);

module.exports = router;
