const { Schema, model } = require('mongoose');

const ListSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  items: [{
      type: Schema.Types.ObjectId,
      ref: 'Item'
  }]
}, {
  timestamps: true,
});

module.exports = model('List', ListSchema);