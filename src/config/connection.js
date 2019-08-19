const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@risuto-app-ope4b.mongodb.net/test?retryWrites=true&w=majority`, {
  useNewUrlParser: true
});

module.exports = mongoose;