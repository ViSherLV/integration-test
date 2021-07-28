const { deleteUser } = require('../controllers/deleteUser');

module.exports = async (app) => {
  app.delete('/delete/:user_login', async (req, res) => {
    try {
      const result = await deleteUser(req.params.user_login);
      res.send(result);
    } catch (error) {
      res.send(error.message);
    }
  });
};
