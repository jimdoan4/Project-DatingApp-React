require('dotenv').config();
const mongoose = require('mongoose');

const User = require('../models/User.js');
const Comment = require('../models/Comment.js');
const Event = require('../models/Event.js');