
const express = require('express');

const router = express.Router();

const productController = require('../controllers/productsController');

router.get('/', productController.products);

router.post('/create',productController.create);

module.exports = router;