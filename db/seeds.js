require('dotenv').config();
const mongoose = require('mongoose');

const User = require('../models/User.js');
const Comment = require('../models/Comment.js');
const Event = require('../models/Event.js');
const Male = require('../models/Male.js');
const Gaymale = require('../models/Gaymale.js');
const Lesfemale = require('../models/Lesfemale.js');

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
const male = new Male({
	firstName: 'James',
	lastName: 'Han',
    photoUrl: 'http://www.modelsearchuk.com/BIR_0176.JPG',
	age: 28,
	location: 'Fulton, Georgia',
	bio: 'I just graduated from UGA am ready to start dating again. I love cats and coding Python on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});

const gaymale = new Gaymale({
	firstName: 'Joe',
	lastName: 'Hender',
    photoUrl: 'https://mediaslide-europe.storage.googleapis.com/models1/pictures/2892/10290/profile-1536250406-54c38beb13750f6fe1e7427914035bec.jpg',
	age: 28,
	location: 'Fulton, Georgia',
	bio: 'I just graduated from UGA am ready to start dating again. I love cats and coding Python on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});

const female = new Lesfemale({
	firstName: 'Jackie',
	lastName: 'Hank',
    photoUrl: 'https://www.lulus.com/images/product/xlarge/3768760_772062.jpg?w=331',
	age: 28,
	location: 'Fulton, Georgia',
	bio: 'I just graduated from UGA am ready to start dating again. I love cats and coding Python on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});

const a = new Male({
	firstName: 'James',
	lastName: 'Han',
    photoUrl: 'https://i.pinimg.com/736x/e4/e7/8c/e4e78c0a1bf12d307b589227de626a0b--gorgeous-men-beautiful-people.jpg',
	age: 28,
	location: 'Fulton, Georgia',
	bio: 'I just graduated from UGA am ready to start dating again. I love cats and coding Python on a daily basis',
	events: [ ihop ],
	comments: [ great ]
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

const jackie = new User({
	userName: 'Sara4',
	password: 'password',
	firstName: 'Molly',
	lastName: 'Patterson',
    photoUrl: 'https://i.pinimg.com/236x/52/c6/b8/52c6b82a8b8d1ec763ba0d42792a5fab--curvy-girl-fashion-plus-size-fashion.jpg',
	age: 26,
	location: 'Lilburn, Georgia',
	bio: 'I just graduated from GA Tech am ready to start dating again. I love cats and coding Java on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});

const carla = new User({
	userName: 'Sara4',
	password: 'password',
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
	userName: 'Sara4',
	password: 'password',
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
	userName: 'Sara4',
	password: 'password',
	firstName: 'Valley',
	lastName: 'Hall',
    photoUrl: 'https://i.pinimg.com/236x/15/7a/cf/157acf6b526dea5c191079c020f3419d--leather-vest-outfit-womens-leather-vest.jpg',
	age: 21,
	location: 'Henry, Georgia',
	bio: 'I just graduated from GA Tech am ready to start dating again. I love cats and coding Java on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});

const sam = new User({
	userName: 'Sara4',
	password: 'password',
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
	userName: 'Sara4',
	password: 'password',
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
	userName: 'Sara4',
	password: 'password',
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
	userName: 'Sara4',
	password: 'password',
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
	userName: 'Sara4',
	password: 'password',
	firstName: 'Pam',
	lastName: 'Anderson',
    photoUrl: 'https://photo.venus.com/im/17078926.jpg?preset=product',
	age: 19,
	location: 'Morrow, Georgia',
	bio: 'I just graduated from GA Tech am ready to start dating again. I love cats and coding Java on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});

const samsssss = new User({
	userName: 'Sara4',
	password: 'password',
	firstName: 'Snookie',
	lastName: 'Harrow',
    photoUrl: 'https://images.express.com/is/image/expressfashion/0094_07922309_0058?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon',
	age: 28,
	location: 'Fulton, Georgia',
	bio: 'I just graduated from GA Tech am ready to start dating again. I love cats and coding Java on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});


Lesfemale.deleteMany({})
	.then(() => female.save())
Gaymale.deleteMany({})
	.then(() => gaymale.save())
Male.deleteMany({})
	.then(() => a.save())
	.then(() => male.save())
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