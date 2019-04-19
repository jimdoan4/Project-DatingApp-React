const Event = require('../models/Event.js');
const User = require('../models/User.js');


const eventController = {
	index: (req, res) => {
		User.findById(req.params.userId)
			.then((user) => {
				res.json(user.events);
			})
			.catch((err) => {
				console.log(err);
			});
	},
	create: (req, res) => {
		User.findById(req.params.userId)
			.then((user) => {
				const newEvent = new Event(req.body);
				user.events.push(newEvent);
				user.save().then((user) => {
					res.json(newEvent);
				});
			})
			.catch((err) => {
				console.log(err);
			});
	},
	
	show: (req, res) => {
		User.findById(req.params.userId)
			.then((user) => {
				const singleEvent = user.events.id(req.params.eventId);
				res.json(singleEvent);
			})
			.catch((err) => {
				console.log(err);
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
				console.log(err);
			});
	},

	delete: (req, res) => {
		User.findById(req.params.userId)
			.then((user) => {
				const filterEvents = user.events.filter((event) => event._id != req.params.eventId);
				user.events = filterEvents;
				user.save();
				res.json(user.events);
			})
			.catch((err) => {
				console.log(err);
			});
	},
};

module.exports = eventController;
