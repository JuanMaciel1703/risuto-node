const { Schema, model } = require('mongoose') 

const ListSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  users: [
    { type: Schema.Types.ObjectId, ref: 'User' }
  ],
  items: [{
    item: { type: Schema.Types.ObjectId, ref: 'Item' },
    quantity: { type: Number, default: 1 },
    observation: { type: String, default: "" },
    checked: { type: Boolean, default: false }
  }]
}, {
  timestamps: true,
}) 

module.exports = model('List', ListSchema) 