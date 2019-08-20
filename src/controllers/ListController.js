const List = require('../models/List');
const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const { userId } = req.params;
    const user = await User.findById(userId).exec();
    let lists = await List.
      find().
      populate({
        path: "users",
        match: {
          _id: user._id
        }
      }).
      exec();

    return res.json(lists);
  },

  async store(req, res) {
    const { userId } = req.params;
    const { name } = req.body;

    const user = await User.findById(userId).exec();
    const listExists = await List.
      find({ name }).
      populate({
        path: "users",
        match: {
          _id: user._id
        }
      }).
      exec();

      console.log(listExists);

    if (listExists.length > 0) {
      return res.json(listExists);
    }

    const list = await List.create({ name });
    list.users.push(user._id);
    list.save();

    return res.status(201).json(list);
  }
};