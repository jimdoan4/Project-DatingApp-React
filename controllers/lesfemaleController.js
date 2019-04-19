const Lesfemale = require('../models/Lesfemale.js');

const lesfemaleController = {
   index: (req, res) => {
		Lesfemale.find()
			.then((lesfemales) => {
				console.log(lesfemales);
				res.json(lesfemales);
			})
			.catch((err) => {
				console.log(err);
			});
	},
	create: async (req, res) => {
		try {
			const newLesfemale = req.body;
			const savedLesfemale = await Lesfemale.create(newLesfemale);
			res.json(savedLesfemale);
		} catch (err) {
			console.log(err);
			res.status(500).json(err);
		}
	},
	show: async (req, res) => {
		try {
			const lesfemaleId = req.params.lesfemaleId;
			const lesfemale = await Lesfemale.findById(lesfemaleId);
			res.json(lesfemale);
		} catch (err) {
			console.log(err);
			res.json(err);
				
	}
},
	update: async (req, res) => {
		try {
			const userId = req.params.userId;
			const updatedUser = req.body;
			const savedUser = await User.findByIdAndUpdate(userId, updatedUser);
			res.json(savedUser);
		} catch (err) {
			console.log(err);
			res.status(500).json(err);
		}
	},
	delete: async (req, res) => {
		try {
			const userId = req.params.userId;
			await User.findByIdAndRemove(userId);
			res.json({
				msg: `Successfully Deleted ${userId}`
			});
		} catch (err) {
			console.log(err);
			res.status(500).json(err);
		}
	}
};
    
module.exports = lesfemaleController;






	// index: (req, res) => {
	// 	User.findById(req.params.userId)
	// 		.then((user) => {
	// 			res.json(user.males);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// },
	// create: (req, res) => {
	// 	User.findById(req.params.userId)
	// 		.then((user) => {
	// 			const newMale = new Male(req.body);
	// 			user.males.push(newMale);
	// 			user.save().then((user) => {
	// 				res.json(newMale);
	// 			});
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// },
	// show: (req, res) => {
	// 	User.findById(req.params.userId)
	// 		.then((user) => {
	// 			const singleMale = user.males.id(req.params.maleId);
	// 			res.json(singleMale);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// }
// 	update: (req, res) => {
// 		User.findById(req.params.userId)
// 			.then((user) => {
// 				const updatedEvent = user.events.id(req.params.eventId);
// 				updatedEvent.set(req.body);
// 				user.save();
// 				res.json(updatedEvent);
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 			});
// 	},
// 	delete: (req, res) => {
// 		User.findById(req.params.userId)
// 			.then((user) => {
// 				const filterEvents = user.events.filter((event) => event._id != req.params.eventId);
// 				user.events = filterEvents;
// 				user.save();
// 				res.json(user.events);
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 			});
// 	}
// };


