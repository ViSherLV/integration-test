module.exports = function (path) {
  const options = { debug: false, path };
  const result = require('dotenv').config(options);
  if (result) {
    console.log('env initialized');
  } else {
    console.log('env error');
  }
};
