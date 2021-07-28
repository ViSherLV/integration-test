const { User } = require('../database/Schemas/user');

const deleteUser = async (login) => {
  try {
    const deletedUser = await User.findOneAndDelete({ login });
    console.log('deleted user', deleteUser);
    return deletedUser;
  } catch (error) {
    return error.message;
  }
};

module.exports = { deleteUser };
