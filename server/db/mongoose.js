var mongoose = require('mongoose');

// connected to mongodb database
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose};
