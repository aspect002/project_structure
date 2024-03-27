const express = require("express");
const router = express.Router();
const UsersControllers = require('../controllers/usersControllers');

router.post('/', UsersControllers.creatUser);

router.get('/', UsersControllers.getUsers)

router.get('/:id', UsersControllers.getUserById);

router.put('/:id', UsersControllers.updateUser);

router.patch('/:id', UsersControllers.updateUserPassword);

module.exports = router;
