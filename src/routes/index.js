const express = require("express");
const router = express.Router();

const echoRoutes = require('./echoRoutes');

const usersRoutes = require('./usersRoutes');

router.use('/users', usersRoutes);
router.use('/echo', echoRoutes);

module.exports = router;
