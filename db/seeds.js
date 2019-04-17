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
	location: 'Atlanta, Georgia',
	bio: 'I just graduated from GA Tech am ready to start dating again. I love cats and coding Java on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});

const abby = new User({
	userName: 'Sara4',
	password: 'password',
	firstName: 'Abby',
	lastName: 'Fowler',
    photoUrl: 'http://s2.favim.com/orig/34/dress-fashion-girl-grey-long-hair-Favim.com-273028.jpg',
	age: 23,
	location: 'Riverdale, Georgia',
	bio: 'I just graduated from GA Tech am ready to start dating again. I love cats and coding Java on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});

const tony = new User({
	userName: 'Sara4',
	password: 'password',
	firstName: 'Katie',
	lastName: 'Bar',
    photoUrl: 'https://media.wmagazine.com/photos/59c69ca30aa1bc2891eae3c9/master/w_320,c_limit/21879710_1053867184749691_3233441853638443008_n.jpg',
	age: 25,
	location: 'Rome, Georgia',
	bio: 'I just graduated from GA Tech am ready to start dating again. I love cats and coding Java on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});

// const jackie = new User({
// 	userName: 'Sara4',
// 	password: 'password',
// 	firstName: 'Sara',
// 	lastName: 'Henderson',
//     photoUrl: 'https://cdn.pixabay.com/photo/2018/02/07/20/58/girl-3137998_960_720.jpg',
// 	age: 21,
// 	location: 'Atlanta, Georgia 30324',
// 	bio: 'I just graduated from GA Tech am ready to start dating again. I love cats and coding Java on a daily basis',
// 	events: [ ihop ],
// 	comments: [ great ]
// });

// const carla = new User({
// 	userName: 'Sara4',
// 	password: 'password',
// 	firstName: 'Sara',
// 	lastName: 'Henderson',
//     photoUrl: 'https://cdn.pixabay.com/photo/2018/02/07/20/58/girl-3137998_960_720.jpg',
// 	age: 21,
// 	location: 'Atlanta, Georgia 30324',
// 	bio: 'I just graduated from GA Tech am ready to start dating again. I love cats and coding Java on a daily basis',
// 	events: [ ihop ],
// 	comments: [ great ]
// });

// const amy = new User({
// 	userName: 'Sara4',
// 	password: 'password',
// 	firstName: 'Sara',
// 	lastName: 'Henderson',
//     photoUrl: 'https://cdn.pixabay.com/photo/2018/02/07/20/58/girl-3137998_960_720.jpg',
// 	age: 21,
// 	location: 'Atlanta, Georgia 30324',
// 	bio: 'I just graduated from GA Tech am ready to start dating again. I love cats and coding Java on a daily basis',
// 	events: [ ihop ],
// 	comments: [ great ]
// });

// const molly = new User({
// 	userName: 'Sara4',
// 	password: 'password',
// 	firstName: 'Sara',
// 	lastName: 'Henderson',
//     photoUrl: 'https://cdn.pixabay.com/photo/2018/02/07/20/58/girl-3137998_960_720.jpg',
// 	age: 21,
// 	location: 'Atlanta, Georgia 30324',
// 	bio: 'I just graduated from GA Tech am ready to start dating again. I love cats and coding Java on a daily basis',
// 	events: [ ihop ],
// 	comments: [ great ]
// });

// const sam = new User({
// 	userName: 'Sara4',
// 	password: 'password',
// 	firstName: 'Sara',
// 	lastName: 'Henderson',
//     photoUrl: 'https://cdn.pixabay.com/photo/2018/02/07/20/58/girl-3137998_960_720.jpg',
// 	age: 21,
// 	location: 'Atlanta, Georgia 30324',
// 	bio: 'I just graduated from GA Tech am ready to start dating again. I love cats and coding Java on a daily basis',
// 	events: [ ihop ],
// 	comments: [ great ]
// });
// const sams = new User({
// 	userName: 'Sara4',
// 	password: 'password',
// 	firstName: 'Sara',
// 	lastName: 'Henderson',
//     photoUrl: 'https://cdn.pixabay.com/photo/2018/02/07/20/58/girl-3137998_960_720.jpg',
// 	age: 21,
// 	location: 'Atlanta, Georgia 30324',
// 	bio: 'I just graduated from GA Tech am ready to start dating again. I love cats and coding Java on a daily basis',
// 	events: [ ihop ],
// 	comments: [ great ]
// });

// const samss = new User({
// 	userName: 'Sara4',
// 	password: 'password',
// 	firstName: 'Sara',
// 	lastName: 'Henderson',
//     photoUrl: 'https://cdn.pixabay.com/photo/2018/02/07/20/58/girl-3137998_960_720.jpg',
// 	age: 21,
// 	location: 'Atlanta, Georgia 30324',
// 	bio: 'I just graduated from GA Tech am ready to start dating again. I love cats and coding Java on a daily basis',
// 	events: [ ihop ],
// 	comments: [ great ]
// });

// const samsss = new User({
// 	userName: 'Sara4',
// 	password: 'password',
// 	firstName: 'Sara',
// 	lastName: 'Henderson',
//     photoUrl: 'https://cdn.pixabay.com/photo/2018/02/07/20/58/girl-3137998_960_720.jpg',
// 	age: 21,
// 	location: 'Atlanta, Georgia 30324',
// 	bio: 'I just graduated from GA Tech am ready to start dating again. I love cats and coding Java on a daily basis',
// 	events: [ ihop ],
// 	comments: [ great ]
// });

// const samssss = new User({
// 	userName: 'Sara4',
// 	password: 'password',
// 	firstName: 'Sara',
// 	lastName: 'Henderson',
//     photoUrl: 'https://cdn.pixabay.com/photo/2018/02/07/20/58/girl-3137998_960_720.jpg',
// 	age: 21,
// 	location: 'Atlanta, Georgia 30324',
// 	bio: 'I just graduated from GA Tech am ready to start dating again. I love cats and coding Java on a daily basis',
// 	events: [ ihop ],
// 	comments: [ great ]
// });

// const samsssss = new User({
// 	userName: 'Sara4',
// 	password: 'password',
// 	firstName: 'Sara',
// 	lastName: 'Henderson',
//     photoUrl: 'https://cdn.pixabay.com/photo/2018/02/07/20/58/girl-3137998_960_720.jpg',
// 	age: 21,
// 	location: 'Atlanta, Georgia 30324',
// 	bio: 'I just graduated from GA Tech am ready to start dating again. I love cats and coding Java on a daily basis',
// 	events: [ ihop ],
// 	comments: [ great ]
// });



User.deleteMany({})
	.then(() => sara.save())
    .then(() => abby.save())
    // .then(() => sam.save())
    // .then(() => molly.save())
    // .then(() => amy.save())
    // .then(() => carla.save())
    // .then(() => jackie.save())
    .then(() => tony.save())
    // .then(() => sams.save())
    // .then(() => samss.save())
    // .then(() => samsss.save())
    // .then(() => samssss.save())
	.then(() => console.log('Successful Save'))
	.then(() => mongoose.connection.close());