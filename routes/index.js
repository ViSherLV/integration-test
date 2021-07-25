const create = require('./createUser');
const deleteUser = require('./deleteUser');
const getUser = require('./getUser');
const updateUser = require('./updateUser');

module.exports = async (app) => {
  app.get('/', (req, res) => {
    res.send('CRUD service is on').status(200);
  });
  await create(app);
  deleteUser(app);
  getUser(app);
  updateUser(app);
};
