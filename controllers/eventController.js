const Event = require('../models/Event.js');
const User = require('../models/User.js');


const eventController = {
	index: (req, res) => {
		User.findById(req.params.userId)  // Find all of the users events from the database
			.then((user) => {
				res.json(user.events);
			})
			.catch((err) => {
				console.log(err); // If there is any error, tell the client something went wrong on the server
			});
	},
	create: (req, res) => {
		User.findById(req.params.userId)
			.then((user) => {
				const newEvent = new Event(req.body);  // create a new Event, let Mongoose give the default values
				user.events.push(newEvent);
				user.save().then((user) => {
					res.json(newEvent);
				});
			})
			.catch((err) => {
				console.log(err); // If there is any error, tell the client something went wrong on the server
			});
	},
	
	show: (req, res) => {
		User.findById(req.params.userId)
			.then((user) => {
				const singleEvent = user.events.id(req.params.eventId);
				res.json(singleEvent); // Show the information requested
			})
			.catch((err) => {
				console.log(err); // If there is any error, tell the client something went wrong on the server
			});
	},

	update: (req, res) => {
		User.findById(req.params.userId)
			.then((user) => {
				const updatedEvent = user.events.id(req.params.eventId);
				updatedEvent.set(req.body);
				user.save();
				res.json(updatedEvent);
			})
			.catch((err) => {
				console.log(err); // If there is any error, tell the client something went wrong on the server
			});
	},

	delete: (req, res) => {
		User.findById(req.params.userId)
			.then((user) => {
				const filterEvents = user.events.filter((event) => event._id != req.params.eventId); // Delete the information from the database
				user.events = filterEvents;
				user.save();
				res.json(user.events);
			})
			.catch((err) => {
				console.log(err); // If there is any error, tell the client something went wrong on the server
			});
	},
};

module.exports = eventController;
