const Mevent = require('../models/Mevent.js');
const Male = require('../models/Male.js');

const meventController = {
     index: (req, res) => {
 		Male.findById(req.params.maleId)  // Find all of the males events from the database
 			.then((male) => {
 				res.json(male.mevents);
 			})
 			.catch((err) => {
 				console.log(err); // If there is any error, tell the client something went wrong on the server
 			});
 	},
     create: (req, res) => {
 		Male.findById(req.params.maleId)
 			.then((male) => {
 				const newMevent = new Mevent(req.body);  // create a new Male Event, let Mongoose give the default values
 				male.mevents.push(newMevent);
 				male.save().then((male) => {
 					res.json(newMevent);
 				});
 			})
 			.catch((err) => {
 				console.log(err); // If there is any error, tell the client something went wrong on the server
 			});
 	},
 	show: (req, res) => {
 		Male.findById(req.params.maleId)
 			.then((male) => {
 				const singleMevent = male.mevents.id(req.params.meventId);
 				res.json(singleMevent);  // Show the information requested
 			})
 			.catch((err) => {
 				console.log(err); // If there is any error, tell the client something went wrong on the server
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
 				console.log(err); // If there is any error, tell the client something went wrong on the server
 			});
 	},

 	delete: (req, res) => {
 		Male.findById(req.params.maleId)
 			.then((male) => {
 				const filterMevents = male.mevents.filter((mevent) => mevent._id != req.params.meventId); // Delete the information from the database
 				male.mevents = filterMevents;
 				male.save();
 				res.json(male.mevents);
 			})
 			.catch((err) => {
 				console.log(err); // If there is any error, tell the client something went wrong on the server
 			});
 	}
 };

 module.exports = meventController;