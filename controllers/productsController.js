
const Product = require('../models/Product');
const Counter = require('../models/Counter');

async function getNextSequenceValue(sequenceName) {
    const counter = await Counter.findOneAndUpdate(
        { _id: sequenceName },
        { $inc: { sequence_value: 1 } },
        { new: true, upsert: true }
    );
    return counter.sequence_value;
}


module.exports.products = async (req,res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.log(error);
    }
}



module.exports.create = async (req,res) => {
    try {
        const { name , quantity } = req.body;
        const productId = await getNextSequenceValue('counter');

        const product = await Product.create({
            _id:productId,
            name,
            quantity
        });
        await product.save();
        res.status(201).json(product);   
    } catch (error) {
        console.log(error);
    }
}


module.exports.delete = async (req,res) => {
    try {
        await Product.deleteOne({ _id: req.params.id });
        res.send({
            "success":true,
            "message":"product deleted"
        });    
    } catch (error) {
        console.log(error);
    }
    
}


module.exports.update = async (req,res) => {
    try {
        const productId = req.params.id;
        const quantity = req.query.number;
        const product = await Product.findOneAndUpdate(
            { _id: productId },
            { quantity  },
            { new:true }
        );
        res.json(product);

    } catch (error) {
        console.log(error);
    }
}