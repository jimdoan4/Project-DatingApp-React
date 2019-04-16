const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
	eventName: String,
	time: Number,
	price: Number,
	withWho: String,
	photoUrl: String
});

const CommentSchema = new Schema({
	rating: Number,
	dateAgain: String,
	photoUrl: String,
	withWho: String,
	review: String,
	lessonLearned: String
});

const UserSchema = new Schema({
	userName: String,
	password: String,
	firstName: String,
	lastName: String,
	age: Number,
	location: String,
	photoUrl: String,
	bio: String,
	events: [ EventSchema ],
	comments: [ CommentSchema ]
});

module.exports = {
	CommentSchema: CommentSchema,
	EventSchema: EventSchema,
	UserSchema: UserSchema
};
