const { MaleSchema } = require('../db/schema.js');
const mongoose = require('../db/connection.js');

module.exports = mongoose.model('Male', MaleSchema);