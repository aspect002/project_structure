const express = require("express");
const router = express.Router();
const UsersControllers = require('../controllers/usersControllers');
const usersHelpers = require('../helpers/usersHelpers');


router.use(usersHelpers.logRequest);

router.get('/', UsersControllers.getUsers); // получить

router.post('/', UsersControllers.creatUser); // создать юзера

router.get('/:id', UsersControllers.getUserById);

router.put('/:id', UsersControllers.updateUser);

router.patch('/:id', UsersControllers.updateUserPassword);

module.exports = router;
