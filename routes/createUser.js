const { createUser } = require('../controllers');

module.exports = async (app) => {
  app.post('/create', async (req, res) => {
    try {
      console.log('createUser', createUser);
      const newUser = await createUser(req.body);
      console.log('newUser', newUser);
      res.send(newUser);
    } catch (error) {
      res.send(error.message);
    }
    res.send('Create user').status(200);
  });
};
