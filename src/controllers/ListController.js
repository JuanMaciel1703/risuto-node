const List = require('../models/List');

module.exports = {
  async index(req, res) {
    const lists = await List.find({});
    return res.json(lists);
  },

  async store(req, res) {
    const { name } = req.body;

    const listExists = await List.findOne({ name });

    if (listExists) {
      return res.json(listExists);
    }

    const list = await List.create({
      name
    })

    return res.status(201).json(list);
  }
};