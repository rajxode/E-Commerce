
// import express
const express = require('express');

// create router 
const router = express.Router();

// import home page Controller
const homeController = require('../controllers/homeController');

// render the homepage
router.get('/',homeController.home);

// import routes for products
router.use('/products',require('./product'))

// export the router
module.exports = router;