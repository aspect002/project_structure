const express = require('express');
const router = express.Router();
const EchoController = require('../controllers/echoController');

router.get('/', EchoController.getEcho);
router.post('/', EchoController.postEcho);

module.exports = router;
