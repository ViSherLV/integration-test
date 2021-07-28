const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');
const setEnv = require('./helpers');

setEnv('./.env');
const { connectToMongo } = require('./database');

app.use(bodyParser.json({
  limit: '10kb',
}));
connectToMongo('')
  .then(() => {
    console.log('Connected to mongo');
  })
  .catch((err) => {
    console.log(err);
  });

routes(app);
app.listen(process.env.PORT, (err) => {
  if (err) console.error(err);
  else console.log(`Running server at port ${process.env.PORT}!`);
});
