const express = require('express');
const router = express.Router();
const appController = require('../controllers/appController.js');
const maleController = require('../controllers/maleController.js');
const eventController = require('../controllers/eventController');
const meventController = require('../controllers/meventController');
const userController = require('../controllers/userController');
const commentController = require('../controllers/commentController');
const mcommentController = require('../controllers/mcommentController');


router.get('/', appController.index);

// User/Female routes
router.get('/users/', userController.index);
router.post('/users/', userController.create);
router.get('/users/:userId/', userController.show);
router.put('/users/:userId/', userController.update);
router.delete('/users/:userId/', userController.delete);

// User/Female Event routes
router.get('/users/:userId/events/', eventController.index);
router.post('/users/:userId/events/', eventController.create);
router.get('/users/:userId/events/:eventId/', eventController.show);
router.put('/users/:userId/events/:eventId/', eventController.update);
router.delete('/users/:userId/events/:eventId/', eventController.delete);

// User/Female Comment routes
router.get('/users/:userId/comments/', commentController.index);
router.post('/users/:userId/comments/', commentController.create);
router.get('/users/:userId/comments/:commentId/', commentController.show);
router.put('/users/:userId/comments/:commentId/', commentController.update);
router.delete('/users/:userId/comments/:commentId/', commentController.delete);

// Male routes
router.get('/males/', maleController.index);
router.post('/males/', maleController.create);
router.get('/males/:maleId/', maleController.show);
router.put('/males/:maleId/', maleController.update);
router.delete('/males/:maleId/', maleController.delete);

// Male Event routes
router.get('/males/:maleId/mevents/', meventController.index);
router.post('/males/:maleId/mevents/', meventController.create);
router.get('/males/:maleId/mevents/:meventId/', meventController.show);
router.put('/males/:maleId/mevents/:meventId/', meventController.update);
router.delete('/males/:maleId/mevents/:meventId/', meventController.delete);

// Male Comment routes
router.get('/males/:maleId/mcomments/', mcommentController.index);
router.post('/males/:maleId/mcomments/', mcommentController.create);
router.get('/males/:maleId/mcomments/:mcommentId/', mcommentController.show);
router.put('/males/:maleId/mcomments/:mcommentId/', mcommentController.update);
router.delete('/males/:maleId/mcomments/:mcommentId/', mcommentController.delete);



module.exports = router;
