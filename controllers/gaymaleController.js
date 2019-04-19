const Gaymale = require('../models/Gaymale.js');


const gaymaleController = {
   index: (req, res) => {
		Gaymale.find()
			.then((gaymales) => {
				console.log(gaymales);
				res.json(gaymales);
			})
			.catch((err) => {
				console.log(err);
			});
	},
	create: async (req, res) => {
		try {
			const newGaymale = req.body;
			const savedGaymale = await Gaymale.create(newGaymale);
			res.json(savedGaymale);
		} catch (err) {
			console.log(err);
			res.status(500).json(err);
		}
	},
	show: async (req, res) => {
		try {
			const gaymaleId = req.params.gaymaleId;
			const gaymale = await GayMale.findById(gaymaleId);
			res.json(gaymale);
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
    
module.exports = gaymaleController;
