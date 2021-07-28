const { User } = require('../database/Schemas/user');

const getUser = async (login) => {
  try {
    const user = await User.findOne({ login });
    return user;
  } catch (error) {
    return error.message;
  }
};

module.exports = { getUser };
