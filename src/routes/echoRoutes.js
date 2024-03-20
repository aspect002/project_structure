const express = require('express');
const router = express.Router();
const echoController = require('../controllers/echoController');

router.get('/', echoController.getEcho);
router.post('/', echoController.postEcho);

module.exports = router;
