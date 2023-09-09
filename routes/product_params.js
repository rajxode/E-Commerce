
const express = require('express');

const router = express.Router();

// const paramsController = require('../controllers/deleteAndUpdateController');
const productController = require('../controllers/productsController');

router.delete('/',productController.delete);
router.post('/update_quantity/',productController.update);

module.exports = router;