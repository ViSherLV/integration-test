const mongoose = require('mongoose');
const setEnv = require('../helpers');

setEnv();
mongoose.connect(process.env.mongourl, {
  ssl: true, poolSize: 2, useNewUrlParser: true, useUnifiedTopology: true,
});
//findOneAndDelete!
beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    // Ready to run the next test
    console.log(`done`)
    done()
  });
});
