
// importing product schema { store product data }
const Product = require('../models/Product');

// importing counter { for giving serial id to products}
const Counter = require('../models/Counter');

// increment the value of counter when new product is created
async function getNextSequenceValue(sequenceName) {
    // update the value of counter 
    const counter = await Counter.findOneAndUpdate(
        { _id: sequenceName },
        // increment the value of counter by 1
        { $inc: { sequence_value: 1 } },
        { new: true, upsert: true }
    );
    // return the value of counter
    return counter.sequence_value;
}


// to return list of all the product inside the database
module.exports.products = async (req,res) => {
    try {
        // getting products from database
        const products = await Product.find({});
        // return the list of products
        res.status(200).json(products);
    } 
    catch (error) {
        console.log(error);
    }
}


// add a new product to the list
module.exports.create = async (req,res) => {
    try {
        // getting data of product name and quantity from req.body
        const { name , quantity } = req.body;
        
        // getting new product_id from Counter database
        const productId = await getNextSequenceValue('counter');

        // creating new product inside the database
        const product = await Product.create({
            _id:productId,
            name,
            quantity
        });

        // save the product
        await product.save();

        // return the data of added product
        res.status(201).json(product);   
    } 
    catch (error) {
        // if there is some error
        console.log(error);
    }
}


// to delete a product from product list
module.exports.delete = async (req,res) => {
    try {
        // getting product_id from req.params
        const productId = req.params.id;
        
        // delete the product from database
        const result = await Product.findOneAndDelete({ _id: productId });

        // if product not found
        if (!result) {
            // return message product not found
            return res.status(404).json({
                success: false,
                message: 'Product not found',
            });
        }

        // if product is deleted return following message
        return res.status(200).json({
            success: true,
            message: 'Product deleted',
        });
    } 
    catch (error) {
        // if there is some error
        console.log(error);
    }
}


// for updating a product
module.exports.update = async (req,res) => {
    try {
        // getting product_id from params
        const productId = req.params.id;

        // getting updated quantity from req.query
        const quantity = req.query.number;

        // update the value of product 
        const product = await Product.findOneAndUpdate(
            { _id: productId },
            { quantity  },
            { new:true }
        );
        
        // if product not found inside the database
        if(!product){
            // return message
            return res.status(404).send('Product not found, please check id');           
        }

        // return the data of updated product
        res.status(201).json(product);

    } catch (error) {
        // if there is some error
        console.log(error);
    }
}