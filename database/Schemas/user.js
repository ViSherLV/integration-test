const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    login: 'string',
    firstName: 'string',
    lastName: 'string',
    email: 'string',
    password: 'string',
  },
);
const User = mongoose.model('User', schema);

module.exports = { User };
