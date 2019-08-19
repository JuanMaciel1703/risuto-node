const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

console.log(process.env);

mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@risuto-app-ope4b.mongodb.net/test?retryWrites=true&w=majority`, {
  useNewUrlParser: true
});

module.exports = mongoose;