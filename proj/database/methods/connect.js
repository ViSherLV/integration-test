const mongoose = require('mongoose');

module.exports.connectToMongo = async function (
  uri,
  options = {
    ssl: true, poolSize: 2, useNewUrlParser: true, useUnifiedTopology: true,
  },
) {
  console.log(`[mongo][connect] db name ${process.env.DATABASE_NAME} mongo url ${process.env.mongourl}`);
  await mongoose.connect(process.env.mongourl, options);
};
