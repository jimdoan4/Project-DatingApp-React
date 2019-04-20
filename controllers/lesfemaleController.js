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
			const lesfemaleId = req.params.lesfemaleId;
			const updatedLesfemale = req.body;
			const savedLesfemale = await Lesfemale.findByIdAndUpdate(lesfemaleId, updatedLesfemale);
			res.json(savedLesfemale);
		} catch (err) {
			console.log(err);
			res.status(500).json(err);
		}
	},
	delete: async (req, res) => {
		try {
			const lesfemaleId = req.params.lesfemaleId;
			await Lesfemale.findByIdAndRemove(lesfemaleId);
			res.json({
				msg: `Successfully Deleted ${lesfemaleId}`
			});
		} catch (err) {
			console.log(err);
			res.status(500).json(err);
		}
	}
};
    
module.exports = lesfemaleController;






