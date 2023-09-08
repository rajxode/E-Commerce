
// import mongoose
const mongoose = require('mongoose');

// creating schema for storing user's data
const productSchema = new mongoose.Schema({
    // name of user
    id:{
        type: String,
        unique: true,
    },
    name:{
        type: String,
        default: null,
    },
    // email address
    quantity:{
        type: Number,
        unique:null,
    },
});


// exporting the model made from schema for storing and reading data
module.exports = mongoose.model('Product',productSchema);