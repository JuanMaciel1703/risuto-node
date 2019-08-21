const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator')
const jwt = require('jsonwebtoken')

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: value => {
        if (!validator.isEmail(value)) {
          throw new Error({ error: "Invalid Email Address" });
        }
      }
  },
  password: {
    type: String,
    required: true,
    minlength: 7
  },
  tokens: [{
    token: {
        type: String,
        required: true
    }
  }]
}, {
  timestamps: true,
});

UserSchema.pre('save', async function (next) {
  // Hash the password before saving the user model
  const user = this
  if (user.isModified('password')) {
      user.password = await bcrypt.hash(user.password, 8)
  }
  next()
})

UserSchema.methods.generateAuthToken = async function() {
  // Generate an auth token for the user
  const user = this
  const token = jwt.sign({_id: user._id}, process.env.JWT_KEY)
  user.tokens = user.tokens.concat({token})
  await user.save()
  return token
}

UserSchema.statics.findByCredentials = async (email, password) => {
  // Search for a user by email and password.
  const user = await User.findOne({ email} )
  if (!user) {
      throw new Error({ error: 'Invalid login credentials' })
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password)
  if (!isPasswordMatch) {
      throw new Error({ error: 'Invalid login credentials' })
  }
  return user
}

const User = model('User', UserSchema)

module.exports = User;