const { getUser } = require('../controllers/getUser');

module.exports = (app) => {
  app.get('/get', async (req, res) => {
    try {
      const { login } = req.query;
      const user = await getUser(login);
      res.send(user);
    } catch (error) {
      res.send(error.message);
    }
    res.send('Read user').status(200);
  });
};
