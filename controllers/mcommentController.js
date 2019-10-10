const Mcomment = require('../models/Mcomment.js');
const Male = require('../models/Male.js');

const mcommentController = {
	index: (req, res) => {
		Male.findById(req.params.maleId) // Find all of the males comments from the database
			.then((male) => {
				res.json(male.mcomments);
			})
			.catch((err) => {
				console.log(err); // If there is any error, tell the client something went wrong on the server
			});
	},
	create: (req, res) => {
		Male.findById(req.params.maleId)
			.then((male) => {
				const newMcomment = new Mcomment(req.body);  // create a new Male Comment, let Mongoose give the default values
				male.mcomments.push(newMcomment);
				male.save().then((male) => {
					res.json(newMcomment);
				});
			})
			.catch((err) => {
				console.log(err); // If there is any error, tell the client something went wrong on the server
			});
	},
	show: (req, res) => {
		Male.findById(req.params.maleId)
			.then((male) => {
				const singleMcomment = male.mcomments.id(req.params.mcommentId);
				res.json(singleMcomment); // Show the information requested
			})
			.catch((err) => {
				console.log(err); // If there is any error, tell the client something went wrong on the server
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
				console.log(err); // If there is any error, tell the client something went wrong on the server
			});

	},
	delete: (req, res) => {
		Male.findById(req.params.maleId)
			.then((male) => {
				const filterMcomments = male.mcomments.filter((mcomment) => mcomment._id != req.params.mcommentId); // Delete the information from the database
				male.mcomments = filterMcomments;
				male.save();
				res.json(male.mcomments);
			})
			.catch((err) => {
				console.log(err); // If there is any error, tell the client something went wrong on the server
			});
	}
};

module.exports = mcommentController;
