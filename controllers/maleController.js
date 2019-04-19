const Male = require('../models/Male.js');


const maleController = {
   index: (req, res) => {
		Male.find()
			.then((males) => {
				console.log(males);
				res.json(males);
			})
			.catch((err) => {
				console.log(err);
			});
	},
	create: async (req, res) => {
		try {
			const newMale = req.body;
			const savedMale = await Male.create(newMale);
			res.json(savedMale);
		} catch (err) {
			console.log(err);
			res.status(500).json(err);
		}
	},
	show: async (req, res) => {
		try {
			const maleId = req.params.maleId;
			const male = await Male.findById(maleId);
			res.json(male);
		} catch (err) {
			console.log(err);
			res.json(err);
				
	}
},
	update: async (req, res) => {
		try {
			const maleId = req.params.maleId;
			const updatedMale = req.body;
			const savedMale = await Male.findByIdAndUpdate(maleId, updatedMale);
			res.json(savedMale);
		} catch (err) {
			console.log(err);
			res.status(500).json(err);
		}
	},
	delete: async (req, res) => {
		try {
			const maleId = req.params.maleId;
			await Male.findByIdAndRemove(maleId);
			res.json({
				msg: `Successfully Deleted ${maleId}`
			});
		} catch (err) {
			console.log(err);
			res.status(500).json(err);
		}
	}
};
    
module.exports = maleController;






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


