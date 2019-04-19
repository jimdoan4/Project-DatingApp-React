const Mevent = require('../models/Mevent.js');
const Male = require('../models/Male.js');

const meventController = {
     index: (req, res) => {
 		Male.findById(req.params.maleId)
 			.then((male) => {
 				res.json(male.mevents);
 			})
 			.catch((err) => {
 				console.log(err);
 			});
 	},
     create: (req, res) => {
 		Male.findById(req.params.maleId)
 			.then((male) => {
 				const newMevent = new Mevent(req.body);
 				male.mevents.push(newMevent);
 				male.save().then((male) => {
 					res.json(newMevent);
 				});
 			})
 			.catch((err) => {
 				console.log(err);
 			});
 	},
 	show: (req, res) => {
 		Male.findById(req.params.maleId)
 			.then((male) => {
 				const singleMevent = male.mevents.id(req.params.meventId);
 				res.json(singleMevent);
 			})
 			.catch((err) => {
 				console.log(err);
 			});
 	},
 	update: (req, res) => {
 		Male.findById(req.params.maleId)
 			.then((male) => {
 				const updatedMevent = male.mevents.id(req.params.meventId);
 				updatedMevent.set(req.body);
 				male.save();
 				res.json(updatedMevent);
 			})
 			.catch((err) => {
 				console.log(err);
 			});
 	},

 	delete: (req, res) => {
 		Male.findById(req.params.maleId)
 			.then((male) => {
 				const filterMevents = male.mevents.filter((mevent) => mevent._id != req.params.meventId);
 				male.mevents = filterMevents;
 				male.save();
 				res.json(male.mevents);
 			})
 			.catch((err) => {
 				console.log(err);
 			});
 	}
 };

 module.exports = meventController;