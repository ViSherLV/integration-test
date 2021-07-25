const { User } = require('../database/Schemas/user');

const createUser = async ({
  login, firstName, lastName, email, password,
}) => {
  const user = new User({
    login, firstName, lastName, email, password,
  });
  const savedUser = await user.save();
  return savedUser;
};

module.exports = { createUser };
