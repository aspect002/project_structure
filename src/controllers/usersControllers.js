const usersServices = require('../services/usersServices');

class UsersCountrollers {

  creatUser(req, res) {
    usersServices.creatUser(req.body);
    res.json(req.body);
  }

  getUsers(req, res) {
    const result = usersServices.getUsers();
    res.json(result);
  }
  getUserById(req, res) {
    const { id } = req.params;
    const user = usersServices.getUserById(Number(id));

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'Пользователь не найден' });
    }
  }

  updateUser(req, res) {
    const userId = parseInt(req.params.id);
    const { username, email, password } = req.body;

    const updatedUser = usersServices.updateUser(userId, { username, email, password });

    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).json({ error: 'Пользователь не найден' });
    }
  }
  updateUserPassword(req, res) {
    const userId = parseInt(req.params.id);
    const { password } = req.body;

    const updatedUser = usersServices.updateUserPassword(userId, password);

    if (updatedUser) {
      res.json({ message: "Пароль пользователя обновлен", user: updatedUser });
    } else {
      res.status(404).json({ error: 'Пользователь не найден' });
    }
  }
  deleteUser(req, res) {
    const userId = parseInt(req.params.id);
    const userIndex = usersServices.getUsers().findIndex(user => user.id === userId);

    if (userIndex !== -1) {
      usersServices.getUsers().splice(userIndex, 1);
      res.json({ message: "Пользователь удален" });
    } else {
      res.status(404).json({ error: 'Пользователь не найден' });
    }
  }
}

module.exports = new UsersCountrollers();
