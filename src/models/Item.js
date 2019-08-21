const { Schema, model } = require('mongoose') 

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  }
}, {
  timestamps: true,
}) 

module.exports = model('Item', ItemSchema) 