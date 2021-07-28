const { User } = require('../database/Schemas/user');

const updateUser = async (data) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { login: data.login }, { ...data }, { new: true },
    );
    return updatedUser;
  } catch (error) {
    return error.message;
  }
};

module.exports = { updateUser };
