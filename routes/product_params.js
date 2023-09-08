
const express = require('express');

const router = express.Router();

const paramsController = require('../controllers/deleteAndUpdateController');

router.delete('/',paramsController.delete);

module.exports = router;