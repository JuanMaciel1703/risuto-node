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
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email }).exec();

    if (userExists) {
      return res.status(400).json({ message: `User with email ${email} already registered`});
    }

    try {
      const user = new User({ name, email, password });
      await user.save();
      const token = await user.generateAuthToken()
  
      res.status(201).send({ user, token });
    } catch (err) {
      res.status(400).send(err);
    }

    return res;
  }
};