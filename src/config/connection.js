const mongoose = require('mongoose') 
const dotenv = require('dotenv') 

dotenv.config() 

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true
}) 

module.exports = mongoose 