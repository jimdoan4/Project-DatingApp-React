const express = require('express');
const router = express.Router();
const appController = require('../controllers/appController.js');
const maleController = require('../controllers/maleController.js');
const eventController = require('../controllers/eventController');
const userController = require('../controllers/userController');
const commentController = require('../controllers/commentController');
const gaymaleController = require('../controllers/gaymaleController.js');
const lesfemaleController = require('../controllers/lesfemaleController.js');

router.get('/', appController.index);
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

router.get('/gaymales/', gaymaleController.index);
router.post('/gaymales/', gaymaleController.create);
router.get('/gaymales/:gaymaleId/', gaymaleController.show);
router.put('/gaymales/:gaymaleId/', gaymaleController.update);
router.delete('/gaymales/:gaymaleId/', gaymaleController.delete);

router.get('/users/', userController.index);
router.post('/users/', userController.create);
router.get('/users/:userId/', userController.show);
router.put('/users/:userId/', userController.update);
router.delete('/users/:userId/', userController.delete);

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

// router.get('/users/:userId/gaymales', gaymaleController.index);
// router.post('/users/:userId/gaymales', gaymaleController.create);
// router.get('/users/:userId/gaymales/:gaymaleId', gaymaleController.show);
// router.put('/users/:userId/gaymales/:gaymaleId', gaymaleController.update);
// router.delete('/users/:userId/gaymales/:gaymaleId', gaymaleController.delete);

// router.get('/users/:userId/lesfems', lesfemController.index);
// router.post('/users/:userId/lesfems', lesfemController.create);
// router.get('/users/:userId/lesfems/:lesfemId', lesfemController.show);
// router.put('/users/:userId/lesfems/:lesfemId', lesfemController.update);
// router.delete('/users/:userId/lesfems/:lesfemId', lesfemController.delete);

// router.get('/users/:userId/males', maleController.index);
// router.post('/users/:userId/males', maleController.create);
// router.get('/users/:userId/males/:maleId', maleController.show);
// router.put('/users/:userId/males/:maleId', maleController.update);
// router.delete('/users/:userId/males/:maleId', maleController.delete);

// router.get('/users/:userId/females', femaleController.index);
// router.post('/users/:userId/females', femaleController.create);
// router.get('/users/:userId/females/:femaleId', femaleController.show);
// router.put('/users/:userId/females/:femaleId', femaleController.update);
// router.delete('/users/:userId/females/:femaleId', femaleController.delete);