const express = require('express');
const router = express.Router();
const appController = require('../controllers/appController.js');
const eventController = require('../controllers/eventController');
const userController = require('../controllers/userController');
const commentController = require('../controllers/commentController');

router.get('/', appController.index);

router.get('/users', userController.index);
router.post('/users', userController.create);
router.get('/users/:userId', userController.show);
router.put('/users/:userId', userController.update);
router.delete('/users/:userId', userController.delete);

router.get('/users/:userId/events', eventController.index);
router.post('/users/:userId/events', eventController.create);
router.get('/users/:userId/events/:eventId', eventController.show);
router.put('/users/:userId/events/:eventId', eventController.update);
router.delete('/users/:userId/events/:eventId', eventController.delete);

router.get('/users/:userId/comments', commentController.index);
router.post('/users/:userId/comments', commentController.create);
router.get('/users/:userId/comments/:commentId', commentController.show);
router.put('/users/:userId/comments/:commentId', commentController.update);
router.delete('/users/:userId/comments/:commentId', commentController.delete);



module.exports = router;
