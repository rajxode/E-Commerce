
// import mongoose
const mongoose = require('mongoose');

// creating schema for storing user's data
const productSchema = new mongoose.Schema({
    // product id
    _id:{
        type:String,
    },
    // name of product
    name: {
        type: String,
        required: true,
        index: true,
    },
    // product quantity
    quantity:{
        type: String,
    }
});


// exporting the model made from schema for storing and reading data
module.exports = mongoose.model('Product',productSchema);