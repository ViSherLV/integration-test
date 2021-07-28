const { updateUser } = require('../controllers/updateUser');

module.exports = (app) => {
  app.patch('/update', async (req, res) => {
    try {
      const updatedUser = await updateUser(req.body);
      res.send(updatedUser);
    } catch (error) {
      res.send(error.message);
    }
    res.send('Update user').status(200);
  });
};
