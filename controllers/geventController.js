const Gevent = require('../models/Gevent.js');
const Gaymale = require('../models/Gaymale.js');

const geventController = {
     index: (req, res) => {
 		Gaymale.findById(req.params.gaymaleId)
 			.then((gaymale) => {
 				res.json(gaymale.gevents);
 			})
 			.catch((err) => {
 				console.log(err);
 			});
 	},
     create: (req, res) => {
 		Gaymale.findById(req.params.gaymaleId)
 			.then((gaymale) => {
 				const newGevent = new Gevent(req.body);
 				gaymale.gevents.push(newGevent);
 				gaymale.save().then((gaymale) => {
 					res.json(newGevent);
 				});
 			})
 			.catch((err) => {
 				console.log(err);
 			});
 	},
 	show: (req, res) => {
 		Gaymale.findById(req.params.gaymaleId)
 			.then((gaymale) => {
 				const singleGevent = gaymale.gevents.id(req.params.geventId);
 				res.json(singleGevent);
 			})
 			.catch((err) => {
 				console.log(err);
 			});
 	},
 	update: (req, res) => {
 		Gaymale.findById(req.params.gaymaleId)
 			.then((gaymale) => {
 				const updatedGevent = gaymale.gevents.id(req.params.geventId);
 				updatedGevent.set(req.body);
 				gaymale.save();
 				res.json(updatedGevent);
 			})
 			.catch((err) => {
 				console.log(err);
 			});
 	},

 	delete: (req, res) => {
 		Gaymale.findById(req.params.gaymaleId)
 			.then((gaymale) => {
 				const filterGevents = gaymale.gevents.filter((gevent) => gevent._id != req.params.geventId);
 				gaymale.gevents = filterGevents;
 				gaymale.save();
 				res.json(gaymale.gevents);
 			})
 			.catch((err) => {
 				console.log(err);
 			});
 	}
 };

 module.exports = geventController;