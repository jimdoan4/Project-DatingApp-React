const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
	eventName: String,
	time: Number,
	price: Number,
	withWho: String,
	photoUrl: String
});

const MeventSchema = new Schema({
	eventName: String,
	time: Number,
	price: Number,
	withWho: String,
	photoUrl: String
});

const GeventSchema = new Schema({
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

const McommentSchema = new Schema({
	rating: Number,
	dateAgain: String,
	photoUrl: String,
	withWho: String,
	review: String,
	lessonLearned: String
});

const GcommentSchema = new Schema({
	rating: Number,
	dateAgain: String,
	photoUrl: String,
	withWho: String,
	review: String,
	lessonLearned: String
});

const UserSchema = new Schema({
	firstName: String,
	lastName: String,
	age: Number,
	location: String,
	photoUrl: String,
	bio: String,
	events: [ EventSchema ],
	comments: [ CommentSchema ]
});

const MaleSchema = new Schema({
	firstName: String,
	lastName: String,
	age: Number,
	location: String,
	photoUrl: String,
	bio: String,
	mevents: [ MeventSchema ],
	mcomments: [ McommentSchema ]
});

const GaymaleSchema = new Schema({
	firstName: String,
	lastName: String,
	age: Number,
	location: String,
	photoUrl: String,
	bio: String,
	gevents: [ GeventSchema ],
	gcomments: [ GcommentSchema ]
});

const LesfemaleSchema = new Schema({
	firstName: String,
	lastName: String,
	age: Number,
	location: String,
	photoUrl: String,
	bio: String
});



module.exports = {
	UserSchema: UserSchema,
	CommentSchema: CommentSchema,
	EventSchema: EventSchema,
	MaleSchema: MaleSchema,
	MeventSchema: MeventSchema,
	McommentSchema: McommentSchema,
	GaymaleSchema: GaymaleSchema,
	GeventSchema: GeventSchema,
	GcommentSchema: GcommentSchema,
	LesfemaleSchema: LesfemaleSchema
	
};
