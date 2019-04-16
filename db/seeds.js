require('dotenv').config();
const mongoose = require('mongoose');

const User = require('../models/User.js');
const Comment = require('../models/Comment.js');
const Event = require('../models/Event.js');

const ihop = new Event({
	eventName: 'Houstons Bar and Grill',
	time: 7,
	price: 20.00,
	withWho: 'Sara Henderson',
	photoUrl: 'https://cdn.pixabay.com/photo/2018/02/07/20/58/girl-3137998_960_720.jpg'
});

const great = new Comment({
	rating: 9,
	dateAgain: 'Yes',
	photoUrl: 'https://cdn.pixabay.com/photo/2018/02/07/20/58/girl-3137998_960_720.jpg',
	withWho: 'Sara Henderson',
	review: 'She was so funny',
	lessonLearned: 'Relax next time and do not drink too much'
});

const sara = new User({
	userName: 'Sara4',
	password: 'password',
	firstName: 'Sara',
	lastName: 'Henderson',
    photoUrl: 'https://cdn.pixabay.com/photo/2018/02/07/20/58/girl-3137998_960_720.jpg',
	age: 21,
	location: 'Atlanta, Georgia 30324',
	bio: 'I just graduated from GA Tech am ready to start dating again. I love cats and coding Java on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});


User.deleteMany({})
	.then(() => sara.save())
	.then(() => console.log('Successful Save'))
	.then(() => mongoose.connection.close());