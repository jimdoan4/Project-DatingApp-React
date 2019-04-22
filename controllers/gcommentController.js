const Gcomment = require('../models/Gcomment.js');
const Gaymale = require('../models/Gaymale.js');

const gcommentController = {
	index: (req, res) => {
		Gaymale.findById(req.params.gaymaleId)
			.then((gaymale) => {
				res.json(gaymale.gcomments);
			})
			.catch((err) => {
				console.log(err);
			});
	},
	create: (req, res) => {
		Gaymale.findById(req.params.gaymaleId)
			.then((gaymale) => {
				const newGcomment = new Gcomment(req.body);
				gaymale.gcomments.push(newGcomment);
				gaymale.save().then((gaymale) => {
					res.json(newGcomment);
				});
			})
			.catch((err) => {
				console.log(err);
			});
	},
	show: (req, res) => {
		Gaymale.findById(req.params.gaymaleId)
			.then((gaymale) => {
				const singleGcomment = gaymale.gcomments.id(req.params.gcommentId);
				res.json(singleGcomment);
			})
			.catch((err) => {
				console.log(err);
			});
	},
	update: (req, res) => {
		Gaymale.findById(req.params.gaymaleId)
			.then((gaymale) => {
				const updatedGcomment = gaymale.gcomments.id(req.params.gcommentId);
				updatedGcomment.set(req.body);
				gaymale.save();
				res.json(updatedGcomment);
			})
			.catch((err) => {
				console.log(err);
			});
	},
	delete: (req, res) => {
		Gaymale.findById(req.params.gaymaleId)
			.then((gaymale) => {
				const filterGcomments = gaymale.gcomments.filter((gcomment) => gcomment._id != req.params.gcommentId);
				gaymale.gcomments = filterGcomments;
				gaymale.save();
				res.json(gaymale.gcomments);
			})
			.catch((err) => {
				console.log(err);
			});
	}
};

module.exports = gcommentController;
