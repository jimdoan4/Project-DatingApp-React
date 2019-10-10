require('dotenv').config();
const mongoose = require('mongoose');

const User = require('../models/User.js');
const Comment = require('../models/Comment.js');
const Mcomment = require('../models/Mcomment.js');
const Event = require('../models/Event.js');
const Mevent = require('../models/Mevent.js');
const Male = require('../models/Male.js');


const ihop = new Event({
	eventName: 'Houstons Bar and Grill',
	time: 7,
	price: 20.0,
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

const ihops = new Mevent({
	eventName: 'Houstons Bar and Grill',
	time: 7,
	price: 20.0,
	withWho: 'Sara Henderson',
	photoUrl: 'https://cdn.pixabay.com/photo/2018/02/07/20/58/girl-3137998_960_720.jpg'
});



const greats = new Mcomment({
	rating: 9,
	dateAgain: 'Yes',
	photoUrl: 'https://cdn.pixabay.com/photo/2018/02/07/20/58/girl-3137998_960_720.jpg',
	withWho: 'Sara Henderson',
	review: 'She was so funny',
	lessonLearned: 'Relax next time and do not drink too much'
});

//straight male
const m1 = new Male({
	firstName: 'James',
	lastName: 'Han',
	photoUrl: 'http://www.modelsearchuk.com/BIR_0176.JPG',
	age: 28,
	location: 'Fulton, Georgia',
	bio: 'I just graduated from UGA am ready to start dating again. I love cats and coding Python on a daily basis',
	mevents: [ ihops ],
	mcomments: [ greats ]
});

const m2 = new Male({
	firstName: 'James',
	lastName: 'Han',
	photoUrl: 'https://i.pinimg.com/originals/e5/6b/79/e56b799b365e63c41041feb38fb7e965.jpg',
	age: 28,
	location: 'Fulton, Georgia',
	bio: 'I just graduated from UGA am ready to start dating again. I love cats and coding Python on a daily basis',
	mevents: [ ihops ],
	mcomments: [ greats ]
});

const m3 = new Male({
	firstName: 'James',
	lastName: 'Han',
	photoUrl:
		'https://feedbox.com/wp-content/uploads/2018/04/this-guys-tinder-experiment-shows-how-differently-girls-respond-to-hot-guys.jpg',
	age: 28,
	location: 'Fulton, Georgia',
	bio: 'I just graduated from UGA am ready to start dating again. I love cats and coding Python on a daily basis',
	mevents: [ ihops ],
	mcomments: [ greats ]
});

const m4 = new Male({
	firstName: 'James',
	lastName: 'Han',
	photoUrl: 'https://i.pinimg.com/originals/6f/6a/d8/6f6ad850a31e051d40d309f675df27e2.jpg',
	age: 28,
	location: 'Fulton, Georgia',
	bio: 'I just graduated from UGA am ready to start dating again. I love cats and coding Python on a daily basis',
	mevents: [ ihops ],
	mcomments: [ greats ]
});

const m5 = new Male({
	firstName: 'James',
	lastName: 'Han',
	photoUrl: 'https://i.pinimg.com/236x/45/93/76/459376136f5fb331926028a5d87e0c7d.jpg',
	age: 28,
	location: 'Fulton, Georgia',
	bio: 'I just graduated from UGA am ready to start dating again. I love cats and coding Python on a daily basis',
	mevents: [ ihops ],
	mcomments: [ greats ]
});

const m6 = new Male({
	firstName: 'James',
	lastName: 'Han',
	photoUrl: 'https://i.pinimg.com/originals/70/03/e1/7003e1116cc4b92f7f902c154d194fd9.jpg',
	age: 28,
	location: 'Fulton, Georgia',
	bio: 'I just graduated from UGA am ready to start dating again. I love cats and coding Python on a daily basis',
	mevents: [ ihops ],
	mcomments: [ greats ]
});

const m7 = new Male({
	firstName: 'James',
	lastName: 'Han',
	photoUrl:
		'https://mediaslide-europe.storage.googleapis.com/success/pictures/2784/6700/large-1515419345-f30817cb31e089ee83dcc874af4611ee.jpg',
	age: 28,
	location: 'Fulton, Georgia',
	bio: 'I just graduated from UGA am ready to start dating again. I love cats and coding Python on a daily basis',
	mevents: [ ihops ],
	mcomments: [ greats ]
});

const m8 = new Male({
	firstName: 'James',
	lastName: 'Han',
	photoUrl: 'http://www.celebs.gallery/wp-content/uploads/2015/07/zac-efron-we-are-your-friends-promos_2.jpg',
	age: 28,
	location: 'Fulton, Georgia',
	bio: 'I just graduated from UGA am ready to start dating again. I love cats and coding Python on a daily basis',
	mevents: [ ihops ],
	mcomments: [ greats ]
});

const m9 = new Male({
	firstName: 'James',
	lastName: 'Han',
	photoUrl: 'https://img.izismile.com/img/img3/20100225/most_beautiful_men_25.jpg',
	age: 28,
	location: 'Fulton, Georgia',
	bio: 'I just graduated from UGA am ready to start dating again. I love cats and coding Python on a daily basis',
	mevents: [ ihops ],
	mcomments: [ greats ]
});

const m10 = new Male({
	firstName: 'James',
	lastName: 'Han',
	photoUrl: 'https://images.unsplash.com/photo-1505503693641-1926193e8d57?ixlib=rb-1.2.1&w=1000&q=80',
	age: 28,
	location: 'Fulton, Georgia',
	bio: 'I just graduated from UGA am ready to start dating again. I love cats and coding Python on a daily basis',
	mevents: [ ihops ],
	mcomments: [ greats ]
});

const m11 = new Male({
	firstName: 'James',
	lastName: 'Han',
	photoUrl: 'http://profilepicturesdp.com/wp-content/uploads/2018/07/profile-picture-guy-3.jpg',
	age: 28,
	location: 'Fulton, Georgia',
	bio: 'I just graduated from UGA am ready to start dating again. I love cats and coding Python on a daily basis',
	mevents: [ ihops ],
	mcomments: [ greats ]
});

const m12 = new Male({
	firstName: 'James',
	lastName: 'Han',
	photoUrl:
		'https://i.pinimg.com/736x/cd/09/e1/cd09e11b6742515a7e6237688d16cfa9--top-male-models-male-model-photos.jpg',
	age: 28,
	location: 'Fulton, Georgia',
	bio: 'I just graduated from UGA am ready to start dating again. I love cats and coding Python on a daily basis',
	mevents: [ ihops ],
	mcomments: [ greats ]
});

//straight female
const sara = new User({
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
	firstName: 'Katie',
	lastName: 'Bar',
	photoUrl:
		'https://media.wmagazine.com/photos/59c69ca30aa1bc2891eae3c9/master/w_320,c_limit/21879710_1053867184749691_3233441853638443008_n.jpg',
	age: 25,
	location: 'Rome, Georgia',
	bio: 'I just graduated from GA Tech am ready to start dating again. I love cats and coding Java on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});

const jackie = new User({
	userName: 'Sara4',
	firstName: 'Molly',
	lastName: 'Patterson',
	photoUrl:
		'https://i.pinimg.com/236x/52/c6/b8/52c6b82a8b8d1ec763ba0d42792a5fab--curvy-girl-fashion-plus-size-fashion.jpg',
	age: 26,
	location: 'Lilburn, Georgia',
	bio: 'I just graduated from GA Tech am ready to start dating again. I love cats and coding Java on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});

const carla = new User({
	firstName: 'Kacy',
	lastName: 'Doan',
	photoUrl: 'http://www.topdatingapp.net/wp-content/uploads/2018/07/bbw6-1.jpg',
	age: 19,
	location: 'Hall, Georgia',
	bio: 'I just graduated from GA Tech am ready to start dating again. I love cats and coding Java on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});

const amy = new User({
	firstName: 'Ruby',
	lastName: 'Falls',
	photoUrl: 'http://www.1backgrounds.com/wp-content/uploads/2018/07/Plus-Size-Jeans-For-Curvy-Women-13.jpg',
	age: 20,
	location: 'Atlanta, Georgia',
	bio: 'I just graduated from GA Tech am ready to start dating again. I love cats and coding Java on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});

const molly = new User({
	firstName: 'Valley',
	lastName: 'Hall',
	photoUrl:
		'https://i.pinimg.com/236x/15/7a/cf/157acf6b526dea5c191079c020f3419d--leather-vest-outfit-womens-leather-vest.jpg',
	age: 21,
	location: 'Henry, Georgia',
	bio: 'I just graduated from GA Tech am ready to start dating again. I love cats and coding Java on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});

const sam = new User({
	firstName: 'Kate',
	lastName: 'Jones',
	photoUrl: 'https://i.pinimg.com/originals/04/60/89/046089396c1efa078ef20bb90213062a.jpg',
	age: 29,
	location: 'Gwinnet, Georgia',
	bio: 'I just graduated from GA Tech am ready to start dating again. I love cats and coding Java on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});

const sams = new User({
	firstName: 'Veronica',
	lastName: 'Doan',
	photoUrl: 'https://images.hellogiggles.com/uploads/2016/09/25054631/51502.0.zoom_.jpg',
	age: 31,
	location: 'Dekalb, Georgia',
	bio: 'I just graduated from GA Tech am ready to start dating again. I love cats and coding Java on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});

const samss = new User({
	firstName: 'Dora',
	lastName: 'Explorer',
	photoUrl: 'http://cdn.theeverygirl.com/wp-content/uploads/2016/03/lbd.jpg',
	age: 27,
	location: 'Dalton, Georgia',
	bio: 'I just graduated from GA Tech am ready to start dating again. I love cats and coding Java on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});

const samsss = new User({
	firstName: 'Mandy',
	lastName: 'Hones',
	photoUrl: 'https://i.pinimg.com/originals/ee/fa/25/eefa25d95d883d0d1d10557170a8cfc9.jpg',
	age: 24,
	location: 'Atlanta, Georgia',
	bio: 'I just graduated from GA Tech am ready to start dating again. I love cats and coding Java on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});

const samssss = new User({
	firstName: 'Pam',
	lastName: 'Anderson',
	photoUrl: 'https://photo.venus.com/im/17078926.jpg?preset=product',
	age: 19,
	location: 'Morrow, Georgia',
	bio: 'I just graduated from GA Tech am ready to start dating again. I love cats and coding Java on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});



Male.deleteMany({})
	.then(() => m1.save())
	.then(() => m2.save())
	.then(() => m3.save())
	.then(() => m4.save())
	.then(() => m5.save())
	.then(() => m6.save())
	.then(() => m7.save())
	.then(() => m8.save())
	.then(() => m9.save())
	.then(() => m10.save())
	.then(() => m11.save())
	.then(() => m12.save())
	.then(() => console.log('Successful Save'))

User.deleteMany({})
	.then(() => sara.save())
	.then(() => abby.save())
	.then(() => sam.save())
	.then(() => molly.save())
	.then(() => amy.save())
	.then(() => carla.save())
	.then(() => jackie.save())
	.then(() => tony.save())
	.then(() => sams.save())
	.then(() => samss.save())
	.then(() => samsss.save())
	.then(() => samssss.save())
	.then(() => console.log('Successful Save'))
	.then(() => mongoose.connection.close());
