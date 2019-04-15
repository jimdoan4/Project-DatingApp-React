const Comment = require('../models/Comment.js');
const User = require('../models/User.js');

const commentController = {
	index: (req, res) => {
		User.findById(req.params.userId)
			.then((user) => {
				res.json(user.comments);
			})
			.catch((err) => {
				console.log(err);
			});
	},
	create: (req, res) => {
		User.findById(req.params.userId)
			.then((user) => {
				const newComment = new Comment(req.body);
				user.comments.push(newComment);
				user.save().then((user) => {
					res.json(newComment);
				});
			})
			.catch((err) => {
				console.log(err);
			});
	},
	show: (req, res) => {
		User.findById(req.params.userId)
			.then((user) => {
				const singleComment = user.comments.id(req.params.commentId);
				res.json(singleComment);
			})
			.catch((err) => {
				console.log(err);
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
				console.log(err);
			});
	},
	delete: (req, res) => {
		User.findById(req.params.userId)
			.then((user) => {
				const filterComments = user.comments.filter((comment) => comment._id != req.params.commentId);
				user.comments = filterComments;
				user.save();
				res.json(user.comments);
			})
			.catch((err) => {
				console.log(err);
			});
	}
};

module.exports = commentController;
