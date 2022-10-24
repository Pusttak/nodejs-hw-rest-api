const bcrypt = require('bcrypt');
const gravatar = require('gravatar');

const { User } = require('../../models/user');

const { RequestError } = require('../../helpers');

const signup = async (req, res) => {
  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw RequestError(409, 'Email in use');
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const avatarUrl = gravatar.url(email);
  const result = await User.create({ email, password: hashPassword, subscription, avatarUrl });
  res.status(201).json({
    user: {
      email: result.email,
      subscription: result.subscription,
    },
  });
};

module.exports = signup;
