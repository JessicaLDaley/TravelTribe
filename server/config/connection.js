const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/travel-app', {
  useCreateIndex: true,
 });

module.exports = mongoose.connection;