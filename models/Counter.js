
// import the mongoose
const mongoose = require('mongoose');

// Define the schema for the counter
const counterSchema = new mongoose.Schema({
    // id of document
    _id:{ 
        type: String,
        // giving default value of id
        default: 'counter'
    }, 
    // The current sequence value 
    count: {
        type: Number, 
        // initial value of count is 0
        default:0
    }
});

// Create the Counter model
const Counter = mongoose.model('Counter', counterSchema);

// Export the Counter model
module.exports = Counter;
