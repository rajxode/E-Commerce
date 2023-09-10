
// Routes related to products

// importing express
const express = require('express');

// creating router
const router = express.Router();

// import controller
const productController = require('../controllers/productsController');

// render list of all the product
router.get('/', productController.products);

// create new product inside the product list
router.post('/create',productController.create);

// delete a product from list on the basis of params passed 
router.delete('/:id',productController.delete);

// update quantity of a product based on params and query
router.post('/:id/update_quantity/',productController.update);

// exporting the router
module.exports = router;