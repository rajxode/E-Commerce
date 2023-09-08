
const express = require('express');

const router = express.Router();

const productController = require('../controllers/productsController');

router.get('/', productController.products);

router.post('/create',productController.create);

router.delete('/delete/:id',productController.delete);

// router.use('/:id',require('./product_params'));

module.exports = router;