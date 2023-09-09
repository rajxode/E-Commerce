const mongoose = require('mongoose');

// Define the schema for the counter
const counterSchema = new mongoose.Schema({

    _id:{ 
        type: String,
        default: 'counter'
    }, // Sequence name (e.g., 'product_id')
    sequence_value: {
        type: Number, // The current sequence value
        default:0
    }
});

// Create the Counter model
const Counter = mongoose.model('Counter', counterSchema);

// Export the Counter model
module.exports = Counter;
