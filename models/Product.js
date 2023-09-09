
// import mongoose
const mongoose = require('mongoose');

// creating schema for storing user's data
const productSchema = new mongoose.Schema({
    _id:{
        type:String,
    },
    name: {
        type: String,
        required: true,
        index: true,
    }
    ,
    quantity:{
        type: String,
    },
});


// exporting the model made from schema for storing and reading data
module.exports = mongoose.model('Product',productSchema);