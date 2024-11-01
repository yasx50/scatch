const mongoose = require('mongoose');
const config = require('config')
const dbgr = require('debug')("development:mongoose");


const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.error('MongoDB connection error:', err));


module.exports = mongoose.connection;