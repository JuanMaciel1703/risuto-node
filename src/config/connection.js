const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@risuto-app-ope4b.mongodb.net/test?retryWrites=true&w=majority`, {
  useNewUrlParser: true
});

console.log(mongoose);

module.exports = mongoose;