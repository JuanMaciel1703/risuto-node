const { Schema, model } = require('mongoose');

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 1
  }
}, {
  timestamps: true,
});

module.exports = model('Item', ItemSchema);