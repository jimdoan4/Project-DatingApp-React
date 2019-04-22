const express = require('express');
const router = express.Router();
const appController = require('../controllers/appController.js');
const maleController = require('../controllers/maleController.js');
const eventController = require('../controllers/eventController');
const meventController = require('../controllers/meventController');
const userController = require('../controllers/userController');
const commentController = require('../controllers/commentController');
const mcommentController = require('../controllers/mcommentController');
const gaymaleController = require('../controllers/gaymaleController.js');
const gcommentController = require('../controllers/gcommentController');
const geventController = require('../controllers/geventController');
const lesfemaleController = require('../controllers/lesfemaleController.js');

router.get('/', appController.index);

router.get('/users/', userController.index);
router.post('/users/', userController.create);
router.get('/users/:userId/', userController.show);
router.put('/users/:userId/', userController.update);
router.delete('/users/:userId/', userController.delete);

router.get('/lesfemales/', lesfemaleController.index);
router.post('/lesfemales/', lesfemaleController.create);
router.get('/lesfemales/:lesfemaleId/', lesfemaleController.show);
router.put('/lesfemales/:lesfemaleId/', lesfemaleController.update);
router.delete('/lesfemales/:lesfemaleId/', lesfemaleController.delete);

router.get('/males/', maleController.index);
router.post('/males/', maleController.create);
router.get('/males/:maleId/', maleController.show);
router.put('/males/:maleId/', maleController.update);
router.delete('/males/:maleId/', maleController.delete);

router.get('/males/:maleId/mevents/', meventController.index);
router.post('/males/:maleId/mevents/', meventController.create);
router.get('/males/:maleId/mevents/:meventId/', meventController.show);
router.put('/males/:maleId/mevents/:meventId/', meventController.update);
router.delete('/males/:maleId/mevents/:meventId/', meventController.delete);

router.get('/males/:maleId/mcomments/', mcommentController.index);
router.post('/males/:maleId/mcomments/', mcommentController.create);
router.get('/males/:maleId/mcomments/:mcommentId/', mcommentController.show);
router.put('/males/:maleId/mcomments/:mcommentId/', mcommentController.update);
router.delete('/males/:maleId/mcomments/:mcommentId/', mcommentController.delete);

router.get('/gaymales/', gaymaleController.index);
router.post('/gaymales/', gaymaleController.create);
router.get('/gaymales/:gaymaleId/', gaymaleController.show);
router.put('/gaymales/:gaymaleId/', gaymaleController.update);
router.delete('/gaymales/:gaymaleId/', gaymaleController.delete);

router.get('/gaymales/:gaymaleId/gevents', geventController.index);
router.post('/gaymales/:gaymaleId/gevents', geventController.create);
router.get('/gaymales/:gaymaleId/gevents/:geventId', geventController.show);
router.put('/gaymales/:gaymaleId/gevents/:geventId', geventController.update);
router.delete('/gaymales/:gaymaleId/gevents/:geventId', geventController.delete);

router.get('/gaymales/:gaymaleId/gcomments', gcommentController.index);
router.post('/gaymales/:gaymaleId/gcomments', gcommentController.create);
router.get('/gaymales/:gaymaleId/gcomments/:gcommentId', gcommentController.show);
router.put('/gaymales/:gaymaleId/gcomments/:gcommentId', gcommentController.update);
router.delete('/gaymales/:gaymaleId/gcomments/:gcommentId', gcommentController.delete);

router.get('/users/:userId/events/', eventController.index);
router.post('/users/:userId/events/', eventController.create);
router.get('/users/:userId/events/:eventId/', eventController.show);
router.put('/users/:userId/events/:eventId/', eventController.update);
router.delete('/users/:userId/events/:eventId/', eventController.delete);

router.get('/users/:userId/comments/', commentController.index);
router.post('/users/:userId/comments/', commentController.create);
router.get('/users/:userId/comments/:commentId/', commentController.show);
router.put('/users/:userId/comments/:commentId/', commentController.update);
router.delete('/users/:userId/comments/:commentId/', commentController.delete);

module.exports = router;
