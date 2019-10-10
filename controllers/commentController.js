const Comment = require('../models/Comment.js');
const User = require('../models/User.js');

const commentController = {
	index: (req, res) => {
		User.findById(req.params.userId) // Find all of the users comments from the database
			.then((user) => {
				res.json(user.comments);
			})
			.catch((err) => {
				console.log(err); // If there is any error, tell the client something went wrong on the server
			});
	},
	create: (req, res) => {
		User.findById(req.params.userId)
			.then((user) => {
				const newComment = new Comment(req.body); // create a new Comment, let Mongoose give the default values
				user.comments.push(newComment);
				user.save().then((user) => {
					res.json(newComment);
				});
			})
			.catch((err) => {
				console.log(err); // If there is any error, tell the client something went wrong on the server
			});
	},
	show: (req, res) => {
		User.findById(req.params.userId)
			.then((user) => {
				const singleComment = user.comments.id(req.params.commentId);
				res.json(singleComment); // Show the information requested
			})
			.catch((err) => {
				console.log(err); // If there is any error, tell the client something went wrong on the server
			});
	},
	update: (req, res) => {
		User.findById(req.params.userId)
			.then((user) => {
				const updatedComment = user.comments.id(req.params.commentId);
				updatedComment.set(req.body);
				user.save();
				res.json(updatedComment);
			})
			.catch((err) => {
				console.log(err); // If there is any error, tell the client something went wrong on the server
			});
	},
	delete: (req, res) => {
		User.findById(req.params.userId)
			.then((user) => {
				const filterComments = user.comments.filter((comment) => comment._id != req.params.commentId); // Delete the information from the database
				user.comments = filterComments;
				user.save();
				res.json(user.comments);
			})
			.catch((err) => {
				console.log(err); // If there is any error, tell the client something went wrong on the server
			});
	}
};

module.exports = commentController;
