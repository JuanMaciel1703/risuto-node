const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

console.log(process.env.MONGODB_URI)

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true
});

module.exports = mongoose;