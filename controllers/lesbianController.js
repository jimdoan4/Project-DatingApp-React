const Lesbian = require('../models/Lesbian.js');

const lesbianController = {
   index: (req, res) => {
		Lesbian.find()
			.then((lesbians) => {
				console.log(lesbians);
				res.json(lesbians);
			})
			.catch((err) => {
				console.log(err);
			});
	},
	create: async (req, res) => {
		try {
			const newLesbian = req.body;
			const savedLesbian = await Lesbian.create(newLesbian);
			res.json(savedLesbian);
		} catch (err) {
			console.log(err);
			res.status(500).json(err);
		}
	},
	show: async (req, res) => {
		try {
			const lesbianId = req.params.lesbianId;
			const lesbian = await Lesbian.findById(lesbianId);
			res.json(lesbian);
		} catch (err) {
			console.log(err);
			res.json(err);
				
	}
},
	update: async (req, res) => {
		try {
			const lesbianId = req.params.lesbianId;
			const updatedLesbian = req.body;
			const savedLesbian = await Lesbian.findByIdAndUpdate(lesbianId, updatedLesbian);
			res.json(savedLesbian);
		} catch (err) {
			console.log(err);
			res.status(500).json(err);
		}
	},
	delete: async (req, res) => {
		try {
			const lesbianId = req.params.lesbianId;
			await Lesbian.findByIdAndRemove(lesbianId);
			res.json({
				msg: `Successfully Deleted ${lesbianId}`
			});
		} catch (err) {
			console.log(err);
			res.status(500).json(err);
		}
	}
};
    
module.exports = lesbianController;






