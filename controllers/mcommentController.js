const Mcomment = require('../models/Mcomment.js');
const Male = require('../models/Male.js');

const mcommentController = {
	index: (req, res) => {
		Male.findById(req.params.maleId)
			.then((male) => {
				res.json(male.mcomments);
			})
			.catch((err) => {
				console.log(err);
			});
	},
	create: (req, res) => {
		Male.findById(req.params.maleId)
			.then((male) => {
				const newMcomment = new Mcomment(req.body);
				male.mcomments.push(newMcomment);
				male.save().then((male) => {
					res.json(newMcomment);
				});
			})
			.catch((err) => {
				console.log(err);
			});
	},
	show: (req, res) => {
		Male.findById(req.params.maleId)
			.then((male) => {
				const singleMcomment = male.mcomments.id(req.params.mcommentId);
				res.json(singleMcomment);
			})
			.catch((err) => {
				console.log(err);
			});
	},
	update: (req, res) => {
		Male.findById(req.params.maleId)
			.then((male) => {
				const updatedMcomment = male.mcomments.id(req.params.mcommentId);
				updatedMcomment.set(req.body);
				male.save();
				res.json(updatedMcomment);
			})
			.catch((err) => {
				console.log(err);
			});
	},
	delete: (req, res) => {
		Male.findById(req.params.maleId)
			.then((male) => {
				const filterMcomments = male.mcomments.filter((mcomment) => mcomment._id != req.params.mcommentId);
				male.mcomments = filterMcomments;
				male.save();
				res.json(male.mcomments);
			})
			.catch((err) => {
				console.log(err);
			});
	}
};

module.exports = mcommentController;
