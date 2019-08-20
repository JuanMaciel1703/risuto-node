const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const { id } = req.params;
    
    let user = null;
    let error = null;

    try {
        user = await User.findById(id, {}).exec();
    } catch (err) {
        error = err;
    }

    if (!user) {
        return res.status(404).json({ message: `User ${id} not found`, error: error});
    }

    return res.json(user);
  },

  async store(req, res) {
    const { name, email } = req.body;

    const userExists = await User.findOne({ email }).exec();

    if (userExists) {
      return res.status(400).json({ message: `User with email ${email} already registered`});
    }

    const user = await User.create({ name, email });

    return res.status(201).json(user);
  }
};