require('dotenv').config();
const mongoose = require('mongoose');

const User = require('../models/User.js');
const Comment = require('../models/Comment.js');
const Mcomment = require('../models/Mcomment.js');
const Event = require('../models/Event.js');
const Mevent = require('../models/Mevent.js');
const Male = require('../models/Male.js');
const Gaymale = require('../models/Gaymale.js');
const Lesfemale = require('../models/Lesfemale.js');

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

//gaymale
const gm1 = new Gaymale({
	firstName: 'James',
	lastName: 'Han',
	photoUrl: 'https://i.pinimg.com/736x/e4/e7/8c/e4e78c0a1bf12d307b589227de626a0b--gorgeous-men-beautiful-people.jpg',
	age: 28,
	location: 'Fulton, Georgia',
	bio: 'I just graduated from UGA am ready to start dating again. I love cats and coding Python on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});

const gm2 = new Gaymale({
	firstName: 'Joe',
	lastName: 'Hender',
	photoUrl: 'https://intersalon.ee/wp-content/uploads/2016/09/14141661_1110944172309568_98520967740312348_n.jpg',
	age: 28,
	location: 'Fulton, Georgia',
	bio: 'I just graduated from UGA am ready to start dating again. I love cats and coding Python on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});

const gm3 = new Gaymale({
	firstName: 'James',
	lastName: 'Han',
	photoUrl: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/D2E9/production/_94639935_stefan3.jpg',
	age: 28,
	location: 'Fulton, Georgia',
	bio: 'I just graduated from UGA am ready to start dating again. I love cats and coding Python on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});

const gm4 = new Gaymale({
	firstName: 'James',
	lastName: 'Han',
	photoUrl: 'https://data.whicdn.com/images/89546444/original.jpg',
	age: 28,
	location: 'Fulton, Georgia',
	bio: 'I just graduated from UGA am ready to start dating again. I love cats and coding Python on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});

const gm5 = new Gaymale({
	firstName: 'James',
	lastName: 'Han',
	photoUrl: 'https://pbs.twimg.com/media/CjFOwxiW0AAoiqG.jpg:large',
	age: 28,
	location: 'Fulton, Georgia',
	bio: 'I just graduated from UGA am ready to start dating again. I love cats and coding Python on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});
const gm6 = new Gaymale({
	firstName: 'James',
	lastName: 'Han',
	photoUrl: 'https://www.famousbirthdays.com/faces/tomlin-stefan-pierre-image.jpg',
	age: 28,
	location: 'Fulton, Georgia',
	bio: 'I just graduated from UGA am ready to start dating again. I love cats and coding Python on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});

const gm7 = new Gaymale({
	firstName: 'James',
	lastName: 'Han',
	photoUrl:
		'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vitalijus-1-1522322806.jpeg?crop=1xw:1xh;center,top&resize=480:*',
	age: 28,
	location: 'Fulton, Georgia',
	bio: 'I just graduated from UGA am ready to start dating again. I love cats and coding Python on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});

const gm8 = new Gaymale({
	firstName: 'James',
	lastName: 'Han',
	photoUrl:
		'https://mars.nasa.gov/people/images/profile/1x1/rfrancis-22826-profile-hi_F9C4E5F6-5645-4186-9A35995CDA924E4A.jpg',
	age: 28,
	location: 'Fulton, Georgia',
	bio: 'I just graduated from UGA am ready to start dating again. I love cats and coding Python on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});

const gm9 = new Gaymale({
	firstName: 'James',
	lastName: 'Han',
	photoUrl: 'https://beautifyatlanta.com/wp-content/uploads/parser/alex-jones-beard-1.jpg',
	age: 28,
	location: 'Fulton, Georgia',
	bio: 'I just graduated from UGA am ready to start dating again. I love cats and coding Python on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});

const gm10 = new Gaymale({
	firstName: 'James',
	lastName: 'Han',
	photoUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
	age: 28,
	location: 'Fulton, Georgia',
	bio: 'I just graduated from UGA am ready to start dating again. I love cats and coding Python on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});

const gm11 = new Gaymale({
	firstName: 'James',
	lastName: 'Han',
	photoUrl: 'https://www.face-agency.co.uk/images/uploads/models/large/1470043935-21.jpg',
	age: 28,
	location: 'Fulton, Georgia',
	bio: 'I just graduated from UGA am ready to start dating again. I love cats and coding Python on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});

const gm12 = new Gaymale({
	firstName: 'James',
	lastName: 'Han',
	photoUrl: 'https://www.wllawsd.com/wp-content/uploads/2018/06/daniel-1.jpg',
	age: 28,
	location: 'Fulton, Georgia',
	bio: 'I just graduated from UGA am ready to start dating again. I love cats and coding Python on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});

//female
const f1 = new Lesfemale({
	firstName: 'Jackie',
	lastName: 'Hank',
	photoUrl:
		'https://cdn.shopify.com/s/files/1/2714/9310/products/76781_1_50a648ed-fce4-4445-8157-2749cb7afcf3_775x.JPG?v=1554145796?w=331',
	age: 28,
	location: 'Fulton, Georgia',
	bio: 'I just graduated from UGA am ready to start dating again. I love cats and coding Python on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});

const f2 = new Lesfemale({
	firstName: 'Jackie',
	lastName: 'Hank',
	photoUrl:
		'https://www.poeticjusticejeans.com//media/catalog/product/l/i/little-black-dress-lace-panel-sides-poetic-justice-maja-ho16409pr-sd.jpg',
	age: 28,
	location: 'Fulton, Georgia',
	bio: 'I just graduated from UGA am ready to start dating again. I love cats and coding Python on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});

const f3 = new Lesfemale({
	firstName: 'Jackie',
	lastName: 'Hank',
	photoUrl:
		'https://s3-us-west-1.amazonaws.com/www.vivaglammagazine.com/wp-content/uploads/2019/02/how-to-style-your-little-black-dress-elegant-lbd-with-nice-heels.jpg',
	age: 28,
	location: 'Fulton, Georgia',
	bio: 'I just graduated from UGA am ready to start dating again. I love cats and coding Python on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});

const f4 = new Lesfemale({
	firstName: 'Jackie',
	lastName: 'Hank',
	photoUrl:
		'https://cdn.shopify.com/s/files/1/0293/9277/products/12-05-18_Studio_2_13-25-56_72450_Black_0427_JD_JF_600x.jpg?v=1544202558',
	age: 28,
	location: 'Fulton, Georgia',
	bio: 'I just graduated from UGA am ready to start dating again. I love cats and coding Python on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});

const f5 = new Lesfemale({
	firstName: 'Jackie',
	lastName: 'Hank',
	photoUrl:
		'https://media.nastygal.com/i/nastygal/agg86163_black_xl?$product_image_category_page_horizontal_filters_desktop$',
	age: 28,
	location: 'Fulton, Georgia',
	bio: 'I just graduated from UGA am ready to start dating again. I love cats and coding Python on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});

const f6 = new Lesfemale({
	firstName: 'Jackie',
	lastName: 'Hank',
	photoUrl: 'https://cdn.executiveponies.com/media/catalog/product/t/n/tn_dancing_mood_dress_in_black_sequin.jpg',
	age: 28,
	location: 'Fulton, Georgia',
	bio: 'I just graduated from UGA am ready to start dating again. I love cats and coding Python on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});

const f7 = new Lesfemale({
	firstName: 'Jackie',
	lastName: 'Hank',
	photoUrl:
		'https://cdn.shopify.com/s/files/1/2714/9310/products/Unique_Vintage_Black_Beaded_Sequin_Margaux_Sleeved_Fringe_Flapper_Dress_1_099c18d6-04b8-4bb2-8c06-ff1c12660f93_1024x1024.jpg?v=1545251688',
	age: 28,
	location: 'Fulton, Georgia',
	bio: 'I just graduated from UGA am ready to start dating again. I love cats and coding Python on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});

const f8 = new Lesfemale({
	firstName: 'Jackie',
	lastName: 'Hank',
	photoUrl: 'https://img.ltwebstatic.com/images/pi/201710/d5/15078910542851474215_thumbnail_600x.jpg',
	age: 28,
	location: 'Fulton, Georgia',
	bio: 'I just graduated from UGA am ready to start dating again. I love cats and coding Python on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});

const f9 = new Lesfemale({
	firstName: 'Jackie',
	lastName: 'Hank',
	photoUrl:
		'https://dynamic.zacdn.com/drcoBc6vpsHB-aBopTGP1fs3l7w=/fit-in/346x500/filters:quality(95):fill(ffffff)/http://static.my.zalora.net/p/ripe-maternity-1581-2065341-1.jpg',
	age: 28,
	location: 'Fulton, Georgia',
	bio: 'I just graduated from UGA am ready to start dating again. I love cats and coding Python on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});

const f10 = new Lesfemale({
	firstName: 'Jackie',
	lastName: 'Hank',
	photoUrl: 'https://www.lulus.com/images/product/xlarge/3768760_772062.jpg?w=331',
	age: 28,
	location: 'Fulton, Georgia',
	bio: 'I just graduated from UGA am ready to start dating again. I love cats and coding Python on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});

const f11 = new Lesfemale({
	firstName: 'Jackie',
	lastName: 'Hank',
	photoUrl: 'https://assets.capitalfm.com/2018/23/lilliya-scarlett-instagram-1528814125-custom-0.png',
	age: 28,
	location: 'Fulton, Georgia',
	bio: 'I just graduated from UGA am ready to start dating again. I love cats and coding Python on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});

const f12 = new Lesfemale({
	firstName: 'Jackie',
	lastName: 'Hank',
	photoUrl:
		'http://cdn01.cdn.justjared.com/wp-content/uploads/2015/05/rdma-portraits/hailee-steinfeld-rumer-willis-pose-for-just-jared-portrait-session-11.jpg',
	age: 28,
	location: 'Fulton, Georgia',
	bio: 'I just graduated from UGA am ready to start dating again. I love cats and coding Python on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});

// straight female
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
	password: 'password',
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
	photoUrl:
		'https://i.pinimg.com/236x/15/7a/cf/157acf6b526dea5c191079c020f3419d--leather-vest-outfit-womens-leather-vest.jpg',
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
	photoUrl:
		'https://images.express.com/is/image/expressfashion/0094_07922309_0058?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon',
	age: 28,
	location: 'Fulton, Georgia',
	bio: 'I just graduated from GA Tech am ready to start dating again. I love cats and coding Java on a daily basis',
	events: [ ihop ],
	comments: [ great ]
});

Gaymale.deleteMany({})
	.then(() => gm1.save())
	.then(() => gm2.save())
	.then(() => gm3.save())
	.then(() => gm4.save())
	.then(() => gm5.save())
	.then(() => gm6.save())
	.then(() => gm7.save())
	.then(() => gm8.save())
	.then(() => gm9.save())
	.then(() => gm10.save())
	.then(() => gm11.save())
	.then(() => gm12.save())
	.then(() => console.log('Successful Save'));
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
	.then(() => console.log('Successful Save'));
Lesfemale.deleteMany({})
	.then(() => f1.save())
	.then(() => f2.save())
	.then(() => f3.save())
	.then(() => f4.save())
	.then(() => f6.save())
	.then(() => f5.save())
	.then(() => f7.save())
	.then(() => f8.save())
	.then(() => f9.save())
	.then(() => f10.save())
	.then(() => f11.save())
	.then(() => f12.save())
	.then(() => console.log('Successful Save'));
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
